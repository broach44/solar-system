const planets = [
  {
    name: 'Mercury',
    image: 'https://space-facts.com/wp-content/uploads/mercury.png',
    description: 'The smallest planet in our solar system and closest to the Sun - is only slightly larger than Earth\'s Moon.  Mercury is the fastest planet, zipping around the Sun every 88 days.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'N/A',
  },
  {
    name: 'Venus',
    image: 'https://space-facts.com/wp-content/uploads/venus.png',
    description: 'Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'N/A',
  },
  {
    name: 'Earth',
    image: 'https://space-facts.com/wp-content/uploads/earth.png',
    description: 'Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It\'s also the only planet in our solar system with liquid water on the surface.',
    isGasPlanet: false,
    numberOfMoons: 1,
    nameOfLargestMoon: 'Luna',
  },
  {
    name: 'Mars',
    image: 'https://space-facts.com/wp-content/uploads/mars.jpg',
    description: 'Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.',
    isGasPlanet: false,
    numberOfMoons: 2,
    nameOfLargestMoon: 'Phobos',
  },
  {
    name: 'Jupiter',
    image: 'https://space-facts.com/wp-content/uploads/jupiter.png',
    description: 'Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet\'s Great Red spot is a centuries-old storm bigger than Earth.',
    isGasPlanet: true,
    numberOfMoons: 79,
    nameOfLargestMoon: 'Ganymeade',
  },
  {
    name: 'Saturn',
    image: 'https://space-facts.com/wp-content/uploads/saturn.png',
    description: 'Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn\'s. ',
    isGasPlanet: true,
    numberOfMoons: 82,
    nameOfLargestMoon: 'Titan',
  },
  {
    name: 'Uranus',
    image: 'https://space-facts.com/wp-content/uploads/uranus.jpg',
    description: 'Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.',
    isGasPlanet: true,
    numberOfMoons: 27,
    nameOfLargestMoon: 'Titania',
  },
  {
    name: 'Neptune',
    image: 'https://space-facts.com/wp-content/uploads/neptune.png',
    description: 'Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations. ',
    isGasPlanet: true,
    numberOfMoons: 14,
    nameOfLargestMoon: 'Triton',
  },
];

const getPlanets = () => planets;

export default { getPlanets };
