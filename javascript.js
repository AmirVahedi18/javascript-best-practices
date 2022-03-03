// Best Practices:

// Using strict mode is a best practice
"use strict";

// Use const istead of var for constants
// Examples:
var lang = "English"; // bad
// Vs.
const myLang = "English"; // good

// Use let instead of var for non-global variables (Better Performance)
// Examples:
var count = 0; // bad
while (count < 10) {
  console.log("something");
  count++;
}
// Vs.
let myCount = 0; // good
while (myCount < 10) {
  console.log("something else");
  myCount++;
}

// Use {} instead of constructor to creat a new object
// Example:
const obj = new Object(); // bad
// Vs.
const object = {}; // good

// Using [] instead of 'new Array()' to creat an array
// Exmaple:
const array = new Array(); // bad
// Vs.
const myArray = []; // good

// Using conputed properties instead of adding new property to an object
// Example:
const myObj = {
  firstName: "X",
  lastName: "Y",
};
myObj["age"] = 10; // bad
// Vs.
const nameOfProperty = "age";
const myObject = {
  firstName: "X",
  lastName: "Y",
  [nameOfProperty]: 155, // good
};

// Istead of using 'functionName: function()', its better to use 'functionName()' in objects
// Example:
const secondObj = {
  name: "x",
  getName: function () {
    // bad
    return this.name;
  },
};
// Vs.
const thirdObj = {
  name: "y",
  getName() {
    // good
    return this.name;
  },
};

// Place all shorthan at the first
// Example:
const date = new Date();
const sixthObj = {
  name: "x",
  date, // bad
};
// Vs.
const seventhObj = {
  date, // good
  name: "y",
};

// Use spreads (...) before an array name instead of iterate on the array
// Example, Assume we want to make a copy from an array
const originalArray = [4, 6, 87, 9, 321];
let copyArray = [];
let lengthOfArray = originalArray.length;
for (let i = 0; i < lengthOfArray; i++) {
  copyArray[i] = originalArray[i]; // bad
}
// Vs.
let secondCopyArray = [...originalArray]; // good

// To make an itrable object:
// Example:
let itrableObject = {
  from: 1,
  to: 10,
  [Symbol.iterator]() {
    this.currentNumber = this.from;
    return this;
  },
  next() {
    if (this.currentNumber <= this.to) {
      return {
        done: false,
        value: this.currentNumber++,
      };
    } else {
      return {
        done: true,
      };
    }
  },
};

// To convert an itrable object to an array, use spreads (...) rather than 'Array.from(arrayName)'
// Example:
const nodes = Array.from(itrableObject); // good
const secondNodes = [...itrableObject]; // better

// to concat a variable with a string, use template string instead of + sign.
// Example:
const myName = "Amir";
function sayHi1(name) {
  return "Hi " + name; // bad
}
function sayHi2(name) {
  return ["Hi", name].join(); // bad
}
function sayHi3(name) {
  return `Hi ${name}`; // good (template string)
}
console.log(sayHi3(myName));

/**
 * If the body of function is different in porportion to the stuation,
 * it is better to define a variable and assign the function to the variable.
 */
// Example:
// Bad practice
let isSunny = true;
if (isSunny) {
  function print() {
    console.log("It is sunny!");
  }
} else {
  function print() {
    console.log("It ism't sunny!");
  }
}
// Vs.
// Good practice
let print;
if (isSunny) {
  print = () => {
    return "It is sunny!";
  };
} else {
  print = () => {
    return "It isn't sunny!";
  };
}

// 'arguments' is a object that javascript consider for all functions
function myFunction() {
  console.log(arguments); // retuern the object of arguments
}
/**
 * Therefore, Never name a parameter, 'arguments'. Becuses if you name a parameter 'arguments',
 * you are overrding the object of 'arguments' that javascript has considered for your function.
 */

/**
 * Never directly change the input of function (parameters) in the function.
 * If you needed to change any parameter, it is better to define a 'let' variable
 * and asign the parameter to the variable.
 */
// Example:
function newFunc(input) {
  input = input || 1; // bad
  console.log(input);
}
// Vs.
function newFunction(input) {
  let localInput = input; // good
  localInput++;
  console.log(input);
}

/**
 * It is better to set the defualt to the argument in the parameter instead of body of
 * the function.
 */
function anotherFunc(input = 1) {
  // good
  console.log(input);
}

/**
 * Don't use quotation marks for properties of objects if possible
 */

/**
 * Never place the optional input of functions (parameter) at first, thay should be at the end.
 */

/**
 * It is better to access to properties of an object by dot(.) rather than [""].
 */

/**
 * It is better to use (**) opration rather than Math.pow() function. (if the brower supports)
 */

/**
 * To have clean code, it is better to difine and declear any variable or constants in a line.
 */

/**
 * It is better first define a constants and then other variables.
 */

/**
 * Don't use multu-assign variable (expecially for let)
 */

/**
 * You can use (!) or (!!) to convert a non-boolean variable to a boolean value.
 */

/**
 * Always use {} for function, even the function has only one statement in its body.
 */

/**
 * To cast anything to string, it is better to use 'String(anything)' without 'new'.
 */

/**
 * To cast anything to number, it is better to use 'number(anything)' without 'new' or
 * using 'parseInt(anything, 10);'
 */
