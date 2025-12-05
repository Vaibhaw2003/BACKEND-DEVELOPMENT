//-------DAY 06/12/2025-----

//-------[  array methods in javascript   ]--------------

//------------01--forEach------------[forEach kisi bhi array ke har element par ek baar function ko call karta hai]------------
/*
var arr = ["apple", "banana", "cherry", "date", "elderberry" ,23, 42, 56];  // Mixed array with strings and numbers
arr.forEach(function(val) {
    console.log(val + 1);
    console.log(val + 5 +" : value after adding 5");
});  */

// javascript ke aray me koii bhi data type ho sakta hai jaise string, number, boolean, object, etc.
// isliye humne yaha par mixed data types ka use kiya hai.

// For example:

// "apple" + 1 will result in "apple1"
// 23 + 1 will result in 24.
// This behavior is due to JavaScript's type coercion rules.
// Make sure to run this script in an environment that supports JavaScript, such as a web browser or Node.js.

//-------------02--map------------[map ak new array return karta hai, but size of array will same]------------
/*
var number = [1, 2, 3, 4, 5];
var mappedNumbers = number.map(function(val) {
    return val * 2;
});

console.log(mappedNumbers); // Output: [2, 4, 6, 8, 10] */
/*
var Arr = [10, "hello", 20, "world", 30];

Arr.map(function(val) {
    return val + 5;
}).forEach(function(result) {
    console.log(result);
});  */

// The output will be:
// 15
// hello5
// 25
// world5
// 35

//------------03--filter------------[filter ak new array return karta hai jisme wo sare elements hote hai jo condition ko satisfy karte hai]------------
/*
var numbers = [5, 12, 8, 130, 44];

numbers.filter(function(val){
    return val > 10;
}).forEach(function(result){
    console.log(result);
});*/

// The output will be:
// 12
// 130
// 44



//--------04--reduce------------[reduce ak single value return karta hai by applying a function on each element of the array]------------
/*
var nums = [1, 2, 3, 4];

nums.reduce(function(val1, val2){
    console.log("val1: " + val1 + ", val2: " + val2);
    return val1 + val2;
}, 0); */  
// Initial value is 0

// The output will be:  
// val1: 0, val2: 1
// val1: 1, val2: 2
// val1: 3, val2: 3
// val1: 6, val2: 4

//--------05--find------------[find ak single value return karta hai jo condition ko satisfy karta hai]------------
/*
var numbers = [5, 12, 8, 130, 44];

 var num = numbers.find(function(val){
    //return val > 10; 
    return val<50;   
})

console.log(num); */
// Output: 12
// The find method returns the first element that satisfies the provided testing function.
// In this case, it returns 12, which is the first number greater than 10 in the array.



//--------06--findIndex------------[findIndex ak single index return karta hai jo condition ko satisfy karta hai]------------
/*
var numbers = [5, 12, 8, 130, 44];

var num = numbers.findIndex(function(val){
    return val > 100;
})
console.log(num); 
*/
// Output: 3



//--------07--some------------[some ak boolean value return karta hai, true agar koi bhi element condition ko satisfy karta hai]------------
/*
var numbers = [5, 12, 8, 130, 44];
 var num = numbers.some(function(val){
    return val < 200;
})
console.log(num);  */
// Output: false
// The some method checks if at least one element in the array satisfies the provided testing function.
// In this case, none of the numbers are greater than 200, so it returns false.


//---------------------------END-----------------------------

//-------------[  object methods in javascript   ]---------------

// Object.keys() - returns an array of a given object's own enumerable property names
// Object.values() - returns an array of a given object's own enumerable property values
// Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs

// Example:
/*
var obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj)); // Output: ["a", "b", "c"]
console.log(Object.values(obj)); // Output: [1, 2, 3]
console.log(Object.entries(obj)); // Output: [["a", 1], ["b", 2], ["c", 3]]

 
var person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(Object.keys(person)); // Output: ["name", "age", "city"]
console.log(Object.values(person)); // Output: ["John", 30, "New York"]
console.log(Object.entries(person)); // Output: [["name", "John"], ["age", 30], ["city", "New York"]]
*/

//---freeze concept---[Object.freeze() method freezes an object. A frozen object can no longer be modified: new properties can't be added, existing properties can't be removed or changed.]---
/*
var obj = {
    name : "Alice",
    age : 25,
    roll_numbers: 101,// gaping not allowed
    sub : "maths",
    marks : 95
};

 console.log(obj.age); // Output: 25
    Object.freeze(obj);
    obj.age = 30; // This will not change the age property
    console.log(obj.age); // Output: 25
    obj.sub = "science"; // This will not change the sub property
    console.log(obj.sub); // Output: maths  
    */

//---------------------------END-----------------------------


//-------[   function methods in javascript   ]--------------

// Function.prototype.call() - calls a function with a given this value and arguments provided individually
// Function.prototype.apply() - calls a function with a given this value and arguments provided as an array
// Function.prototype.bind() - creates a new function that, when called, has its this keyword set to the provided value

//example :- 01

// function creating----
/*
 function abcd(){
    console.log("vaibhaw singh")
};

abcd(); // function calling   */

//example :- 02
/*
function sum (){
    return "vai singh";
}

var s = sum();
console.log(sum)
*/

//----------end ---------


//-----------------[  ASYNC JAVA SCRIPT CODING  ]-------------

// LINE BY LINE CODE CHALE WO SYNCHRONOUS KAHLATA HAI. 
// jo bhi code async nature ka ho ushe , side stack me send kar do or agale code ko chalawo jo bhi sync nature ka ho.
//jab sync nature ka sara code chal jaye to chek karo async wala code comleted huwa ki nhi.
//agar completed ho gaya ho to main stack me lawo or chala do .

//main stack me sync wala part chalta hai 
// side stack me async wala part chalta hai.

//EXAMPLE :-
 async function abcd () {
    var blob = await fetch(`https://randomuser.me/api/`)  // fetch ka kam hai data lana one place to another, fetch direct ans nhi deta ak [blob] deta hai .
    var ans = await blob.json();  // yaha pe await es liye laga hai ki nhi pata data kab tak ayega.
    console.log(ans.results[0].name);
 };


 abcd();
 console.log(abcd)

