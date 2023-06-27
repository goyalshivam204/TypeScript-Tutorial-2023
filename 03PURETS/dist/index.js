"use strict";
/* CLASSES EXAMPLES */
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    // city: string; // Property 'city' has no initializer and is not definitely assigned in the constructor.
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const shivam = new User("s@s.com", "shivam");
// console.log("City: ",shivam.city); // Property 'city' is private and only accessible within class 'User'
// shivam.email = "s@gmail.com"; //Cannot assign to 'email' because it is a read-only property
/*MOST OF THE PROFESSIONAL PEOPLE DON'T DO IT LIKE ABOVE.*/
class UserProfessional {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Abohar";
    }
}
const shivamProfessional = new UserProfessional("s@s.com", "shivam", "131");
/* GETTERS & SETTERS */
class UserGetterSetter {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this._courseCnt = 1;
        this.city = "Abohar";
    }
    deleteToken() {
        console.log("Token deleted!!!");
    }
    get getAppleEmail() {
        return `apple.${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    get getCourseCnt() {
        return this._courseCnt;
    }
    set courseCount(courseNum) {
        if (this.courseCount <= 1) {
            throw new Error("Course Count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    set courseCnt(courseNum) {
        if (this.courseCnt <= 1) {
            throw new Error("Course Count should be more than 1");
        }
        this._courseCnt = courseNum;
    }
}
/* PROTECTED ACCESS MODIFIER */
class SubUser extends UserGetterSetter {
    constructor() {
        // Can't acquire all properties and method except private properties/methods.
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        // this._courseCount = 4; // Property '_courseCount' is private and only accessible within class 'UserGetterSetter'
        this._courseCnt = 4; // works protected ta da
    }
}
