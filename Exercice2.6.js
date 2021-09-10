const readlineSync = require("readline-sync");
let day = new Number(readlineSync.question("enter the number betwen 1 and 7 please "));
if (day ==1)
{
console.log("Monday");
}
else if(day == 2)
{
    console.log("Tuesday");
}
else if(day == 3)
{
console.log("Wednesday");
}
else if(day == 4)
{
console.log("Thursday");
}
else if(day == 5)
{
console.log("Friyday");
}
else if(day == 6)
{
console.log("Saturday");
}
else if(day == 7)
{
console.log("Sunday");
}
else
{
    console.log("the number you entered does not corespond with any day of the week");
 }
