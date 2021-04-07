const constellations = [
  "Orion",
  "Scorpius",
  "Lyra",
  "Ursa Major",
  "Ursa Minor",
];
const planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
const star = "polaris";

constellations.unshift("Canis Major");
console.log(constellations);

planets.pop();
console.log(planets);

const galaxy = constellations.concat(planets);
console.log(constellations);
console.log(planets);
console.log(galaxy);

const uppercase = star.toUpperCase();
console.log(uppercase);
console.log(star);
