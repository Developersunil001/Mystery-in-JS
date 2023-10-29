//Array Methods

// forEach => arr.forEach(some functions defination or more)
// forEach is used to access the individual properties

let arr = [1, 2, 3, 4, 5];

let print = function(el){
     console.log(el);
}
arr.forEach(print);

// OR

arr.forEach(function (el) {
     console.log(el);
})

arr.forEach((el)=>{
     console.log(el);
})

let arr1 = [{
     name: "sunil",
     marks: 98
}, {
     name: "aman",
     marks: 97
}, {
     name: "murli",
     marks: 93.3
}]

arr1.forEach(students => {
     console.log(students.marks);
});

// map => let newArr = arr.map(some function defination or name)
// In map function it doing some operations and then tey return a value with new created array

let arr1 = [1, 2, 3, 4, 5];

let double = arr1.map((el) => {
     return el * 2;
});

let stuPerfo = [{
     name: "akash",
     marks: 80
},
{
     name: "sunil",
     marks: 96
}];

let gpa = stuPerfo.map((el) => {
     return el.marks / 10;
})

// filter => let newArr = arr.filter(some function defination or name)
// filter bhai ka kaam yeah ki yeah kya krte hai ki filter lagate hai kisi bhi value pr and then
// agr value true hai toh newArray me add krte hai or value false hai toh nahi krte hai

let data = [1, 2, 3, 8, 9, 7];
let ans = data.filter((el) => {
     // return el < 5;
     return !(el % 2 == 0);
});

// every => Return true if every element of array gives true for some functions . Else returns false
// yeah value true deta hai or false deta hai
// arr.every(some function defination or name);

let check = [2, 4, 6, 8].every((el) => {
     console.log(el % 2 == 0);
});

// some => Return true if some element of array gives true for some functions . Else returns false
// yeah value true deta hai or false deta hai

let check1 = [2, 8, 6, 8].some((el) => {
     console.log(el % 2 == 0);
});

// reduce => Reduce the single array
// arr.reduce(reducer function with 2 variable for(accumulator,element))

let num = [1, 5, 4, 7];
let final = num.reduce((res, el) => {
     return res + el;
})
console.log(final);

// ---------- Practice Questions ----------
// Finding the max value in the array

let num = [10, 20, 30, 40, 50];
let result = num.reduce((max, el) => {
     if (el > max) {
          return el;
     }
     else {
          return max;
     }
})

// Check if all numbers in our array atre multiples of 10 or not

let arr = [10,20,30,40,50];

let check = arr.every((el) => {
    return el % 10 == 0;
})
console.log(check);


// Create a function to find the min number in an array

let arr1 = [10, 5, 8, 9];

function getMin(arr1) {
     let min = arr1.reduce((min, el) => {
          if (el > min) {
               return min;
          }
          else {
               return el;
          }
     })
     return min;
}

console.log(min);

// Default Parameters => Giving a default value to the argument

function sum(a,b=5){
     return a+b;
}

// Spread => Expands an iterable into multiple values

let clg = 'apnacollge';
console.log(...clg);

let a = [10, 20, 30];
let b = [50, 60, 70];
console.log(...a, ...b);

let chars = [..."hello"];
console.log(chars);

let num = [1,2,2,7,5,8];
let newArr = [...num];
console.log(newArr);

const data = {
     gmail: "S@gmail.com",
     password: "abcd"
}

const dataCopy = { ...data,name:"sunil",age:23};

let arr = [10,20,30,40,50];
let obj1 = {...arr}

let obj2 = {..."hello"}

// Rest => Allows a function to take an indefinite numbers of argument and bundle of them in an array.
// pending

// Destructring => Storing values of array into multiple variables

let data = ["aman", "suman", "arjun", "murli", "ankit"];
let [winner, runnerup, ...others] = data;
console.log(data);