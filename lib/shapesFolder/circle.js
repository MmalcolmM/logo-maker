const Shapes = require("./shapes");

class Circle extends Shapes{
    constructor(square, circle, triangle){
        super(square, circle, triangle);
        this.circle = circle
    }

    render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`
    }
}
module.exports = Circle;