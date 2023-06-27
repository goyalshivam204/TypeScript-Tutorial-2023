/* NOTE SOME WEIRD BEHAVIOR STILL EXIST EVEN IN TYPESCRIPT */

const User = {
    name: "shivam",
    email: "shivam@gmail.com",
    isActive: true
}

// Not a common use case.

// COMMON CASE IS TO PASS OBJECT THROUGH A FUNCTION

function createUser({name:string,isPaid: boolean}){

};

function createCorrectUser({name,isPaid}:{name: string,isPaid: boolean}){

};
let newUser = {
    name: "shivam",
    isPaid: false,
    email: "shivam@gmail.com"
}

createUser(newUser); // not getting huh ? why. 
// createUser({name: "shivam",isPaid: false,email : "shivam@gmail.com"}); // getting error

/*******DOUBT*******/
createUser({name: 1,isPaid: 2}); // why this is any, when i defined the type annotation as well ??????

// createCorrectUser({name:1, isPaid: 2}); // getting error so works hurrah.
createCorrectUser(newUser); // still works huh ? why


// EXAMPLE 2
function createCourse():{name: string,price: number}{
    return {name: "reactjs",price: 399}
}


// TYPE ALIAS
/* FOR A OBJECT OR UNION WE PREFER TYPE ALIAS OR INTERFACE */
type UserType = {
    name: string,
    email: string,
    isActive: boolean
}

// Advisable to use this way.
function createUser2(user: UserType): UserType{
    return {name: "",email: "",isActive: true}; 
}

createUser2({name: "shivam",email: "shivam",isActive: false});

/* UserDB example */

type UserDb = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number 
}


let userDb: UserDb = {
    _id: "UE193131",
    name: "Shivam Goyal",
    email: "shivam@gmail.com",
    isActive: true
}

// userDb._id = "UE193131"; // Error because readonly property (remember feature of .ts not any exist in .js)
userDb.email = "shivam@yahoo.com";


// To show use '&' in typeScript

type CardNumber = {
    cardNumber: string
}

type CardDate = {
    cardDate: string
}

type CardDetails = CardNumber & CardDate & {
    cvv: number
}


export {};