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

console.log(serie.serie_desc);
console.log(serie.cast);
console.log(serie.n);

