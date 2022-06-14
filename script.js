// const PRODUCTS_CATALOG = require("./products_mock.json");
const PRODUCTS_CATALOG = [ {"id": 1,"name": "Bosch GB 28-23","price": 10000,"picture": "./assets/img/Bosch GB 28-23.jpg"},{"id": 2,"name": "Bosch GBH 2-26 F","price": 15000,"picture": "./assets/img/Bosch GBH 2-26 F.jpg"},{"id": 3,"name": "Bosch GBH 240","price": 20000,"picture": "./assets/img/Bosch GBH 240.png"},{"id": 4,"name": "Interskol P-30-900ER","price": 22000,"picture": "./assets/img/perforator_interskol_p_30_900er.png"},{"id": 5,"name": "Makita HR2470","price": 23000,"picture": "./assets/img/Perforator_Makita_HR2470.jpg"},{"id": 6,"name": "Interskol 24","price": 15000,"picture": "./assets/img/interscol 24.jpg"},{"id": 7,"name": "P.I.T. PBH26-C4","price": 32000,"picture": "./assets/img/P.I.T power.png"},{"id": 8,"name": "Зубр 40-1250","price": 15000,"picture":"./assets/img/zybr-40-1250.png"},{"id": 9,"name": "Sturm RH2550","price": 13000,"picture": "./assets/img/sturm-rh2550.jpg"}];

// console.log(PRODUCTS_CATALOG[3]['name']);

function createCard(dataJSON, i) {
    const LINK_CARD = document.createElement('a');
    LINK_CARD.href = '#';
    LINK_CARD.id = dataJSON[i]['id'];

    const BODY_CARD = document.createElement('div');
    BODY_CARD.classList.add('card');

    const WRAP_IMG_CARD = document.createElement('div');
    WRAP_IMG_CARD.classList.add('wrapper-card-img');

    const IMG_CARD = document.createElement('img');
    IMG_CARD.classList.add('card__img');
    IMG_CARD.src = dataJSON[i]['picture'];
    IMG_CARD.alt = dataJSON[i]['name'];

    const NOTE_CARD = document.createElement('p');
    NOTE_CARD.classList.add('card__note');
    NOTE_CARD.innerText = dataJSON[i]['name'];

    const PRICE_CARD = document.createElement('p');
    PRICE_CARD.classList.add('card__price');
    PRICE_CARD.innerText = dataJSON[i]['price'];

    LINK_CARD.appendChild(BODY_CARD);
    BODY_CARD.appendChild(WRAP_IMG_CARD);
    WRAP_IMG_CARD.appendChild(IMG_CARD);
    BODY_CARD.appendChild(NOTE_CARD);
    BODY_CARD.appendChild(PRICE_CARD);

    return LINK_CARD;
}

function createStartPage(){
    const CARDS_FIELD = document.querySelector('.cards-field');

    console.log(CARDS_FIELD);

    for (let i = 0; i < 5; i++){
        const card = createCard(PRODUCTS_CATALOG, i);
        CARDS_FIELD.appendChild(card);
    }
}

createStartPage();