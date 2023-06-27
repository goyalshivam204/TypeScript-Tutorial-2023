"use strict";
/* NARROWING  */
Object.defineProperty(exports, "__esModule", { value: true });
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof "name");
console.log(typeof 123);
function rollValue(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val;
}
console.log(rollValue("ue193131"), rollValue(193131));
function provideId(id) {
    if (!id) {
        console.log("Please, provide ID");
        return;
    }
    id.toLowerCase();
}
// But, still not handling case for empty string means when passed value is
// i.e let str = "";
// printAll(str); // business case is ignored in above
function printAll(strs) {
    if (strs) { //  not null
        if (typeof strs === "object") { // checking for array as it's also object type in .js
            strs.length;
            for (let i = 0; i < strs.length; i++) {
                console.log(strs[i]);
            }
        }
        else {
            console.log("str:", strs.toLowerCase());
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
/* `instanceof` narrowing  */
// only can be used where we can use `new keyword`
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase);
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function isBird(pet) {
    return pet.fly !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; // even thought we know it is fish type script don't sure [(parameter) pet: Fish | Bird]
        return "pet is fist";
    }
    else {
        pet;
        return "pet is bird";
    }
}
function getFoodSmart(pet) {
    if (isBird(pet)) {
        pet.fly();
        return "pet is Bird";
    }
    else {
        pet.swim();
        return "pet is Fist";
    }
}
function getShapeArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
