// Axios
import axios from 'axios';

axios.get('https://api.magicthegathering.io/v1/cards')
    .then(res => res.data)
    .then(data => {

        const getCardButton = document.querySelector('.get-card-button');

        const card = data.cards[Math.floor(Math.random() * data.cards.length)];

        const cardsListElem = document.querySelector('.cards');
        const cardsItemElem = document.createElement('div');
        cardsItemElem.classList.add('cards__item');

        const cardImageElem = document.createElement('img');
        cardImageElem.classList.add('cards__image');
        cardImageElem.src = card.imageUrl;

        const cardName = card.name;
        const cardTitleElem = document.createElement('h2');
        cardTitleElem.classList.add('cards__title');
        cardTitleElem.innerHTML = `Nazwa karty: <span>${cardName}</span>`;

        const manaCost = card.manaCost;
        const cardManaElem = document.createElement('small');
        cardManaElem.classList.add('cards__mana-cost');
        cardManaElem.innerHTML = `Użycie many: ${manaCost}`;

        const cardDescription = card.originalText;
        const cardDescriptionElem = document.createElement('p');
        cardDescriptionElem.classList.add('cards__description');
        cardDescriptionElem.innerHTML = `Opis karty: ${cardDescription}`;

        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'X';
        closeButton.classList.add('close-button');


        cardsItemElem.appendChild(cardImageElem);
        cardsItemElem.appendChild(cardTitleElem);
        cardsItemElem.appendChild(cardManaElem);
        cardsItemElem.appendChild(cardDescriptionElem);
        cardsItemElem.appendChild(closeButton);


        getCardButton.addEventListener('click', function () {
            cardsListElem.appendChild(cardsItemElem);
        });
        closeButton.addEventListener('click', function () {
            cardsItemElem.remove();
        });


    })
    .catch(error => {
        console.log(error);
    });