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
let avg = res/n;
console.log ("the total of the element is "+ res);
console.log("the average of the table is "+ avg);
