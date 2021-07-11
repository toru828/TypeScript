"use strict";
function countStringType(array) {
    let totalNumber = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'string' && typeof array[i] !== 'number') {
            return;
        }
        if (typeof array[i] === 'string') {
            ++totalNumber;
        }
    }
    console.log(totalNumber);
}
let a;
a = [1, "h", 2, "k", "hello"];
countStringType(a);
