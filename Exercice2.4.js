const readlineSync = require("readline-sync");

for(let i=0; i<=100; i++)

{
    if( i %2 == 0 )
    {
    console.log(i +"  "+i/2);
    
    }
    else
    {
        console.log(i +"  "+i*3);
    }
}