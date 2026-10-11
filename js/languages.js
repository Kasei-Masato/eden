
const translations = {

    ru: {
        "mpAdd1": "Медерова 189",
        "mpQuantity1": "без номеров &bull; 7 саун",
        "mpObinfo1": 'Атмосфера уюта и релаксации, исцеляющая парная, турецкий хамам, тёплый и прохладный бассейны - все это ждет вас в нашем комплексе "Банный Двор"!',
        "mpCubutton1": "Узнать больше",
        "mpAdd2": "Турусбекова 6/1",
        "mpQuantity2": "4 номера &bull; 1 сауна",
        "mpObinfo2": 'Уютное место в центре Бишкека, где можно комфортно отдохнуть, повеселиться с друзьями, и просто хорошо провести время.',
        "mpCubutton2": "Көбүрөөк билүү",
        "menu1": "Главная Страница",
        "menu2": "Гостиницы:",
        "menu3": "&#8212; Турусбекова 6/1",
        "menu4": "&#8212; Медерова 189",
        "menu5": "Партнерам",
        "menu6": "Вакансии",
    },

    en: {
        "mpAdd1": "Mederova 189",
        "mpQuantity1": "No rooms &bull; 7 saunas",
        "mpObinfo1": "An atmosphere of comfort and relaxation, a healing steam room, a Turkish hammam, warm and cool pools — all this awaits you at our “Banny Dvor” complex!",
        "mpCubutton1": "Learn more",
        "mpAdd2": "Turusbekova 6/1",
        "mpQuantity2": "4 rooms • 1 sauna",
        "mpObinfo2": 'A cozy place in the heart of Bishkek where you can relax in comfort, have fun with friends, and simply enjoy your time.',
        "mpCubutton2": "Көбүрөөк билүү",
        "menu1": "Home",
        "menu2": "Hotels:",
        "menu3": "— Turusbekova 6/1",
        "menu4": "— Mederova 189",
        "menu5": "To Partners",
        "menu6": "Vacancies",
    },

    ky: {
        "mpAdd1": "Медерова 189",
        "mpQuantity1": "Бөлмөлөр жок &bull; 7 сауна",
        "mpObinfo1": "Жайлуулук жана эс алуу атмосферасы, шыпаа берүүчү буу бөлмөсү, түрк хамамы, жылуу жана салкын бассейндер — мунун баары сизди биздин «Банный Двор» комплексибизде күтөт!",
        "mpCubutton1": "Көбүрөөк билүү",
        "mpAdd2": "Турусбекова 6/1",
        "mpQuantity2": "4 бөлмө • 1 сауна",
        "mpObinfo2": 'Бишкектин борборунда жайгашкан жайлуу жер. Бул жерде ыңгайлуу эс алып, досторуңуз менен көңүл ачып, убактыңызды жакшы өткөрө аласыз.',
        "mpCubutton2": "Көбүрөөк билүү",
        "menu1": "Башкы бет",
        "menu2": "Мейманканалар:",
        "menu3": "— Турусбекова 6/1",
        "menu4": "— Медерова 189",
        "menu5": "Өнөктөштөр",
        "menu6": "Бош орундар",
    }

};

const images = {

    "our-hotels": {
        ru: "images/our-hotels-ru.png",
        en: "images/our-hotels-en.png",
        ky: "images/our-hotels-ky.png"
    }

};

const en = document.getElementById("en");
const ky = document.getElementById("ky");
const ru = document.getElementById("ru");

function changeLanguage(language) {

    localStorage.setItem("language", language);

    applyLanguage(language);

}


// Update text and images
// Change language when a button is clicked

function changeLanguage(language) {

    localStorage.setItem("language", language);

    applyLanguage(language);

}


// Apply language to the current page

function applyLanguage(language) {

    // ---------- TEXT ----------

    const languageText = translations[language];

    for (const id in languageText) {

        const element = document.getElementById(id);

        // If this element exists on this page, change it.
        if (element) {
            element.innerHTML = languageText[id];
        }

    }


    // ---------- IMAGES ---------- Fix Later
    for (const id in images) {

        const element = document.getElementById(id);

        // If this image exists on this page, change it.
        if (element) {
            element.src = images[id][language];
        }

    }



    document.documentElement.lang = language;

    console.log("test");
    

    // ---------- ACTIVE FLAG ----------

    const buttons =
        document.querySelectorAll(".language-buttons button");

    buttons.forEach(button => {

        if (button.dataset.lang === language) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }

    });

}

const savedLanguage =
    localStorage.getItem("language") || "ru";

applyLanguage(savedLanguage);