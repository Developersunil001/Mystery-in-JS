// Function
// function defination (telling JS)

const { func } = require("prop-types");

function funcName() {
     // code here
}
function calling (using the function)
funcName();

function isAdult() {
     let age = 30;
     if (age <= 18) {
          console.log('you are adult');
     }
     else {
          console.log('you are not adult');
     }
}
isAdult();

function poem() {
     console.log('Twinkle twinkle little star')
}
poem();

// Dice game (1 to 6)

function dice() {
     let dicegame = Math.floor(Math.random() * 6) + 1;
     console.log(dicegame)
}
dice();

// Function with argument => Values we pass to the function

function abcd(name, age) {
     console.log(`My name is ${name} and is ${age}`);
}
abcd("Sunil", 56);

// Create a function that print the multiplication table of a number.

function printTable(n) {
     for (let i = n; i <= n * 10; i += n) {
          console.log(i);
     }
}
printTable(5);

// return => return keyword is used to return some value from the function

function abcd(a, b) {
     console.log('hello');
     console.log('hello');
     console.log('hello');
     return a + b;
}
console.log(abcd(abcd(4, 4), 4));

function Isadult(age){
     if(age>=18){
          return "adult";
     }
     else{
          return "not adult";
     }
}

// Practice Que => Create a function to return the sum of numbers from 1 to n.

function getSum(n) {
     let sum = 0;
     for (let i = 1; i <= n; i++) {
          sum = sum + i;
     }
     return sum;
}

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

// Lexical Scope => A variable defined outside a function can be accessible inside another
// function defined after the variable declaration

// The opposite is not true
// Lexical Scope => baharn se andar allowed hai but andr se banr allowed nahi hai value access karna

function outerFunc() {
     let x = 5;
     let y = 6;
     function innerFunc() {
          //  let b = 10;
          console.log(x);
          console.log(y);
     }

     // console.log(b);

     innerFunc();
}

// Practice Ques

let greet = "hello"; // Global Scope

function changeGreet() {
     let greet = "namste"; // Function Scope
     console.log(greet);

     function innerGreet() {
          console.log(greet);
     }

     innerGreet(); // Lexical Scope
}

console.log(greet);
changeGreet();

// Function Expression => Nameless Expression

let sum = function (a, b) {
     return a + b;
}

sum = function () {
     console.log("hello fraaands");
}

sum = function () {
     console.log("namastee fraaands");
}

// Higher Order Function
// A function that does one or both :
// 1) takes one or multiple functions as arguments
// 2) returns a function

function multiFunc(func,count){
     for(let i=1;i<=count;i++){
          func();
     }
}

let greet1 = function(){
     console.log("hello ji");
}

multiFunc(greet1,6);

// Higher Order Functions Returns



let OddorEvenFactory = function (request) {
     if (request == "even") {
          return function (n) {
               console.log(n % 2 == 0);
          }
     }
     else if (request == "odd") {
          return function (n) {
               console.log(!(n % 2 == 0));
          }
     }
     else {
          console.log("wrong input");
     }
}

// Methods => Actions that can be performed on an object
// jo functions objects ke andr defined hote hai unhe hum methods bolte hai

const calculator = {
     add: function (a, b) {
          return a + b;
     },
     sub: function (a, b) {
          return a - b;
     },
     mul: function (a, b) {
          return a * b;
     }
};

// ShortHand Method
const calc = {
     add(a,b){
          return a+b;
     },
     sub(a,b){
          return a-b;
     },
     mul(a,b){
          return a*b;
     },
}

// Practice Questions

// Qs1. Write a JavaScript function that returns array elements larger than a number.

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 2;

function getElement(arr, num) {
     for (let i = 0; i < arr.length; i++) {
          if (arr[i] > num) {
               console.log(arr[i]);
          }
     }
}
getElement(arr, num);

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”



// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"

let country = ["China", "India", "Germany", "United States of America"];

function longestCountry(country) {
     let ansIdx = 0;
     for (let i = 0; i < country.length; i++) {
          let arrLength = country[ansIdx].length;
          let CurrArray = country[i].length;

          if (CurrArray > arrLength) {
               ansIdx = i;
          }
     }

     return country[ansIdx];
}

longestCountry(country);


// Qs4. Write a JavaScript function to count the number of vowels in a String
// argument.

let str = "apnacollege";

function countVowels(str) {
     let count = 0;

     for (let i = 0; i < str.length; i++) {
          if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
               count++;
          }
     }
     return count;
}

// Qs5. Write a JavaScript function to generate a random number within a range
// (start, end).

let start = 100;
let end = 200;

function generateRandom(start,end){
     let diff = end - start;
     return Math.floor(Math.random() * diff) + start;
}
