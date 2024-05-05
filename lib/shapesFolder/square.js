const Shapes = require("./shapes");

class Square extends Shapes {
    constructor(square, circle, triangle){
        super(square, circle, triangle);
        this.square = square;
    }

    render() {
        return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`
    }
}
module.exports = Square;