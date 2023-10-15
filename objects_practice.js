// Gernate a random no. between 1 to 100
let calc = Math.floor(Math.random() * 100) + 1;
console.log(calc);

let calc1 = Math.floor(Math.random() * 5) + 1;
console.log(calc1);

let calc2 = Math.floor(Math.random() * 5) + 21;
console.log(calc2);

// Guessin Game => User enter a max number and then tries to guess a rondom generated no. between 10 to max

const max = prompt("Enter the max value");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the value");

while (true) {
    if (guess == 'quit') {
        console.log('User Quit');
        break;
    }
    if (guess == random) {
        console.log('Yes! you are right' + " " + random);
        break;
    }
    else if (guess > random) {
        guess = prompt('hint : You choose too long value');
    }
    else {
        guess = prompt('hint : You choose too small value');
    }
}