const readlineSync = require("readline-Sync");

function Generate() {
    Min = Math.ceil(1);
    Max = Math.ceil(100);
    let N = Math.floor(Math.random() * (Max - Min)) + Min;

    console.log(N);
    let A = new Number(readlineSync.question("Guess the number between 1 and 100! "));

    while (A !== N) {
        if (A < N) {
            console.log("your number is small ");
            A = Number(readlineSync.question("  Guess the number again "));
        } else if (A > N) {
            console.log("your number is big ");
            A = Number(readlineSync.question("  Guess the number again "));


        }
    }
    console.log("good");
}
Generate();