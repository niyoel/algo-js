const readlineSync = require("readline-sync");
function askTvSeri(name, prodyear, cast) {
    
    this.name = name; 
    this.prodyear = prodyear;
    this.cast = cast
    
    this.getDetails = function () {
     return this.name + "  " + this.prodyear +" " + cast;
    
    }
             
}       
        let seriename = readlineSync.question("enter the name of serie");
        let prodyear = readlineSync.question("enter the year of production"); 
        let cast = readlineSync.question("enter the member names of casting ");
        askTvSeri = new askTvSeri( seriename, prodyear, cast);
        console.log(askTvSeri.getDetails()); 


  