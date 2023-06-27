// const user1: (string|number)[] = ["hc",1]
// const user2: (string|number)[] = [1,"hc"] // both works

let tUser: [string,number,boolean]; // tuple example

tUser = ["sg",193131,true]; // strong order of array must be maintained.

let rgb: [number,number,number] = [255,123,112];


type User = [number,string]
const newUser: User = [122,"example@google.com"];
newUser[1] = "sg@gmail.com"; // i can override values in it.
// it's just an array with restriction of type on variables.

// newUser.push(true); // not allowed in 5.* my version but works in his version which is 4.* something
newUser.push("ola"); // not restriction on operation of arrays on tuple.

