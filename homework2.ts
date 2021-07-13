interface AreaInterface {
    makeElement() : any;
}

class Square implements AreaInterface {
    name: string;
    width: number;
  
    constructor(name: string, width: number) {
        this.name = name;
        this.width = width;
    }
  
    makeElement() {
        let area: number;
        area = this.width * this.width;
        return "The area of " + this.name + " is " + area;
    }
}
  
class Rectangle implements AreaInterface {
    name: string;
    width: number;
    height: number;
  
    constructor(name: string, width: number, height: number) {
        this.name = name;
        this.width = width;
        this.height = height;
    }
  
    makeElement() {
        let area: number;
        area = this.width * this.height;
        return "The area of " + this.name + " is " + area;
    }
}
class arrayForShapesArea {
    areaList: object[] = [];
    
    pushToArray1(shapeArray: any[]) {
        for (let i: number = 0; i < shapeArray.length; i++) {
            this.pushToArray2(shapeArray[i]);
        }
    }

    pushToArray2(areaInterfaceTypedVar : AreaInterface) {
        this.areaList.push(areaInterfaceTypedVar.makeElement());
    }
}


const Square1 = new Square("Square1", 3);
const Rectangle1 = new Rectangle("Rectangle1", 5, 6);
const Square2 = new Square("Square2", 8);
const Rectangle2 = new Rectangle("Rectangle2", 10, 15);

const objectList: object[] = [Square1, Rectangle1, Square2, Rectangle2];

const listForShape = new arrayForShapesArea();

listForShape.pushToArray1(objectList);

console.log(listForShape.areaList);