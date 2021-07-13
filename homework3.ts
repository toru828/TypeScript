function required(message: string) {
    return (target: object, PropertyKey: string) => {
      let value: string;
      // The getter returns the value of the property itself.
      const getter = function() {
        return value;
      };
  
      // setter creates a random string and assign to the property value.
      const setter = function(nam: string) {
          if (nam.length !== 0) {
              value = nam;
          } else {
              value = message;
          }
      }; 
  
      // Check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
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
  // Output: "John" 
  
  const secondPerson = new Person("");
  secondPerson.show();
  /* Output: 
  "Name is required" 
  "" 
  */
  