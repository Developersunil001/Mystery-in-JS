// Function
// function defination (telling JS)

// const { func } = require("prop-types");

// const { func } = require("prop-types");

// const { func } = require("prop-types");

// function funcName() {
//      // code here
// }
// function calling (using the function)
// funcName();

// function isAdult() {
//      let age = 30;
//      if (age <= 18) {
//           console.log('you are adult');
//      }
//      else {
//           console.log('you are not adult');
//      }
// }
// isAdult();

// function poem() {
//      console.log('Twinkle twinkle little star')
// }
// poem();

// Dice game (1 to 6)

// function dice() {
//      let dicegame = Math.floor(Math.random() * 6) + 1;
//      console.log(dicegame)
// }
// dice();

// Function with argument => Values we pass to the function

// function abcd(name, age) {
//      console.log(`My name is ${name} and is ${age}`);
// }
// abcd("Sunil", 56);

// Create a function that print the multiplication table of a number.

// function printTable(n) {
//      for (let i = n; i <= n * 10; i += n) {
//           console.log(i);
//      }
// }
// printTable(5);

// return => return keyword is used to return some value from the function

// function abcd(a, b) {
//      console.log('hello');
//      console.log('hello');
//      console.log('hello');
//      return a + b;
// }
// console.log(abcd(abcd(4, 4), 4));

// function Isadult(age){
//      if(age>=18){
//           return "adult";
//      }
//      else{
//           return "not adult";
//      }
// }

// Practice Que => Create a function to return the sum of numbers from 1 to n.

// function getSum(n) {
//      let sum = 0;
//      for (let i = 1; i <= n; i++) {
//           sum = sum + i;
//      }
//      return sum;
// }

// Practice Que => Create a function that return the concatenation of all strings in an array.

let str = ['Hi', 'Sunil', 'kese', 'Ho', '!'];

function concat(str) {
     let result = " ";
     for (let i = 0; i < str.length; i++) {
          result += str[i];
     }
     return result;
}

// Scope => Scope determine the accesibility of variables , objects and functions from different
// part of the code

// Function => variables defined inside a function is not accessible from outside of the function.
// Block => variables defined inside a block is not accessible from outside of the block.
// Lexical

let sum = 54; // Global Scope
function calSum(a, b) {
     // let sum = a+b; // Function Scope
     console.log(sum);
}
calSum(5, 4);
console.log(sum);

// block Scope
{
     let a = 10;
}
console.log(a);

for (let i = 0; i <= 5; i++) {
}
console.log(i);

let age = 25;

if (age >= 18) {
     let res = 'adult';
     console.log(age)
}


