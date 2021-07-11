function mergeObject<T extends object, U extends object>(a: T, b: U) {
    return Object.assign(a, b);
}

const john = mergeObject({name: "John"}, {age: 20});

console.log(john);