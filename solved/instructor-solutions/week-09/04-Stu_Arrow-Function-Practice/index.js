const funnyCase = (string) => {
  const charToFunnyCase = (acc, each, index) =>
    index % 2 === 0
      ? `${acc}${each.toLowerCase()}`
      : `${acc}${each.toUpperCase()}`;

  return string.split("").reduce(charToFunnyCase, "");
};

console.log(funnyCase("You can't just do whatever you want all the time!"));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const map = (array, transformationFunction) =>
  array.map(transformationFunction);

const double = (element) => element * 2;

const doubled = map(numbers, double);

console.log(doubled);

const filter = (array, transformationFunction) =>
  array.filter(transformationFunction);

const isEven = (element) => element % 2 === 0;

const evenNumbers = filter(numbers, isEven);

console.log(evenNumbers);

const netflixQueue = {
  queue: [
    "Mr. Nobody",
    "The Matrix",
    "Eternal Sunshine of the Spotless Mind",
    "Fight Club",
  ],
  watchMovie: function () {
    const movie = this.queue.pop();
    console.log(movie);
  },
  addMovie: function (movie) {
    this.queue.unshift(movie);
  },
  printQueue: function () {
    const callback = (acc, each, index) => `${acc}${index + 1}. ${each}\n`;

    const message = this.queue.reverse().reduce(callback, "");

    console.log(message);
  },
};

console.log("Printing movie queue!\n");
netflixQueue.printQueue();
console.log("\nWatched a movie!\n");
netflixQueue.watchMovie();
console.log("\nPrinting movie queue!\n");
netflixQueue.printQueue();
console.log("\nAdding a movie!\n");
netflixQueue.addMovie("Black Swan");
console.log("Printing movie queue!\n");
netflixQueue.printQueue();
