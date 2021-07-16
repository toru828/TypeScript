interface ShapeInterface {
    calculateArea() : number;
    getName() : string;
}

class Square implements ShapeInterface {
    name: string;
    width: number;
  
    constructor(name: string, width: number) {
        this.name = name;
        this.width = width;
    }
  
    calculateArea() {
        let area: number;
        area = this.width * this.width;
        return area;
    }

    getName() {
        return this.name;
    }
}
  
class Rectangle implements ShapeInterface {
    name: string;
    width: number;
    height: number;
  
    constructor(name: string, width: number, height: number) {
        this.name = name;
        this.width = width;
        this.height = height;
    }
  
    calculateArea() {
        let area: number;
        area = this.width * this.height;
        return area;
    }

    getName() {
        return this.name;
    }
}


const Square1 = new Square("Square1", 3);
const Rectangle1 = new Rectangle("Rectangle1", 5, 6);
const Square2 = new Square("Square2", 8);
const Rectangle2 = new Rectangle("Rectangle2", 10, 15);

const objectList: ShapeInterface[] = [Square1, Rectangle1, Square2, Rectangle2];

objectList.forEach(function(shape) {
    const msg = `The area of ${shape.getName()} is ${shape.calculateArea()}`
    console.log(msg);
})
