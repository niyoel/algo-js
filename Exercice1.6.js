const readlineSync = require("readline-sync");
let firstnumber = parseInt(new Number(readlineSync.question('enter the first number')));

let secondnumber = parseInt(new Number(readlineSync.question('enter the second number')));
let rest = parseInt(firstnumber / secondnumber);
console.log(rest)