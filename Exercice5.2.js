
const readlineSync = require("readline-sync");
let askTvSerie ={
    n: new Number(readlineSync.question("actors number")),
    cast: readlineSync.question("actors name"),  
    casting :function(){
        for(i =0; i < n; i++)
        return this.cast;

    },
    
        serie_desc: {
            nom:' cass',
            yearprod:'2019'
        }
    }
let serie = Object.create(askTvSerie);
const keys = Object.keys(askTvSerie)
const prop = keys[Math.floor(Math.random() * keys.length)]
console.log(prop);

