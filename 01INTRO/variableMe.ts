let greetings: string = "Hello, Shivam";

console.log(greetings);
greetings.toLowerCase()


// TYPESCRIPT TYPES

// number 
// let userId : number = 334455.3;

let userId = 334455.3; // better practice when immediately assigning the value TS smart enough to detect the type
// userId = "hitesh"; // getting error Type 'string' is not assignable to type 'number

// boolean 
let isLoggedIn: boolean = false;


// any -> (keyword not advised to use of it)

let hero;
function getHero(){
    return "thor";
}

hero = getHero(); // inferred as [let hero: any] we don't want it. 
// we have flag noImplicitAny to get an error for it instead of what we are getting. 

export {};