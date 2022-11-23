// create a constant variable (const)
const myName = "Bri";
// create a variable that can be reassigned (let)
let age = 24;
// create three variables and assign them values of different data types (=)
const language = "JavaScript";
const weeksStudying = 20;
const masterStatus = false;

// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof myName);
console.log(typeof masterStatus);
// change the value referenced by a variable (dynamic typing)
age = "25";
// print the type of the variable you just changed (typeof)
console.log(typeof myName);
// create variables and give them values to complete the sentences that will print  below.
// Which variables need to be created?
//name,language, weeks,master status
// What type of data needs to go in each variable?

console.log(
  "Hello, my name is " +
    +myName +
    ", I'm " +
    age +
    ", and I am learning " +
    language +
    ". I have been practicing for only " +
    weeksStudying +
    +" weeks, so my status as a master is: " +
    +masterStatus +
    "."
);
