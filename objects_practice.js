// Gernate a random no. between 1 to 100
// let calc = Math.floor(Math.random() * 100) + 1;
// console.log(calc);

// let calc1 = Math.floor(Math.random() * 5) + 1;
// console.log(calc1);

// let calc2 = Math.floor(Math.random() * 5) + 21;
// console.log(calc2);

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

// Qs1. Create a program that generates a random number representing a dice roll.
//[The number should be between 1 and 6].

// const game = (Math.floor(Math.random() * 6)) + 1;
// console.log(game);

//Qs2. Create an object representing a car that stores the following properties for the
//car: name, model, color.
//Print the car’s name.

// let car = {
//     name: 'BMW',
//     Model: 2023,
//     Color: 'Green'
// }
// console.log(car.name);

//Qs3. Create an object Person with their name, age and city.
//Edit their city’s original value to change it to “New York”.
//Add a new property country and set it to the United States

// let person = {
//     name: 'Sunil',
//     Agr: 25,
//     City: "Bhopal"
// }
// console.log(person.City = 'New York');
// console.log(person.Country = "United States");
// console.log(person);