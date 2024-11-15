const burger = document.getElementById("burger");
const menub = document.getElementById("menu");

burger.addEventListener('click', (event) => {
        if(menu.style.display == "none") {
            menu.style.display = "flex"
            document.getElementById("navbar").style.borderRadius = "50px 50px 0 50px";
        } else {
            menu.style.display = "none"
            document.querySelector("nav ul").style.borderRadius = "50px 50px 50px 50px";

        } 
        event.stopPropagation();
    }
);
document.addEventListener('click', () => {
    if (menu.style.display === "flex"){
        menu.style.display = "none";
        document.querySelector("nav ul").style.borderRadius = "50px 50px 50px 50px";
    }
})
