"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello, Shivam";
console.log(greetings);
greetings.toLowerCase();
// number -> keyword
// ==================
// let userId : number = 334455.3;
var userId = 334455.3; // better practice when immediately assigning the value TS smart enough to detect the type
// userId = "hitesh"; // getting error Type 'string' is not assignable to type 'number
// boolean -> keyword
// ==================
var isLoggedIn = false;
// any -> keyword not advised to use of it.
// ===========================================
var hero;
function getHero() {
    return "thor";
}
hero = getHero(); // inferred as [let hero: any] we don't want it. 
// we have flag noImplicitAny to get an error for it instead of what we are getting. 
// function declaration 
// ====================
function addTwo(num) {
    num.toUpperCase();
    return num + 2;
}
addTwo(5); // we're getting [ function addTwo(num: any): any ]
