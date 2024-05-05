const Shapes = require("./shapes");

class Triangle extends Shapes {
    constructor(square, circle, triangle) {
        super(square, circle, triangle);
        this.triangle = triangle;

    };
    render() {
        return `<polygon points= "50,10 10,90 90,90" fill="${this.color}" />`
    }
}
module.exports = Triangle;