// create a number variable num with some value
// now, print "good" if the number is divisible by 10 and print "bad" if it not

let num = 100;
if (num % 10 === 0) {
    console.log("good");
}
else {
    console.log("bad");
}

// Take the user's name and age as input using prompts.
// then return back the following statement to the user as a alert by submitting their names and age

let name = prompt("Enter your name");
let age = prompt("Enter your age");

alert(`${name} is ${age} year old`);

// write a switch statement to print the months in a quater

let months = 4;

switch (months) {
    case 1: console.log("jan,feb,march");
        break;

    case 2: console.log("April,may,june");
        break;

    case 3: console.log("july,aug,sep");
        break;

    case 4: console.log("Oct,nov,dec");
        break;

    default: console.log("hers year end");
}


// A string is a golden string if it start with the character 'A' or 'a' and has a total length 
// greater than 5 

let str = 'atrangi';

if (str[0] == 'a' || str[0] == 'A' && str.length >= 5) {
    console.log("string is good")
}
else {
    console.log("string is bad");
}

// wrte a program to find the largest three numbers

let a = 2;
let b = 1;
let c = 5;

if (a > b) {
    if (a > c) {
        console.log("a is bigger");
    }
    else {
        console.log("c is bigger");
    }
}
else {
    if (b > c) {
        console.log("b is  bigger");
    }
    else {
        console.log("c is  bigger");
    }
}

// write a program to check if 2 numbers have the same last digit 
// Eg : 32 and 47852 have the same last digit i.e 2

let x = 32;
let y = 47852;

if (x % 10 == 0 == y % 10 == 0) {
    console.log("2 has present");
}
else {
    console.log("2 has absent");
}