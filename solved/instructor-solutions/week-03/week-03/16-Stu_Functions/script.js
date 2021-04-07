/*
  Function declaration syntax
  function functionName(functionParameters) {
    // function body
  }
*/

// isEqual(10, "100");

// Function declaration
function isEqual(value1, value2) {
  if (value1 === value2) {
    console.log("They are equal in type and value");
  } else if (value1 == value2) {
    console.log("They are equal in value");
  } else {
    console.log("The values are not equal");
  }
}

isEqual(10, "100");

// Function expression
// const isEqual = function (value1, value2) {
//   if (value1 === value2) {
//     console.log("They are equal in type and value");
//   } else if (value1 == value2) {
//     console.log("They are equal in value");
//   } else {
//     console.log("The values are not equal");
//   }
// };

// isEqual(10, "100");
