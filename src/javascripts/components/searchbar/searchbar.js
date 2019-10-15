import $ from 'jquery';
import planets from '../../helpers/data/planets';
import utilities from '../../helpers/utilities';
import planetCards from '../planetCards/planetCards';
// import largeCard from '../largeCard/largeCard';

const planetArr = planets.getPlanets();

// TODO: print a search bar to the dom


// gather the input from the search field
const searchEvent = (e) => {
  // below is grabbing the input value
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
  // largeCard.largeCardPrinter();
  // largeCard.cardListener();
};

// if ($('.planet-cards h2').value !== newPlanetNames()) {
//   this.hide();
// };

// search through the planet array
// use the object name to display the correct cards
// else hide the cards

// loop through the array of objects and compare with the input received in the search field
const searchListener = () => {
  $('#myInput').on('keyup', searchEvent);
};

export default { searchListener };
