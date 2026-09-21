const galleries = {
    
    1: {
        title: "Люкс №1",
        images: [
        "images/photos/rooms/s-nirv1.jpg",
        "images/photos/rooms/s-nirv2.jpg",
        "images/photos/rooms/s-nirv3.jpg",
        "images/photos/rooms/s-nirv4.jpg",
        "images/photos/rooms/s-nirv5.jpg"
        ]
    },

    2: {
        title: "Люкс №2",
        images: [
        "images/photos/rooms/lux2-1.jpg",
        "images/photos/rooms/lux2-2.jpg",
        "images/photos/rooms/lux2-3.jpg",
        "images/photos/rooms/lux2-4.jpg"
        ]
    },

    3: {
        title: "Делюкс №3",
        images: [
        "images/photos/rooms/delux3-1.jpg",
        "images/photos/rooms/delux3-2.jpg",
        "images/photos/rooms/delux3-3.jpg"
        ]
    },

    4: {
        title: "Делюкс №4",
        images: [
        "images/photos/rooms/delux4-1.jpg",
        "images/photos/rooms/delux4-2.jpg",
        "images/photos/rooms/delux4-3.jpg"
        ]
    },

    5: {
        title: "Люкс",
        images: [
        "images/photos/rooms/lux1.jpg",
        "images/photos/rooms/lux2.jpg",
        "images/photos/rooms/lux3.jpg",
        "images/photos/rooms/lux4.jpg",
        "images/photos/rooms/lux5.jpg",
        "images/photos/rooms/lux6.jpg",
        "images/photos/rooms/lux7.jpg",
        "images/photos/rooms/lux8.jpg",
        "images/photos/rooms/lux9.jpg",
        "images/photos/rooms/lux10.jpg",
        ]
    },
};

const overlay = document.getElementById("overlay");
const gallery = document.getElementById("gallery");
const track = document.getElementById("track");
const title = document.getElementById("galleryTitle");
const x = document.getElementById("x");

let currentGallery = [];
let slideIndex = 0;

function openGallery(id){
    currentGallery = galleries[id].images;
    slideIndex = 0;

    title.textContent = galleries[id].title;

    track.innerHTML = "";

    currentGallery.forEach(src => {
        const slide = document.createElement("div");
        slide.className = "slide";
        slide.innerHTML = `<img src="${src}" alt="">`;
        track.appendChild(slide);
    });

    updateSlider();

    overlay.classList.remove("hidden");
    gallery.classList.remove("hidden");
}

function updateSlider(){
    track.style.transform =
        `translateX(-${slideIndex * 100}%)`;
}

function changeSlide(direction){
    slideIndex += direction;

    if (slideIndex >= currentGallery.length){
        slideIndex = 0;
    }

    if (slideIndex < 0){
        slideIndex = currentGallery.length - 1;
    }

    updateSlider();
}

overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    gallery.classList.add("hidden");
});

x.addEventListener("click", () => {
    overlay.classList.add("hidden");
    gallery.classList.add("hidden");
});
