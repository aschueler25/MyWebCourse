module.exports = class ShapeCalc{

    constructor() {
        this.pi = 3.142;
    }

    areaCircle(radius) {
        return this.pi * (radius**2);
    }

    areaSquare(side) {
        return side**2;
    }

    areaTriangle(base, height) {
        return .5 * (base * height);
    }


};