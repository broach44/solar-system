import planet from './components/planetCards/planetCards';
import large from './components/largeCard/largeCard';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  planet.planetPrinter();
  planet.addListen();
  large.largeCardPrinter();
  large.closeListener();
};

init();
