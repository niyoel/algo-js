const readlineSync = require("readline-sync");
let n= new Number(readlineSync.question("enter the nuber of table elements "));
let nbr = 0
let array=[];
let arraycopy=[];
let arraycopyy=[];
for(let i = 0; i <n; i++)
{
nbr = (new Number(readlineSync.question(" ent un element du tableau ")));
array.push(nbr);
arraycopy = JSON.parse(JSON.stringify(array));
arraycopyy.push(array[i]);
}
console.log (array);
console.log(arraycopy);
console.log(arraycopyy);
