// create an Array using an Array literal
const things = ["lamp", 40, false, [5, true, "blue"], "all"];
// access the 1st item in the Array
console.log(things[0]);
// access the last item in the Array
console.log(things[4]);
// print the length of the Array
console.log(things.length);
// use the length property to access the last item in the Array
console.log(things[things.length - 1]);
// with for...of, loop over the Array, modify the value and add to a different Array
let diffThing;
let diffArray = [];
for (let thing of things) {
  let newThing = thing + 1;
  diffThing += " " + newThing;
  diffArray[thing] = newThing;
}

console.log("This is the different thing: ", diffThing);
console.log("This is the different Array: ", diffArray);
