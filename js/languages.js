

const translations = {

    ru: {
        index: {
            mpAdd1: "Медерова 189",
            mpQuantity1: "без номеров &bull; 7 саун",
            mpObinfo1: 'Атмосфера уюта и релаксации, исцеляющая парная, турецкий хамам, тёплый и прохладный бассейны - все это ждет вас в нашем комплексе "Банный Двор"!',
            mpCubutton: "Узнать больше",
            mpAdd2: "Турусбекова 6/1",
            mpQuantity2: "4 номера &bull; 1 сауна",
            mpObinfo2: 'Уютное место в центре Бишкека, где можно комфортно отдохнуть, повеселиться с друзьями, и просто хорошо провести время.',
        },

        turusbekova: {
            title: "Наши услуги",
            description: "Мы предлагаем различные услуги для гостей.",
            nextPage: "Вернуться на главную страницу",
            image: "images/services-ru.webp",
            alt: "Услуги"
        }
    },

    en: {
        index: {
            mpAdd1: "Mederova 189",
            mpQuantity1: "No rooms &bull; 7 saunas",
            mpObinfo1: "An atmosphere of comfort and relaxation, a healing steam room, a Turkish hammam, warm and cool pools — all this awaits you at our “Banny Dvor” complex!",
            mpCubutton: "Learn more",
            mpAdd2: "Turusbekova 6/1",
            mpQuantity2: "4 rooms • 1 sauna",
            mpObinfo2: 'A cozy place in the heart of Bishkek where you can relax in comfort, have fun with friends, and simply enjoy your time.',
        },

        turusbekova: {
            title: "Our Services",
            description: "We offer various services for our guests.",
            nextPage: "Return to the home page",
            image: "images/services-en.webp",
            alt: "Services"
        }
    },

    ky: {
        index: {
            mpAdd1: "Медерова 189",
            mpQuantity1: "Бөлмөлөр жок &bull; 7 сауна",
            mpObinfo1: "Жайлуулук жана эс алуу атмосферасы, шыпаа берүүчү буу бөлмөсү, түрк хамамы, жылуу жана салкын бассейндер — мунун баары сизди биздин «Банный Двор» комплексибизде күтөт!",
            mpCubutton: "Көбүрөөк билүү",
            mpAdd2: "Турусбекова 6/1",
            mpQuantity2: "4 бөлмө • 1 сауна",
            mpObinfo2: 'Бишкектин борборунда жайгашкан жайлуу жер. Бул жерде ыңгайлуу эс алып, досторуңуз менен көңүл ачып, убактыңызды жакшы өткөрө аласыз.',
        },

        turusbekova: {
            title: "サービス",
            description: "お客様にさまざまなサービスを提供しています。",
            nextPage: "ホームページに戻る",
            image: "images/services-ja.webp",
            alt: "サービス"
        }
    }

};

const en = document.getElementById("en");
const ky = document.getElementById("ky");
const ru = document.getElementById("ru");


// Update text and images
function updatePage(language) {

    const page = window.location.pathname.endsWith("turusbekova/index.html")
        ? "turusbekova"
        : "index";

    const content = translations[language][page];

    document.documentElement.lang = language;

    document.getElementById("mp-add1").innerHTML = content.mpAdd1;

    document.getElementById("mp-quantity1").innerHTML = content.mpQuantity1;

    document.getElementById("mp-obinfo1").innerHTML = content.mpObinfo1;

    document.getElementById("mp-cubutton1").innerHTML = content.mpCubutton;
    document.getElementById("mp-cubutton2").innerHTML = content.mpCubutton;

    document.getElementById("mp-add2").innerHTML = content.mpAdd2;

    document.getElementById("mp-quantity2").innerHTML = content.mpQuantity2;

    document.getElementById("mp-obinfo2").innerHTML = content.mpObinfo2;
    
    document.querySelectorAll("button").forEach(button => {
    button.classList.toggle("active", button.dataset.lang === language);
});

}




function changeLanguage(language) {

    localStorage.setItem("language", language);

    updatePage(language);

    console.log("language =", language);

}

const savedLanguage = localStorage.getItem("language") || "ru";

updatePage(savedLanguage);