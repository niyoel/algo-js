const readlineSync = require("readline-Sync");

let nbr =  new Number (readlineSync.question("what is your favorite number?"));
 while( nbr != 42 )
{
 nbr = new Number (readlineSync.question(" are u sure? enter  your favorite number again?"));
}
 console.log("happy");