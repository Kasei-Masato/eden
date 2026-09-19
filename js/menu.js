const menu = document.getElementById("sideMenu");
const overlay2 = document.getElementById("overlay2");

document.getElementById("menuButton").addEventListener("click", () => {
    menu.classList.add("open");
    overlay2.classList.remove("hidden");
});

function closeMenu(){
    menu.classList.remove("open");
    overlay2.classList.add("hidden");
}

document.getElementById("closeButton").addEventListener("click", closeMenu);

overlay2.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape"){
        closeMenu();
    }
});