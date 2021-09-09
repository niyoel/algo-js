const readlineSync = require("readline-sync");
let size = new Number(readlineSync.question('enter the your shoes size'));
let birthday = new Number(readlineSync.question("enter your birthday year"));
let result1 = (size * 2) + 5;
let result2 = (result1 * 50)- birthday +1766 ;
console.log("the result is "+ result2);