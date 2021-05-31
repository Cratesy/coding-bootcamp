const originalArray = [1, 3, 2, 5, 10];

console.log(originalArray);

const double = (currentValue) => currentValue * 2;

const doubledArray = originalArray.map(double);

console.log(doubledArray);

const triple = (currentValue) => currentValue * 3;

const tripledArray = originalArray.map(triple);

console.log(tripledArray);

const callback = (num) => (num % 2 === 0 ? "even" : "odd");

const oddOrEven = originalArray.map(callback);

console.log(oddOrEven);
