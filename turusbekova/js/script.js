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

const info = {
    1: {
        title: "День/Ночь",
        yadaYada: "День с 10:00 до 22:00<br><br>Ночь с 22:00 до 10:00"
    },

    2: {
        title: "Как работает доплата:",
        yadaYada: "Если вы возьмёте любой пакет за указанные суммы, как например пакет “Сутки”, и вам понадобится больше времени, то вы можете доплатить по 500 сом за один час.<br><br>Так получится 6000 (за пакет) + 500 (за каждый доп. час) = 6500 сом за сутки и один доп. час.<br><br>Также и с пакетом на два часа. Вы платите 1700 сом за первые два часа, а после вы можете доплатить по 500 сом за час."
    },
};    

const overlay = document.getElementById("overlay");
const gallery = document.getElementById("gallery");
const track = document.getElementById("track");
const actualTrack = document.getElementById("actualTrack");
const title = document.getElementById("galleryTitle");
const text = document.getElementById("infoText");
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
    actualTrack.classList.remove("hidden");
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

function openInfo(id){
    title.textContent = info[id].title;

    text.innerHTML = info[id].yadaYada;

    overlay.classList.remove("hidden");
    gallery.classList.remove("hidden");
    text.classList.remove("hidden");
}

overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    gallery.classList.add("hidden");
    text.classList.add("hidden");
    actualTrack.classList.add("hidden");
});

x.addEventListener("click", () => {
    overlay.classList.add("hidden");
    gallery.classList.add("hidden");
    text.classList.add("hidden");
    actualTrack.classList.add("hidden");
});
