"use strict";
function mergeObject(a, b) {
    return Object.assign(a, b);
}
const john = mergeObject({ name: "John" }, { age: 20 });
console.log(john);
