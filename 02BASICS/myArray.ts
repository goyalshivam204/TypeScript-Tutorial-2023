// const superHeros = []; // empty by default never array.
// superHeros.push("spiderman"); // Argument of type 'string' is not assignable to parameter of type 'never'


const superHeros: string[] = []
// const heroPowers: number[] = [] // It's same as below but less advised. as lower line more resembles with languages
const heroPowers: Array<number> = []


type User = {
    name: string,
    isActive: boolean
}

const allUsers: User[] = []

const MLModels: number[][] = [
    [255,255,255],
    [200,200,198],
    [200,200,400]
]

const MLModels2: Array<Array<number>> = [
    [255,255,255],
    [200,200,198],
    [200,200,400]
]


superHeros.push("spiderman");
heroPowers.push(10);

allUsers.push({name: "spiderman",isActive: true});


