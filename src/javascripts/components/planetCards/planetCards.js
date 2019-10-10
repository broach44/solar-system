import planets from '../../helpers/data/planets';
import utilities from '../../helpers/utilities';

const planetPrinter = () => {
  const planetList = planets.getPlanets();
  let domString = '';
  for (let i = 0; i < planetList.length; i += 1) {
    domString += `<h2>${planetList[i].name}</h2>`;
  }
  utilities.printToDom('planet-cards', domString);
};

export default { planetPrinter };
