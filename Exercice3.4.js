const readlineSync = require("readline-sync");
let n= new Number(readlineSync.question("enter the nuber of table elements "));
let array=[];
let arraycopy = [];
let res =0;
for(let i = 0; i <n; i++)
{
let number = new Number(readlineSync.question(" ent un element du tableau "));
array.push(number);
arraycopy = JSON.parse(JSON.stringify(array));
}
console.log (array);
console.log(Math.max.apply(array));
console.log(Math.min.apply(array));
let max = array[i];
let min = array[i];
while ( i < n {
    if (max < array[i+1] );
      max = array[i+1];
    if (array[i+1] < min);
      min = array[i+1];
      i=i+1)
}
console.log(max);
console.log(min);