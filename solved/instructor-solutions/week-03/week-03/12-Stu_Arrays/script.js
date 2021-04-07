// Declare array in memory
const students = ["Alice", "Carol", "Dave", "Tom", "Lisa"];

// Store length of array in variable
const length = students.length;

console.log("Number of students:", length);

// For loop here
for (let i = 0; i < length; i++) {
  // get current student name
  const currentStudent = students[i];
  // console log a message with current student name
  console.log("Welcome to the class", currentStudent);
}

// Store old first name in variable
const oldStudent = students[0];

console.log("Old student before replace:", oldStudent);

// Replace the first item with new name
students[0] = "Bob";

// If statement
const newStudent = students[0];

if (newStudent !== oldStudent) {
  console.log(newStudent, "is in class");
}
