const form = document.getElementById('formulaire');
const fNameInput = document.getElementById('fName');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const object = document.getElementById('object');
const infos = document.getElementById('infos');


// Lancement de la validation 
form.addEventListener('submit', function(event) {
    let errors = [];
    

    if (fNameInput.value.trim() === '') {
        errors.push('Veuillez saisir votre nom.');
    }
    if (nameInput.value.trim() === '') {
        errors.push('Veuillez saisir votre prénom.');
    }
    if (object.value.trim() === '') {
        errors.push("Veuillez saisir l'objet");
    }
    if (infos.value.trim() === '') {
        errors.push('Veuillez saisir des informations complémentaires');
    }
    

    // Gestions des erreurs  et blocage de l'envoie du formulaire
    if (errors.length > 0) {
        event.preventDefault();
        displayErrors(errors);
    }
    
    
    // alert(document.querySelectorAll('[class="error"]').length)

});


    // Fonction d'affichage des erreurs
function displayErrors(errors) {

    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "";

    // if (document.querySelectorAll('[class="error"]').length === 1) {
    //     form.removeChild(errorContainer)[0];
    // }
    

    // Boucle qui affiche toutes les erreurs
    errors.forEach(function(error) {

        const errorMessage = document.createElement('p');
        errorMessage.textContent = error;
        errorContainer.appendChild(errorMessage);   
    });
    
    // On affiche les erreurs à la fin du formulaire 
    form.appendChild(errorContainer);

    
}
