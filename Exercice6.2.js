class Rectangle {
    constructor(topleftxpos, topleftypos, width, length) {


        this.topleftxpos = topleftxpos;
        this.topleftypos = topleftypos;
        this.width = width;
        this.length = length;
        this.colides = false;

    }


    colide(xposition, yposition) {
        if (this.topleftxpos + this.width >= xposition || this.topleftypos + this.length >= yposition) {
            this.colides = true;
            return this.colides;
        } else {
            return this.colides;
        }
    }
}

let rectangle = new Rectangle(10, 20, 20, 25);
console.log(rectangle.colide(30, 30));
let otherrectengle = new Rectangle(20, 30, 15, 10);
console.log(otherrectengle.colide(40, 50));