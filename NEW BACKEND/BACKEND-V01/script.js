//-------DAY 06/12/2025-----

// BACKEND-V01/script.js---------------------------

// Script to iterate over an array and log each value incremented by 1----------
// Define the array with mixed data types
var arr = ["apple", "banana", "cherry", "date", "elderberry" ,23, 42, 56];  // Mixed array with strings and numbers
arr.forEach(function(val) {
    console.log(val + 1);
    console.log(val + 5 +" : value after adding 5");
});

// javascript ke aray me koii bhi data type ho sakta hai jaise string, number, boolean, object, etc.
// isliye humne yaha par mixed data types ka use kiya hai.

// For example:

// "apple" + 1 will result in "apple1"
// 23 + 1 will result in 24
// 42 + 1 will result in 43
// 56 + 1 will result in 57
// This behavior is due to JavaScript's type coercion rules.
// Make sure to run this script in an environment that supports JavaScript, such as a web browser or Node.js.



