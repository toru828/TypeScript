function countStringType(array: string[] | number[]) {
    let totalNumber: number = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            ++totalNumber;
        }
    }
    console.log(totalNumber);
}

let arr: any;
let arr1: any;
let arr2: any;
let arr3: any;
arr = [1, "h", 2, "k" , "hello"];
arr1 = [1, 3, 2, 7, 5, 9];
arr2 = ["tom", "john", "nancy", "jesica", "watson"];
arr3 = ["aaa", 1, 1, 4, 23, 23, 3];

countStringType(arr);
countStringType(arr1);
countStringType(arr2);
countStringType(arr3);
