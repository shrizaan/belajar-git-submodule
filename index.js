const {sayHello, makePersonObj} = require('./library.js');
const obj1 = makePersonObj('John', 30);
const result = sayHello("John");
console.log(result);
console.log(obj1);