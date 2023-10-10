// months = ['jan','july','march','august'];

let months = ['jan', 'july', 'march', 'august'];
console.log(months.splice(0, 2, 'july', 'june'));
console.log(months);

// return the index of the 'javascript' from the given array , if it was reversed

let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(lang.reverse().indexOf('javascript'));

// create a nested array to show the following tic-tac-toe game

let game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
console.log(game[0][1]='O');
console.log(game);

// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].

let arr = [7,9,0,-2];
console.log(arr.splice(3,1));
console.log(arr);

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
// positive number]

let num = [7,9,0,-2];
console.log(num.splice(0,1))
console.log(num);

// Qs3. Write a JavaScript program to check whether a string is blank or not

let prpt = prompt("Enter the name");

if (prpt.length == 0) {
    console.log("string is blank");
}
else {
    console.log("string is filled");
}

// Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case

let str = 'Apnacollege';
let idx = 3;

if (str[idx] === str[idx].toLowerCase()) {
    console.log("is lower case");
}
else {
    Console.log("is upper case")
}

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string

let animals = prompt("Enter the animals name");
console.log(`original string = ${animals}`);
console.log(`original string with out space = ${animals.trim()}`);

// Qs6. Write a JavaScript program to check if an element exists in an array or not

let arr1 = [10, 20, 30, 40, 50];
if (arr1.includes(20)) {
    console.log("arr is exsit");
}
else {
    console.log("arr is not exsit");
}

