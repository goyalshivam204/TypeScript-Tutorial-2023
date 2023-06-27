// TYPESCRIPT FUNCTION
// ====================

// EXAMPLE-1

// function addTwo(num){
//     num.toUpperCase();
//     return num+2;
// }

// addTwo(5); // we're getting [ function addTwo(num: any): any ] able to compile an runtime error code

// fix
function addTwo(num: number){
    // num.toUpperCase(); // we're getting [Property 'toUpperCase' does not exist on type 'number'.]
    return num+2;
}
addTwo(5);

// EXAMPLE-2

// function getUpper(val){
//     return val.toUpperCase();
// }
// getUpper(4); // NOT getting error because inferred type is any
// ******** IN FUNCTIONS IT'S ALMOST MANDATORY TO USE TYPE ANNOTATION WITH PARAMETERS
// to annotation val: string

// EXAMPLE-3

function signUpUser(name: string, email: string,isPaid: boolean){}
// signUpUser(1,2,3); // getting error for 1st arg right now after resolving it get the error for next arg
// signUpUser("Shivam",2,3); // getting error 2nd arg right now after resolving it get the error for next arg


// EXAMPLE-4

let loginUser = (name: string,email: string,isPaid: boolean = false) => {}
loginUser("Shivam","shivam@gmail.com"); // not getting error because default values is defined.

/* Still we haven't talked about anything to return types. So, assure it now. */ 

function sum1(n1: number,n2:number){
    // return n1+n2;
    return "This function should return [number]";
}
let result = sum1(3,4); // But, on an api level we don't defined the type checking. so result is now string type

function sum(n1: number,n2: number): number{
    // return  "This function should return [number]"; // Error: [Type 'string' is not assignable to type 'number']
    return n1+n2;
}


function getValue(myVal: number){
    if(myVal > 5){
        return true;
    }
    return "200 OK";
}

let res  = getValue(10); // inferred as smart enough [let res: string | boolean]

// Example 

// const heros1 = ["thor", 1, "ironman"]; // not giving error on not string type
// const heros2 : Array<String> = ["thor", 1, "ironman"] // inferred as Array<string | number>, giving error on not string type. 
const heros = ["thor", "spiderman", "ironman"]; // inferred directly as Array<string> 

heros.map((hero): string =>{
    return `hero is ${hero}`;
});

// Example 
const consoleError = (errMsg: string): void => {
    console.log(errMsg); 
}


// use never with the function which doesn't have reachable point.
// means which throw error intentionally
const handleError = (errMsg: string): never => {
    throw new Error(errMsg);
}


// READ FROM MORE ON FUNCTIONS FROM TYPESCRIPT DOCS


//  exporting 
export {}