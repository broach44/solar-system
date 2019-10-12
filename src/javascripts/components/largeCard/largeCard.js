import $ from 'jquery';
import utilities from '../../helpers/utilities';
import planetCards from '../planetCards/planetCards';
// import planets from '../../helpers/data/planets';

import './largeCard.scss';

const largeCardPrinter = () => {
  const domString = `
  <div class="container">
    <div class="card largeCard">
      <h1>Planet Name</h1>
      <img src="https://space-facts.com/wp-content/uploads/mercury.png" alt="planet image">
      <p>Planet Description</p>
      <button class="btn btn-danger btn-sm closebutton">X</button>
    </div>
  </div>
  `;
  utilities.printToDom('planet-cards', domString);
};

// add listener for clicking on the div to enlarge

// add function event that will erase all of the planet cards and only print the large selected planet card

// create function to close out large card and reprint the other planet cards
const closeLargeCard = () => {
  planetCards.planetPrinter();
  planetCards.addListen();
};

const closeListener = () => {
  $('.closebutton').on('click', closeLargeCard);
};

export default { largeCardPrinter, closeListener };
