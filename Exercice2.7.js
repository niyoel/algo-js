const readlineSync = require("readline-sync");
let n = new Number(readlineSync.question("enter the number betwen 1 and 7 please "));
let a = 0 ;
for(let i = 0; i<=n; i++)
{
  a= a+i;
}
console.log(a);
    

