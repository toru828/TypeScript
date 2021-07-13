function required(message: string) {
    return (target: object, PropertyKey: string) => {
        let value: string;
        const getter = function() {
            return value;
        };
  
        const setter = function(nam: string) {
            if (nam.length !== 0) {
                value = nam;
            } else {
                value = message;
            }
        }; 

        Object.defineProperty(target, PropertyKey, {
            get: getter,
            set: setter
        }); 
    };
}

class Person {
    @required("Name is required!")
    name: string;
  
    constructor(name: string) {
        this.name = name;
    }
  
    show() {
        console.log(this.name)
    }
}
  
const firstPerson = new Person("John");
firstPerson.show();

const secondPerson = new Person("");
secondPerson.show();
