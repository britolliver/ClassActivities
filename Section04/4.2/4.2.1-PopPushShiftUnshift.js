const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable

let removeNum1 = nums.pop(); //removes 0
let removeNum2 = nums.pop(); //removes 1
// remove each of the first two items with shift(), saving each item to a variable
let shiftNum1 = nums.shift(); //removes 6
let shiftNum2 = nums.shift(); //removes 5
// use push and unshift to add the variables back to the array in numerical order, 0-6
//[2,3,4]
nums.unshift(removeNum1, removeNum2);
nums.push(shiftNum2, shiftNum1);

console.log(nums);
