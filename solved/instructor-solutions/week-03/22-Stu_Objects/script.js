// Declare the customerOrder object

/*
  General object syntax
  {
    key1: value,
    key2: value,
    key3: value,
  }

  Key names CANNOT be the same in the same level
*/
const customerOrder = {
  name: "Tea",
  numberOfSugars: 4,
  isReady: true,
};

// Retrieve and log the name and numberOfSugars from customerOrder

// Use dot notation
const drinkName = customerOrder.name;
const sugars = customerOrder.numberOfSugars;

console.log("Drink", drinkName);
console.log("Sugars", sugars);

// If statement for isReady and log accordingly
if (customerOrder.isReady) {
  console.log("Ready for pick-up");
} else {
  console.log("Still in order queue");
}
