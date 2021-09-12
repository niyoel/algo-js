const readlineSync = require("readline-sync");
function calcsurface(L,R)
 {
    return L*R;
}
console.log("the surface of rectengle is "+calcsurface(3,5));

let length= new Number(readlineSync.question("enter the lenght of rectangle "));
let width = new Number(readlineSync.question("enter the width of rectangle "));

console.log("the surface of rectangle is "+ calcsurface(length, width));