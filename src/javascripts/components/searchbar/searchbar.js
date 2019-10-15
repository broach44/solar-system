import $ from 'jquery';
import planets from '../../helpers/data/planets';
import utilities from '../../helpers/utilities';
import planetCards from '../planetCards/planetCards';
import largeCard from '../largeCard/largeCard';

import './searchbar.scss';

const planetArr = planets.getPlanets();

const printSearchBar = () => {
  const domString = `
  <form class="form-inline">
    <input id="myInput" class="form-control" type="search" placeholder="Search" aria-label="Search">
  </form>`;
  utilities.printToDom('search-bar', domString);
};


const searchEvent = (e) => {
  const value = e.target.value.toLowerCase();
  const filterPlanets = planetArr.filter((x) => x.name.toLowerCase() === value || x.description.toLowerCase().includes(value));
  let domString = `
    <div class="row">
    `;
  for (let i = 0; i < filterPlanets.length; i += 1) {
    domString += `
    <div class="col-4">
      <div class="card planet-card" id="${filterPlanets[i].name}">
        <img src="${filterPlanets[i].image}" class="card-img-top planet-img invisible" alt="${filterPlanets[i].name}-image">
          <h2 class="card-title text-center" id="${filterPlanets[i].name}-title">${filterPlanets[i].name}</h2>
      </div>
    </div>
    `;
  }
  domString += '</div>';
  utilities.printToDom('planet-cards', domString);
  planetCards.addListen();
  largeCard.cardListener();
};

// largeCard.largeCardPrinter();
// largeCard.cardListener();

const searchListener = () => {
  $('#myInput').on('keyup', searchEvent);
};

const init = () => {
  printSearchBar();
  searchListener();
};

export default { init };
