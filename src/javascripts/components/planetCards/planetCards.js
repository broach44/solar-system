import $ from 'jquery';
import planets from '../../helpers/data/planets';
import utilities from '../../helpers/utilities';

import './planetCards.scss';

const planetPrinter = () => {
  const planetList = planets.getPlanets();
  let domString = `
  <div class="row">
  `;
  for (let i = 0; i < planetList.length; i += 1) {
    domString += `
    <div class="col-4">
      <div class="card planet-card" id="${planetList[i].name}">
        <img src="${planetList[i].image}" class="card-img-top planet-img invisible" alt="${planetList[i].name}-image">
          <h2 class="card-title text-center" id="${planetList[i].name}-title">${planetList[i].name}</h2>
      </div>
    </div>
    `;
  }
  domString += '</div>';
  utilities.printToDom('planet-cards', domString);
};

const showImage = (event) => {
  const selection = event.target;
  const currentImage = $(selection).find('.planet-img');
  const currentTitle = $(selection).find('h2');
  $(currentImage).toggleClass('invisible');
  $(currentTitle).toggleClass('invisible');
};

const showTitle = (event) => {
  const selection = event.target;
  const currentImage = $(selection).find('.planet-img');
  const currentTitle = $(selection).find('h2');
  $(currentImage).toggleClass('invisible');
  $(currentTitle).toggleClass('invisible');
};

const addListen = () => {
  const pCards = ($('.planet-card'));
  for (let i = 0; i < pCards.length; i += 1) {
    const currentCard = pCards[i];
    $(currentCard).hover(showImage, showTitle);
  }
};

export default { planetPrinter, addListen };
