const originalArray = [1, 3, 2, 5, 10];

console.log(originalArray);

const isEven = (currentValue) => currentValue % 2 === 0;

const evenNumbers = originalArray.filter(isEven);

console.log(evenNumbers);

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num !== 1;
};

const primeArray = originalArray.filter(isPrime);

console.log(primeArray);

const isMoreThan5 = (num) => num > 5;

const moreThan5Array = originalArray.filter(isMoreThan5);

console.log(moreThan5Array);
