 const Triangle = require('../shapesFolder/triangle.js') ; // Update the file path accordingly
 const Circle = require('../shapesFolder/circle.js');
 const Square = require('../shapesFolder/square.js');


describe('Shape Classes', () => {
  describe('Triangle', () => {
    it('should render a triangle with the specified color', () => {
      const triangle = new Triangle();
      triangle.setColor('blue');
      expect(triangle.render()).toEqual('<polygon points= "50,10 10,90 90,90" fill="blue" />');
    });

    // Add more test cases for Triangle class as needed
  });

  describe('Circle', () => {
    it('should render a circle with the specified color', () => {
      const circle = new Circle();
      circle.setColor('green');
      expect(circle.render()).toEqual('<circle cx="50" cy="50" r="40" fill="green" />');
    });

    // Add more test cases for Circle class as needed
  });

  describe('Square', () => {
    it('should render a square with the specified color', () => {
      const square = new Square();
      square.setColor('red');
      expect(square.render()).toEqual('<rect x="10" y="10" width="80" height="80" fill="red" />');
    });

    // Add more test cases for Square class as needed
  });

  // Add more describe blocks and test cases for additional functionality or edge cases
});