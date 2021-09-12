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
console.log (""+array);
let max = array[0];
let min = array[0];
for  (let i = 0; i<n; i++ ) 
{
        
    if (max < array[i] )
        {
      max = array[i];
        }
     if ( min > array[i] )
   {
      min = array[i];
   }
      
}
console.log("The size is " + array.length);
console.log("the maximum number is "+ max);
console.log("the minimum number is "+min);