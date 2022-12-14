// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
const catsName = "Cookie";
let catAge = 2;
let gremlinFactor = true;
let catColor = null;
let catRelationship;

// print the type of each variable in this order:
// string, number, boolean, undefined, null

console.log(
  typeof catsName,
  typeof catAge,
  typeof gremlinFactor,
  typeof catRelationship,
  typeof catColor
);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let catInfo = `The cat's name is ${catsName} and he is ${catAge} years old.`;
console.log(catInfo);

// reassign the value of the variable that references "null"
catColor = "brown";

// print the value and its type
console.log(catColor, typeof catColor);

// print a variable that causes a ReferenceError
// console.log(catRelationships);
// alter the previous line to no longer cause a ReferenceError
let catRelationships = "single";
console.log(catRelationships);
