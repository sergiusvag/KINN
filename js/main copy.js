let currentLanguage = 'en';

class Language {
    constructor(GEMOR,cardtitle, CARDTEXT) {
        this.GEMOR = GEMOR;
        this.cardtitle = cardtitle;
        this.CARDTEXT = CARDTEXT;

    }
}


const languages = new Map([
    // ['ar', new Language('رمز', 'اسم', 'نوع', 'القيم المتاحة', 'وصف', 'الرؤية')],
    // ['en', new Language('Code', 'Name', 'Type', 'Available values', 'Description', 'Visibility')],
    ['dutch', new Language('Profielkaarten', 'Titel van de kaart', 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.')],
    ['he-IL', new Language(' כרטיסי פרופיל', 'שם', 'סוגת')],
]);


function getLanguages() {
    const langDropdownElement = document.getElementsById('lang-dropdown');
    for (let lang of languages.keys()) {
        langDropdownElement.innerHTML += `<li onclick="setLang('${lang}')"><a class="dropdown-item" href="#">${lang}</a></li>`;
    }
}

class cardLanguage {
    constructor(cardTitleOne, cardTitleTwo, cardTitleThree, cardTextOne, cardTextTwo, cardTextThree) {
        this.cardTitleOne = cardTitleOne;
        this.cardTitleTwo = cardTitleTwo;
        this.cardTitleThree = cardTitleThree;
        this.cardTextOne = cardTextOne;
        this.cardTextTwo = cardTextTwo;
        this.cardTextThree = cardTextThree;

    }
}
const cardLanguages = new Map([
    ['dutch', new cardLanguage('card 1', '2nd card', 'final card','text 1', '2nd text', 'final text')],
    ['he-IL', new cardLanguage('tirgum cartis 1', '2nd tirgum cartis', 'final tirgum cartis',' tirgum text 1', '2nd tirgum text', 'final tirgum text')],
]);
function setLang(lang) {
    currentLanguage = lang;
    const translates = languages.get(lang);
    setCardLang(lang);
    // document.getElementById('values').innerHTML = translates.values;
    // document.getElementById('description').innerHTML = translates.description;
    // document.getElementById('visibility').innerHTML = translates.visibility;
    this.setRTL();
}
function setCardLang(lang) {
    currentLanguage = lang;
    const carTranslates = cardLanguages.get(lang);
    document.querySelector('.cart-title-1').innerHTML = carTranslates.cardTitleOne;
    document.querySelector('.cart-title-2').innerHTML = carTranslates.cardTitleTwo;
    document.querySelector('.cart-title-3').innerHTML = carTranslates.cardTitleThree;
    document.querySelector('.cart-text-1').innerHTML = carTranslates.cardTextOne;
    document.querySelector('.cart-text-2').innerHTML = carTranslates.cardTextTwo;
    document.querySelector('.cart-text-3').innerHTML = carTranslates.cardTextThree;
    // document.getElementById('values').innerHTML = translates.values;
    // document.getElementById('description').innerHTML = translates.description;
    // document.getElementById('visibility').innerHTML = translates.visibility;
    this.setRTL();
}

function setDefaultLang() {
    if (navigator.language && languages.has(navigator.language)) {
        this.setLang(navigator.language);
    }
}

function setRTL() {
    if (['he-IL', 'ar'].includes(currentLanguage)) {
        // this is an RTL language
        document.getElementsByTagName("body")[0].setAttribute("dir", "rtl");
    }
    else {
        document.getElementsByTagName("body")[0].removeAttribute("dir");
    }
}

function load() {
    this.getLanguages();
    this.setDefaultLang();
}