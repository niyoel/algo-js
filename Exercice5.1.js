const readlineSync = require("readline-sync");
let askTvSerie ={
    n: new Number(readlineSync.question("actors number")),
   cast: [],
    /* casting :function(){
        for(i =0; i < n; i++)
        return this.cast[i];
  
    }, */
        serie_desc: {
            nom:' cass',
            yearprod:'2019'
        }
    }
    function casting(){
        for(let i =0; i <askTvSerie.n; i++){
            askTvSerie.cast[i]= readlineSync.question("actors name");
            askTvSerie.cast++;
        }
        return askTvSerie.cast;
  
    };
let serie = Object.create(askTvSerie);
console.log(casting());
console.log(serie.serie_desc);
console.log(askTvSerie.cast);

