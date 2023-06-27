"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
// the problem with this that, it can take any dataType and return any dataType 
// not necessarily the same dataType which is passed.
function identityTwo(val) {
    return `${val}`; // Works because returning "any" 
    // return val;
}
function identityThree(val) {
    // return `${val}`; // Type 'string' is not assignable to type 'Type'.
    return val;
}
identityThree(3);
identityThree("3");
function identityFour(val) {
    return val;
}
identityFour({ brand: "Royal Stag", type: 112 });
/* GENERICS TYPES WITH ARRAYS */
function getSearchProducts(products) {
    // have done some database operations
    const myIndex = 4;
    return products[myIndex];
}
/* YOU WILL A LOT OF <T,> THIS TYPES INSTEAD OF <T> TO DISTINGUISH IT FROM <h1> <h2> <p> <div> etc in short from jsx tag */
const getMoreSearchProducts = (products) => {
    // have done some database operations
    const myIndex = 4;
    return products[myIndex];
};
// function generateObject<T,U>(key1: T,key2: U): object{
//     return {
//         key1,
//         key2
//     }
// }
// let obj = generateObject("shivam",22);
// // console.log(obj);
function generateObject(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo
    };
}
generateObject("Shivam", { connection: "", username: "", password: "" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
