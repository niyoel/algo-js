const readlineSync = require("readline-sync");
let bananas = parseInt(new Number(readlineSync.question('enter the first number?')));

let oranges = new Number(readlineSync.question('enter the second number?'));

let totalfruits = bananas * oranges;

console.log(totalfruits);