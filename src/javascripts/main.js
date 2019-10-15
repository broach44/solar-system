import planet from './components/planetCards/planetCards';
import large from './components/largeCard/largeCard';

import 'bootstrap';
import '../styles/main.scss';
import searchbar from './components/searchbar/searchbar';

const init = () => {
  planet.planetPrinter();
  planet.addListen();
  large.cardListener();
  searchbar.init();
};

init();
