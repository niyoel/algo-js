const readlineSync = require("readline-Sync");
const number = new Number(readlineSync.question('Enter the number of terms: '));
let n1 = 0,
    n2 = 1,
    fib;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    fib = n1 + n2;
    n1 = n2;
    n2 = fib;
}