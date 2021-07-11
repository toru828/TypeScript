interface AreaInterface {
    makeElement() : Object;
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

class arrayForShapes {
    list: object[] = [];
    pushToArray(areaInterfaceTypedVar : AreaInterface) {
        this.list.push(areaInterfaceTypedVar.makeElement());
    }
}


let Square1 = new Square("Square1", 3);
let Rectangle1 = new Rectangle("Rectangle1", 5, 6);
let Square2 = new Square("Square2", 8);
let Rectangle2 = new Rectangle("Rectangle2", 10, 15);

let listForShape = new arrayForShapes();

listForShape.pushToArray(Square1);
listForShape.pushToArray(Rectangle1);

console.log(listForShape.list);