// Array => it is a linear collection of things
// Array are objects
// Arrays are mutable

let name = ['aman', 'suman', 'kamal'];
console.log(name);

// creating an array

let arr = ["aman", "karam", 5, 10, 4.5];
console.log(arr[0][2], arr[1][2]);

// Arrays are mutable

let fruits = ['apple', 'banana', 'mango']
fruits[3] = 'papaya';
console.log(fruits);

let fruit = ['apple', 'banana', 'mango']
fruits[10] = 'papaya';
console.log(fruits);

// Arrays methods

push => add to end
let alpha = ['a', 'b', 'c'];
alpha.push('d');
console.log(alpha);

// pop => delete to end and return it

let fruits = ['mango', 'apple', 'papaya'];
console.log(fruits.pop());

// unshift => add in start

let students = ['a', 'b', 'c', 'd'];
console.log(students.unshift('z'));
console.log(students);

// shift =>  delete to start and return it

let friends = ['a', 'b', 'c', 'd'];
console.log(friends.shift());
console.log(friends);

// practice Ques

let months = ['jan', 'july', 'march', 'aug']
console.log(months.shift(), shift());
console.log(months.shift());
console.log(months.unshift("july", "june"));
console.log(months);

// indexof => return indexof something

let primary = ['red', 'green', 'orange'];
console.log(primary.indexOf("dskd"));

// include => search for a value it give true when value is present and false when absent

let alpha1 = ['a', 'b', 'c'];
console.log(alpha1.includes('v'));

// concatination

let primary1 = ["red", "green", "blue"];
let secondary2 = ["pink", "purple", "redish"];
console.log(primary1.concat(secondary2));
console.log(secondary2.concat(primary1));

// reverse

let dost = ['aman', 'gourav', 'sumit'];
console.log(dost.reverse());
console.log(dost.reverse());

let allcolors = primary1.concat(secondary2);
console.log(allcolors);

// slices => copy a portion of an array

let colorss = ['a', 'b', 'c', 'd'];
console.log(colorss.slice(1));
console.log(colorss.slice(1, 2));
console.log(colorss.slice(-3));

// splice => remove / replace / add elements in place
// splice => (start,deletecount,item0 ... itemN)

let cars = ['a', 'b', 'c', 'd'];
console.log(cars.splice(1, 1, 'z', 'l'));
console.log(cars);

// Sort => its sorts an array
// --------> ascending order
// <-------- descending order

let chars = ['a', 'l', 'z', 'x'];
console.log(chars.sort());

let chars2 = [100, 800, 788, 55, 788];
console.log(chars2.sort());

// Array References => address in memory

let arr1 = 10;
let arr2 = 10;

if (arr1 === arr2) {
    console.log(true);
}
else {
    console.log(false);
}

// constant array

const arr = ['a', 'b', 'c'];
console.log(arr.pop());
console.log(arr);

// Nested array => arrays tO arrays

let nums = [[1, 2], [4, 5], [7, 8], [3, 5]]
console.log(nums[0][1]);

let nums1 = [[1, 2, 5], [4, 5], [7, 8], [3, 5]]
console.log(nums1[0].length);

