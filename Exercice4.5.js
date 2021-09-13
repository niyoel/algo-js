function calcDistance(x,y){
    this.x = x;
    this.y = y;
    

    this.distanceTo = function (calcDistance)
    {
        let distance = Math.sqrt((Math.pow(calcDistance.x-this.x,2))+(Math.pow(calcDistance.y-this.y,2)))
        return distance;
    };
}

let newPoint = new calcDistance(1,1);
let nextPoint = new calcDistance(3,1);

console.log(newPoint.distanceTo(nextPoint))