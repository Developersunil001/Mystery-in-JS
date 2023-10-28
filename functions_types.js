// this keyword => "this" keyword refers to an object that is executing the current piece of code.

const student = {
     name: "Sunil",
     age: 25,
     eng: 45,
     hindi: 50,
     maths: 100,
     avg() {
          let getavg = (this.eng + this.hindi + this.maths) / 3;
          console.log(getavg);
     }
}

function avg() {
     console.log(this);
}

// try and Catch

// try => The try statement allows you to define a block of code to be tested
// for errors while it is being executed

// catch => The catch statement allows you to define a block of code to be executed
// if an errors occurs in the try block

let a = 5;
console.log("Hello Dost");
try {
     console.log(a);
} catch {
     console.log("caught an error");
}

// Arrow Function
// const func_name = (arg1,arg2..) => {
// code
// }

const sum1 = (a, b) => {
     return a + b;
}

const divide = () => {
     console.log(5 + 5 / 2);
}

const subs = (a, b) => {
     console.log(a - b);
}

// Arrow Function => Implicit function
// const sum2 = (a, b) => (a + b);

// setTimeOut => setTimeout(function,timeout)
console.log("Hi! There");

setTimeout(() => {
     console.log("Apna Collge");
}, 5000)

console.log("Welcome to college");

// set interval => setInterval(function,timeout)

console.log("hi! There");
let id = setInterval(() => {
     console.log("Hello");
}, 3000)

console.log(id);

let id2 = setInterval(() => {
     console.log("Hello Jii");
}, 3000)

console.log(id2);

// ClearInterval() => use to stop the execution
// SetTimeout => isme code ek bar run ho kr band ho jata hai and
// SetInterval => isme code bar bar run hota hai kuch seconds me jitna diya hota hai time

// this with arrow function

const details = {
     name: "sumit",
     marks: 98,
     prop: this,
     getName: function () {
          console.log(this); // global scope
          return this.name;
     },

     getmarks: () => {
          console.log(this); // parent Scope
          return this.name;
     },

     getInfo1: function () {
          setTimeout(() => {
               console.log(this); // student
          }, 2000);
     },

     getInfo2: function () {
          setTimeout(function(){
               console.log(this); // window
          }, 3000);
     }

}

// Practice Ques 

// Write a an arrow function that returns the square of a number 'n'

const square = (n) => (n * n);
console.log(square(5));

// Write a function that prints "Hello World" 5 times at intervals of 2s each

let id1 = setInterval(() => {
     console.log("Hello");
}, 2000)

setTimeout(() => {
     clearInterval(id1);
     console.log("Done Clear interval");
}, 10000)

// write an arrow function named arrayAverage that accepts an array of numbers 
// and returns the average of those numbers 

let sum = 0;
let arr = [1, 2, 3, 4, 5];

const arrayAverage = (arr) => {
     for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
     }
     return sum / arr.length;
};
console.log(arrayAverage(arr));

// Write an arrow function named isEven() that takes a single numbers asargument 
// and returns if it is even or not

let isEven = (n) =>{
  return (n%2 == 0);
}
console.log(isEven(n));

let num = 4;
let even = (num) => (num % 2 == 0);
console.log(even(num));
