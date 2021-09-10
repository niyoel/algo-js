const readlineSync = require("readline-Sync")
let age = new Number(readlineSync.question("enter your age"));
if(age >=18)
{
    console.log("you are an adult");
}
else
{
    console.log("you are not yet adult");
}