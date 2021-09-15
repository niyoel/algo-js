class Circle {
    constructor(xpos, ypos, radius) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.aire;
    }
    move(xOffset, yOffset) {
        this.xpos = xOffset;
        this.ypos = yOffset;
    }
    get surface() {
        return "la surface the cercle est " + Math.round((this.aire = Math.PI * this.radius * this.radius), 2);
    }

}
let cercle = new Circle(10, 5, 8);

console.log("surface " + cercle.surface + " la position X " + cercle.xpos + " la position y " + cercle.ypos);
cercle.move(6, 9);
console.log("surface " + cercle.surface + " la position X " + cercle.xpos + " la position y " + cercle.ypos);