/* NARROWING  */

console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof "name");
console.log(typeof 123);

function rollValue(val: number | string){
    if(typeof val === "string"){
        return val.toUpperCase();
    }
    return val;
}
console.log(rollValue("ue193131"),rollValue(193131));

function provideId(id: string | null){
    if(!id){
        console.log("Please, provide ID");
        return;
    }
    id.toLowerCase();
}


// But, still not handling case for empty string means when passed value is
// i.e let str = "";
// printAll(str); // business case is ignored in above
function printAll(strs: string | string[] | null){
    if(strs){ //  not null
        if(typeof strs === "object"){ // checking for array as it's also object type in .js
            strs.length
            for(let i = 0; i<strs.length ; i++){
                console.log(strs[i]);
            }
        }else{
            console.log("str:", strs.toLowerCase());
        }
    }
}

/**** IN OPERATOR ****/

interface User{
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}



function isAdminAccount(account: User | Admin ){
    if("isAdmin" in account){
        return account.isAdmin;
    }
    return false;
}

/* `instanceof` narrowing  */ 

// only can be used where we can use `new keyword`
function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase);
    }
}

/* TYPE PREDICATES */

type Fish = {swim: ()=>{}}
type Bird = {fly: ()=>{}}

function isFish(pet: Fish | Bird){
    return (pet as Fish).swim !== undefined;
}

function isBird(pet: Fish | Bird): pet is Bird{ // return type making sure that it's of type
    return (pet as Bird).fly !== undefined;
}
function getFood(pet : Fish | Bird){
    if(isFish(pet)){
        pet // even thought we know it is fish type script don't sure [(parameter) pet: Fish | Bird]
        return "pet is fist";
    }else{
        pet 
        return "pet is bird";
    }
}
function getFoodSmart(pet : Fish | Bird){
    if(isBird(pet)){
        pet.fly();
        return "pet is Bird";
    }else{
        pet.swim();
        return "pet is Fist";
    }
}

/* DISCRIMINATED UNION */

interface Circle{
    kind: "circle",
    radius: number
}

interface Square{
    kind: "square",
    side: number
}

interface Rectangle{
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square

function getShapeArea(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }
    return shape.side*shape.side;
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        
        case "square":
            return shape.side*shape.side;

        default:
            const _defaultForShape: never  = shape;
            return _defaultForShape;

    }
}

export {}
