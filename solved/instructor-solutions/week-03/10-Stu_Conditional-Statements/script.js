// Change the values and operators below to test your algorithm meets all conditions
const x = 50;
const expression1 = (x < 25);
const expression2 = (x > 50);

// Write Your JavaScript Code Here
console.log(x);
console.log(expression1);
console.log(expression2);

// true AND true
if (!expression1 && !expression2) {
  console.log("True ✅ True ✅");
}

// true
if (!expression1) {
  console.log("True ✅ False ❌");
}

// true
if (!expression2) {
  console.log("False ❌ True ✅");
}

// !false -> true
if (!(expression1 && expression2)) {
  console.log("False ❌ False ❌");
}
