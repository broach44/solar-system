import $ from 'jquery';
import utilities from '../../helpers/utilities';
import planets from '../../helpers/data/planets';

import './largeCard.scss';

const planetList = planets.getPlanets();

let currentPlanet;

const largeCardPrinter = () => {
  $('#planet-cards').toggleClass('d-none');
  const domString = `
  <div class="container">
    <div class="card largeCard">
      <h1>${currentPlanet.name}</h1>
      <img src="${currentPlanet.image}" alt="${currentPlanet.name} image">
      <p>${currentPlanet.description}</p>
      <button class="btn btn-danger btn-sm closebutton">X</button>
    </div>
  </div>
  `;
  utilities.printToDom('largeCardContainer', domString);
  $('#largeCardContainer').toggleClass('d-none');
};

const closeLargeCardEvent = () => {
  $('#planet-cards').toggleClass('d-none');
  $('#largeCardContainer').toggleClass('d-none');
};

const closeListener = () => {
  $('.closebutton').on('click', closeLargeCardEvent);
};

const createLargeCardEvent = (event) => {
  const selection = event.target;
  const planetName = $(selection).attr('id');
  for (let i = 0; i < planetList.length; i += 1) {
    const planet = planetList[i];
    if (planet.name === planetName) {
      currentPlanet = planet;
    }
  }
  largeCardPrinter();
  closeListener();
};

const cardListener = () => {
  const pCards = ($('.planet-card'));
  for (let i = 0; i < pCards.length; i += 1) {
    const currentCard = pCards[i];
    $(currentCard).on('click', createLargeCardEvent);
  }
};

export default { largeCardPrinter, cardListener };
