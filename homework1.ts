function countStringType(array: string[] | number[]) {
    let totalNumber: number = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            ++totalNumber;
        }
    }
    console.log(totalNumber);
}

let arr: any
arr = [1, "h", 2, "k" , "hello"];

countStringType(arr);