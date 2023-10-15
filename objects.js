// objects Literals => used to store keyed collection and complex entitites.
// property => (key,value) pair

// objects are collection of properties

// object creation

let kids = {
     name: 'sunil',
     class: 10,
     subject: 'PCM'
}
console.log(kids);

const details = {
     name: 'sunil',
     class: 10,
     subject: 'PCM'
}
console.log(details);

// Task-1 Create an object literal for the properties of thread/twitter post
// which includes

const thread = {
     username: '@iam.sunil.09',
     content: 'This is my first post on threads',
     likes: 500,
     reposts: 10,
     tags: ['@urbancoder_official']
}
console.log(thread);

// how to get values
// There are two ways to get the values
// 1) name[key]
// 2) name.key

const thread1 = {
     username: '@iam.sunil.09',
     content: 'This is my first post on threads',
     likes: 500,
     reposts: 10,
     tags: ['@urbancoder_official']
}
console.log(thread1.content);
console.log(thread1["reposts"]);
console.log(thread1["tags"]);
console.log(thread1);

// JS automatically converts objects key into strings
// Even if we created a number as a key , the number will be converted into string

// Add/Update Values

let details1 = {
     name: 'sunil',
     class: 10,
     subject: 'PCM'
}
details1.gender = 'male';
console.log(details1);

// Nested objects => stored info of multiple students 

let classInfo = {
     aman: {
          grade: 'A',
          city: 'Bhopal'
     },
     dev: {
          grade: 'A++',
          city: 'Delhi'
     },
     suman: {
          grade: 'A',
          city: 'Mumbai'
     }
}

console.log(classInfo.aman);

// Arrays of objects => Storing info of multiple students

const students = [
     {
          name: 'sunil',
          class: 10,
          gender: 'male'
     },

     {
          name: 'aman',
          class: 11,
          gender: 'male'
     },

     {
          name: 'arjun',
          class: 12,
          gender: 'male'
     }
]
console.log(students[0].name = 'kajal')
console.log(students);

// Math objects

// 1) Math.abs(n) => it convert -ve value to +ve and it give +ve to +ve value 
Math.abs(-12);
// 2) Math.pow(n,n) => it is a power function 
Math.pow(2, 4);
// 3) Math.floor => it round off the value i.e nearest,smallest,Int value
Math.floor(-5);
// 4) Math.ciel(n) => it round off larger value roundoff
Math.ceil(10)
// 5)  Math.random(n) => it gives random values
Math.random();

