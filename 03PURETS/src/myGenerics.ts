const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}


// the problem with this that, it can take any dataType and return any dataType 
// not necessarily the same dataType which is passed.
function identityTwo(val: any): any{
    return `${val}`; // Works because returning "any" 
    // return val;
}


function identityThree<Type>(val: Type): Type{
    // return `${val}`; // Type 'string' is not assignable to type 'Type'.
    return val;
}

identityThree(3);
identityThree("3");

function identityFour<T>(val: T): T{
    return val;
}

interface Bottle{
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "Royal Stag",type: 112});


/* GENERICS TYPES WITH ARRAYS */

function getSearchProducts<T>(products: T[]): T{
    // have done some database operations
    const myIndex = 4;
    return products[myIndex];
}
/* YOU WILL A LOT OF <T,> THIS TYPES INSTEAD OF <T> TO DISTINGUISH IT FROM <h1> <h2> <p> <div> etc in short from jsx tag */

const getMoreSearchProducts = <T,>(products: Array<T>): T => {
    // have done some database operations
    const myIndex = 4;
    return products[myIndex];
}


/* USE OF EXTENTS IN GENERICS */

interface Database {
    connection: string,
    username: string,
    password: string
}

// function generateObject<T,U>(key1: T,key2: U): object{
//     return {
//         key1,
//         key2
//     }
// }
// let obj = generateObject("shivam",22);
// // console.log(obj);

function generateObject<T,U extends Database>(valueOne: T,valueTwo: U): object{
    return {
        valueOne,
        valueTwo
    }
}
generateObject("Shivam",{connection:"",username: "",password: ""});



/**** GENERICS CLASSES ****/

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = [];
    addToCart(product: T){
        this.cart.push(product);
    }
}