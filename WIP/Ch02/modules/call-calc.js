const Calc = require('./shape-calc.js');
const myCalc = new Calc();

console.log('Area of square, side is 4: ' + myCalc.areaSquare(4));
console.log('Area of Circle, radius is 4: ' + myCalc.areaCircle(4));
console.log('Area of Triangle, base is 4, height is 3: '+  myCalc.areaTriangle(4,3));