const Logo = require('./lib/logo.js')

const logo = new Logo()

logo.run()
    .then((data) => {
        const svgContent = logo.generateSVG(data);
        logo.writeToFile('logo.svg', svgContent)
    })
    .catch((error) => {
        console.error('Error', error);
    });