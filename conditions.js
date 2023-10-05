// Traffic light management system
// let color = 'red';

// if (color == 'red') {
//     console.log("stop");
// }
// if (color == 'yellow') {
//     console.log("wait");
// }
// if (color == 'green') {
//     console.log("go");
// }

// Create a System to calculate popcorn price based on the size customer asked for

// let popcornSize = 'o'

// if (popcornSize === 'XL') {
//     console.log('price is Rs.250');
// }
// else if (popcornSize === 'L') {
//     console.log('price is Rs.200');
// }
// else if (popcornSize === 'M') {
//     console.log('price is Rs.100');
// }
// else if (popcornSize === 'S') {
//     console.log('price is Rs.50');
// }
// else {
//     console.log('Yeah size hamare pass nahi hai');
// }

// Nested Ladder

// let marks = 40;
// if (marks >= 33) {
//     console.log('You are pass');
//     if (marks >= 80) {
//         console.log("Grade : A")
//     }
//     else {
//         console.log("Grade : B")
//     }
// } else {
//     console.log("next time better luck")
// }

// Logical Operator
// logical operator to combine expression

//Logical And && (And operator me agr ek bhi condition false ho gyi toh anser false hi ayega)
// True  --> True  |  True
// False --> True  |  False
// False --> False |  True
// False --> False |  False

// let marks = 90;
// if (marks >= 33 && marks <= 80) {
//     console.log("You are pass");
//     console.log("Grade : A");
// }
// else {
//     console.log("You are Fail");
// }

// Logical OR Operator ==> OR operator me koi ek bhi condition true ho gyi toh anser true ayega
//  True  | True -->  True
//  True  | False --> True
//  False | True -->  True
//  False | False --> False

// let marks = 90;
// if (marks >= 33 || marks <= 80) {
//     console.log("You are pass");
//     console.log("Grade : A");
// }
// else {
//     console.log("You are Fail");
// }

// Logical NOT Operator

// Jab hum combined logic ko create krte hai i.e. ki jisme logical AND,OR,NOT present
// ho usme conditions ko check left to right kiya jata hai .

// let stuMarks = 50;
// if(!(stuMarks > 100)){
//     console.log("Pass ho gya bhaai");
// }

// let Marks = 90;
// if ((Marks >= 33 || Marks <= 80) && !Marks) {
//     console.log("You are pass");
//     console.log("Grade : A");
// }
// else {
//     console.log("You are Fail");
// }

// Practice Q.
// A "good string" is a string starts with the letter "a" & has a length > 3.
// write a programs to find if a string good or bad

// let str = 'apple';
// if (str[0] === 'a' && str.length > 3) {
//     console.log('string is good');
// }
// else {
//     console.log('string is bad');
// }

// Truthy and False Value

// Falsy Values => false ,0,On (BigInt value) , " " , Empty String , null , undefined , NaN
// Truthy Values => Everything Else 

//zero
if(0){
    console.log(`value is true`);
}else{
    console.log(`value is false`);  
}

// null 
if(null){
    console.log(`value is true`);
}else{
    console.log(`value is false`);  
}

//undefiend
if(undefined){
    console.log(`value is defiend`);
}else{
    console.log(`value is undefiend`);  
}

//not a number
if(NaN){
    console.log(`value is true`);
}else{
    console.log(`value is false`);  
}

// Empty string
if(""){
    console.log(`value is true`);
}else{
    console.log(`value is false`);  
}


let str = "";
if(str === ""){
    console.log("string is empty");
}
else{
 console.log("string is filled");
}

// Truthy Value

let num = 10;
if(num){
    console.log("value is true");
}
else{
    console.log("value is false");
}