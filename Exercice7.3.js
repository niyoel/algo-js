const readlineSync = require("readline-Sync");
let n = new Number(readlineSync.question(" give the integer number"))
let count = 0
for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        console.log(i)
        count = count + i;
    }
}
if (count == 0) {
    console.log("prime")
}