let myScore: number | string = 33;

myScore = 44;
myScore = "55";

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let userOrAdmin: User | Admin = {name: "Shivam",id: 334}

userOrAdmin = {username: "shivam204",id: 334}


// Another smart example of TypeScript

function getDbId(id: number | string){
    // id.toLowerCase(); // gives error
    if(typeof id === "string"){
        id.toLowerCase();
    }else{
        // can do operation of number
    }
}

const d1: number[] = [1,2,3]
const d2: string[] = ["1","2","3"]
const d3: string[] | number[] = ["1","2","3"]
const d4: string[] | number[] = [1,2,3]
const d5: (string|number)[] = [1,"2",3,"4"]

let marriageStatus: "married" | "unmarried" | "widow" | "divorced" ;

marriageStatus = "married";
// marriageStatus = "not allowed"; // only specified values are allowed like i think enum not sure


export {};