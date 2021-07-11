"use strict";
class Square {
    constructor(name, width) {
        this.name = name;
        this.width = width;
    }
    makeElement() {
        let area;
        area = this.width * this.width;
        return "The area of " + this.name + " is " + area;
    }
}
class Rectangle {
    constructor(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
    }
    makeElement() {
        let area;
        area = this.width * this.height;
        return "The area of " + this.name + " is " + area;
    }
}
class arrayForShapes {
    constructor() {
        this.list = [];
    }
    pushToArray(areaInterfaceTypedVar) {
        this.list.push(areaInterfaceTypedVar.makeElement());
    }
}
let Square1 = new Square("Square1", 3);
let Rectangle1 = new Rectangle("Rectangle1", 5, 6);
let listForShape = new arrayForShapes();
listForShape.pushToArray(Square1);
listForShape.pushToArray(Rectangle1);
console.log(listForShape.list);