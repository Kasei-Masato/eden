const galleries = {
    
    1: {
        title: "Малая Нирвана",
        images: [
        "images/photos/rooms/s-nirv1.jpg",
        "images/photos/rooms/s-nirv2.jpg",
        "images/photos/rooms/s-nirv3.jpg",
        "images/photos/rooms/s-nirv4.jpg",
        "images/photos/rooms/s-nirv5.jpg"
        ]
    },

    2: {
        title: "Большая Нирвана",
        images: [
        "images/photos/rooms/b-nirv1.jpg",
        "images/photos/rooms/b-nirv2.jpg",
        "images/photos/rooms/b-nirv3.jpg",
        "images/photos/rooms/b-nirv4.jpg",
        "images/photos/rooms/b-nirv5.jpg"
        ]
    },

    3: {
        title: "Семейная",
        images: [
        "images/photos/rooms/family1.jpg",
        "images/photos/rooms/family2.jpg",
        "images/photos/rooms/family3.jpg",
        "images/photos/rooms/family4.jpg",
        "images/photos/rooms/family5.jpg",
        "images/photos/rooms/family6.jpg"
        ]
    },

    4: {
        title: "Делюкс",
        images: [
        "images/photos/rooms/delux1.jpg",
        "images/photos/rooms/delux2.jpg",
        "images/photos/rooms/delux3.jpg",
        "images/photos/rooms/delux4.jpg",
        "images/photos/rooms/delux5.jpg",
        "images/photos/rooms/delux6.jpg",
        "images/photos/rooms/delux7.jpg"
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

    6: {
        title: "Супер",
        images: [
        "images/photos/rooms/super1.jpg",
        "images/photos/rooms/super2.jpg",
        "images/photos/rooms/super3.jpg",
        "images/photos/rooms/super4.jpg",
        "images/photos/rooms/super5.jpg",
        "images/photos/rooms/super6.jpg",
        "images/photos/rooms/super7.jpg",
        "images/photos/rooms/super8.jpg",
        "images/photos/rooms/super9.jpg",
        "images/photos/rooms/super10.jpg",
        "images/photos/rooms/super11.jpg",
        "images/photos/rooms/super12.jpg"
        ]
    },

    7: {
        title: "VIP",
        images: [
        "images/photos/rooms/vip1.jpg",
        "images/photos/rooms/vip2.jpg",
        "images/photos/rooms/vip3.jpg",
        "images/photos/rooms/vip4.jpg",
        "images/photos/rooms/vip5.jpg",
        "images/photos/rooms/vip6.jpg",
        "images/photos/rooms/vip7.jpg",
        "images/photos/rooms/vip8.jpg",
        "images/photos/rooms/vip9.jpg",
        "images/photos/rooms/vip10.jpg",
        "images/photos/rooms/vip11.jpg",
        "images/photos/rooms/vip12.jpg",
        "images/photos/rooms/vip13.jpg",
        "images/photos/rooms/vip14.jpg"
        ]
    }
};

const overlay = document.getElementById("overlay");
const gallery = document.getElementById("gallery");
const track = document.getElementById("track");
const title = document.getElementById("galleryTitle");

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
