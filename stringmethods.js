// Methods actions that can be performed on objects
// Strings are immutable and if we want to do mutable it create new string 
// format => stringName.abc();

//  Trim methods => Trim whitespaces from both ends of string & return a new one

// let msg = ' hello  ';
// console.log(msg.trim());

// let password = prompt("Enter the name");
// let newpassword = password.trim();

// console.log(newpassword);

// Strings are immutable => no changes can be made to strings
// whenever we do try change new string created and old string remain same

// toUpperCase 

// let name = 'sunil';
// console.log(name.toUpperCase());

// toLowerCase

// let surname = 'Saxsena';
// console.log(surname.toLowerCase());

// strings methods with argument 
// return the first index of occurence or give -1 if not found

let str5 = 'ILoveCoding';
console.log(str5.indexOf('Love'));

// Method Chaining => using one method to another and order of excecution will be left to right

let msg = 'hello';
let newmsg = msg.trim().toUpperCase();
console.log(newmsg);

// Slice => Return a  part of original string as a new string

let str = 'IloveCoding';
console.log(str.slice(4)); // it takes str.length if you give randomlly index

let str1 = "IloveIndia";
console.log(str1.slice(1, 5));

let str2 = "IloveIndia";
console.log(str1.slice(-4)); // str2.length(length-num) => 10-6 => IloveI

// Replace => searching a value in string and return a new string with value repalced 

let name = "sunil";
console.log(name.replace("sunil", "aman"));

// Repeat => return a string with the number of copies of the string

let fruits = 'mango';
console.log(fruits.repeat(5));