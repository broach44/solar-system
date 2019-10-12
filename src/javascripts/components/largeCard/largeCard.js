import $ from 'jquery';
import utilities from '../../helpers/utilities';
import planetCards from '../planetCards/planetCards';
import planets from '../../helpers/data/planets';

import './largeCard.scss';

// TODO: Everything is functional except the listener needs to be reattached to the cards when they are reprinted

const planetList = planets.getPlanets();

let currentPlanet;

// function to loop through planets and compare the names of the planets to the one that was clicked


// then pass that planet into the printer function

const largeCardPrinter = () => {
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
  utilities.printToDom('planet-cards', domString);
};

const closeLargeCardEvent = () => {
  planetCards.planetPrinter();
  planetCards.addListen();
  // need to add the cardListener each time this is printed...can't add here because function it calls is created below.
};

const closeListener = () => {
  $('.closebutton').on('click', closeLargeCardEvent);
};

// const pickPlanet = (event) => {
//   const selection = event.target;
//   console.log(selection);
// };

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
