// for loops => iteratr a piece of code 

for (let i = 10; i <= 5; i++) {
    console.log(i);
}

// print odd numbers

for (let j = 1; j <= 15; j = j + 2) {
    console.log(j);
}

// backword 

for (let k = 15; k >= 1; k = k - 2) {
    console.log(k);
}

// print even numbers 

for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}

// backword

for (let i = 10; i >= 2; i = i - 2) {
    console.log(i);
}

// Infinite loop

for (let i = 0; ; i++) {
    console.log(i);
}

// Multiplication table 

for (let i = 5; i <= 50; i = i + 5) {
    console.log(i)
}

let n = prompt(`Enter the digit`);
n = parseInt(n);

for (let i = n; i <= n * 10; i = i + n) {
    console.log(i);
}

// nested for loop

for (let i = 1; i <= 5; i++) {
    console.log(`output of ${i}`);
    for (let j = 1; j <= 5; j++) {
        console.log(i);
    }
}

// while loops 

let i = 10;
while (i >= 1) {  // while mtllb jab takh
    console.log(i);
    i = i - 1;
}

// Guess Game

const favMovie = 'jawan';

let guess = prompt(`Enter youe fav movie`);

while (guess != favMovie) {
    if (guess == 'quit') {
        console.log("You have Quiet the Game");
        break;
    }
    guess = prompt(`wrong guess.. pls try again`);
}

if (guess == favMovie) {
    alert(`congrats your guessed correct`);
}


// Break Keyword

let x = 1;

while (x <= 10) {
    if (x == 5) {
        break;
    }
    console.log(x);
    x++;
}

// Loops in array

let fruits1 = ['mango', 'apple', 'pineapple', 'banana'];
for (let i = 0; i < fruits1.length; i++) {
    console.log(i, fruits1[i]);
}

// reverse in array

let fruits2 = ['mango', 'apple', 'pineapple', 'banana'];
fruits2.push('naspati');

for (let i = fruits2.length - 1; i >= 0; i--) {
    console.log(i, fruits2[i]);
}

// nested loop 

