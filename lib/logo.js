const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./shapesFolder/triangle.js') ; // Update the file path accordingly
const Circle = require('./shapesFolder/circle.js');
const Square = require('./shapesFolder/square.js');

class Logo {
    constructor() { }

    run() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'logo',
                message: 'Enter up to 3 letters for your logo.',
                validate: function (input) {
                    if (input.length > 3) {
                        return "Logo must be up to 3 characters long"
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Type a color for your text'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Pick a shape',
                choices:
                    ['circle',
                        'square',
                        'triangle']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Type a color for your shape'
            }
        ]);
    }

    generateSVG(data) {
        let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">`;



        // Add shape element based on the user's choice and color
        if (data.shape === 'circle') {
            const circle = new Circle();
            circle.setColor(data.shapeColor);
            svgContent += circle.render();
        } else if (data.shape === 'square') {
            const square = new Square();
            square.setColor(data.shapeColor);
            svgContent += square.render();
        } else if (data.shape === 'triangle') {
            const triangle = new Triangle();
            triangle.setColor(data.shapeColor);
            svgContent += triangle.render();
        }
        // Add text element with the user-defined text and color
        svgContent += `<text x="32" y="50" fill="${data.textColor}">${data.logo}</text>`;
        svgContent += `</svg>`;

        return svgContent;
    }

    writeToFile(fileName, data) {
        fs.writeFile('logo.svg', data, (err) => {
            if (err) {
                console.error(err);
                return;
            } else {
                console.log(`Generated ${fileName}`);
            }
        });
    }
}

module.exports = Logo;