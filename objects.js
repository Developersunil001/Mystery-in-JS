// objects Literals => used to store keyed collection and complex entitites.
// property => (key,value) pair

// objects are collection of properties

// object creation

let students = {
    name: 'sunil',
    class: 10,
    subject: 'PCM'
}
console.log(students);

const details = {
    name: 'sunil',
    class: 10,
    subject: 'PCM'
}
console.log(students);

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