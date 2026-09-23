const galleries = {
    
    1: {
        title: "Люкс №1",
        images: [
        "images/photos/rooms/lux1-1.jpg",
        "images/photos/rooms/lux1-2.jpg",
        "images/photos/rooms/lux1-3.jpg",
        "images/photos/rooms/lux1-4.jpg",
        "images/photos/rooms/lux1-5.jpg"
        ]
    },

    2: {
        title: "Люкс №2",
        images: [
        "images/photos/rooms/lux2-1.jpg",
        "images/photos/rooms/lux2-2.jpg",
        "images/photos/rooms/lux2-3.jpg",
        "images/photos/rooms/lux2-4.jpg",
        "images/photos/rooms/lux2-5.jpg"
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
        "images/photos/rooms/sauna1.jpg",
        "images/photos/rooms/sauna2.jpg",
        "images/photos/rooms/sauna3.jpg",
        "images/photos/rooms/sauna4.jpg",
        "images/photos/rooms/sauna5.jpg",
        "images/photos/rooms/sauna6.jpg",
        "images/photos/rooms/sauna7.jpg",
        "images/photos/rooms/sauna8.jpg",
        "images/photos/rooms/sauna9.jpg",
        "images/photos/rooms/sauna10.jpg"
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
