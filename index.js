const {sayHello, makePersonObj, sum} = require('./library.js');
const obj1 = makePersonObj('John', 30);
const result = sayHello("John");
const result2 = sum(1, 2);
console.log(result);
console.log(result2);
console.log(obj1);