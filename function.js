// Function
// function defination (telling JS)

const { func } = require("prop-types");

// const { func } = require("prop-types");

function funcName() {
     // code here 
}
// function calling (using the function)
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

