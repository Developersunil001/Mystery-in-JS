// trim and convert to uppercase

let msg = "  help"
console.log(msg.trim("help").toUpperCase("help"));

// For the string and pridict the output 

let Name = "ApnaCollege";
console.log(Name.slice(4,9));  // output => College
console.log(Name.indexOf("na")); // output => 2
console.log(Name.replace("Apna","our")); // output => ourCollege

// Seperate the "College" part in above string and replace "I" with "t" in it

console.log(Name.slice(4,11).replace('l' , 't').replace('l','t'));

