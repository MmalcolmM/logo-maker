class Shapes {
    constructor(square, circle, triangle) {
        this.square = square;
        this.circle = circle;
        this.triangle = triangle;
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}
module.exports = Shapes;