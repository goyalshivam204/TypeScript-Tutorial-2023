"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myScore = 33;
myScore = 44;
myScore = "55";
var userOrAdmin = { name: "Shivam", id: 334 };
userOrAdmin = { username: "shivam204", id: 334 };
// Another smart example of TypeScript
function getDbId(id) {
    // id.toLowerCase(); // gives error
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        // can do operation of number
    }
}
var d1 = [1, 2, 3];
var d2 = ["1", "2", "3"];
var d3 = ["1", "2", "3"];
var d4 = [1, 2, 3];
var d5 = [1, "2", 3, "4"];
var marriageStatus;
marriageStatus = "married";
