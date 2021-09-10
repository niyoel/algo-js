const readlineSync = require("readline-Sync");
let small = new Number(readlineSync.question("enter the minimum number"));
let big  = new Number (readlineSync.question("enter the maximum number"));
let midle = new Number(readlineSync.question("ent the curent number"));
if((midle > small) && (midle < big))
{
 console.log(small+" "+midle+ " "+ big);   
}
else if(small>big)
{
console.log(" we are sorry to tell you that you are not enderstand any thing");
}