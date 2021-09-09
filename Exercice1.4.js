const readlineSync = require("readline-sync");
let firstname = readlineSync.question("what is your Fist name?");
let lastname = readlineSync.question("what is your Last name?");
let city = readlineSync.question("what is your city?");
console.log("your first name is "+ firstname+" your last name is "+ lastname+" your city is "+city);