const readlineSync = require("readline-sync");

let n= new Number(readlineSync.question("enter the nuber of table elements "));
let array=[];
let res =0;
for(let i = 0; i <n; i++)
{
let number = new Number(readlineSync.question(" ent un element du tableau "));
array.push(number);
res = res + number;
}
console.log (array);
console.log(res);