const readlineSync = require("readline-Sync");
let question = new Number(readlineSync.question('number of questions'));
console.log(question +" are remaining");
let unnoying = readlineSync.question("who is the most unnoying person in the world?");
 question =  question-1;
console.log(question +" are remaining");
let why = readlineSync.question("can u explain how?");
question =  question-1;
console.log(question +" are remaining");
let when = readlineSync.question(" when have you started to feel that way?");
question =  question-1;
console.log(question +" are remaining");
let management = readlineSync.question("do u think to manage that felling?");
question =  question-1;
console.log(question +" are remaining");
 how = readlineSync.question("how will you manage that?");
console.log(unnoying +". "+ why +". "+ when +". " +management +". "+ how);