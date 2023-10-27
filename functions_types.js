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

function avg(){
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

const sum = (a,b) => {
   return a+b;
}

const divide = () => {
  console.log(5+5/2);
}

const subs = (a,b) => {
     console.log(a-b);
}

// Arrow Function => Implicit function 
const sum2 = (a,b) => (a+b);

// set timeOut => setTimeout(function,timeout)
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
