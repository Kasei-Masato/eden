const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

document.getElementById("menuButton").addEventListener("click", () => {
    menu.classList.add("open");
    overlay.classList.add("show");
});

function closeMenu(){
    menu.classList.remove("open");
    overlay.classList.remove("show");
}

document.getElementById("closeButton").addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape"){
        closeMenu();
    }
});