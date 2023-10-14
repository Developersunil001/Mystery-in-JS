// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
    console.log(arr);
}

// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

let num1 = 12345;
// let copy = num;
let count = 0;

while (num1 > 0) {
    count++
    num1 = Math.floor(num1 / 10);
}
console.log(count)

// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

let num2 = 123;
let sum = 0;
let rem = 0;

while(num2>0){
    rem = num2 % 10;
    sum = sum + rem;
    num2 = Math.floor(num2/10);
}
console.log(sum);

// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3) = 1x2x3 = 6
// 0! Is always 1

let n = 5;
let f = 1;

for(let i=1;i<=n;i++){
    f = f*i;
}
console.log(f);

// Qs5. Find the largest number in an array with only positive numbers

// let arr = [5,10,58,74];
// let largest = Math.max(...arr);
// console.log(largest);

let arr1 = [10, 20, 50, 40];
let largest = 0;

for (let i = 0; i < arr1.length; i++) {
    if (largest < arr1[i]) {
        largest = arr1[i]
    }
}
console.log(`The largest value is ${largest}`);
