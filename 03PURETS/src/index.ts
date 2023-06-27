/* CLASSES EXAMPLES */

class User {

    readonly email: string;
    private name: string; // Also can use, #name: string
    // city: string; // Property 'city' has no initializer and is not definitely assigned in the constructor.

    constructor(email: string,name: string){
        this.email = email;
        this.name = name;
    }
}

const shivam = new User("s@s.com","shivam");
// console.log("City: ",shivam.city); // Property 'city' is private and only accessible within class 'User'
// shivam.email = "s@gmail.com"; //Cannot assign to 'email' because it is a read-only property

/*MOST OF THE PROFESSIONAL PEOPLE DON'T DO IT LIKE ABOVE.*/

class UserProfessional {

 
    readonly city: string = "Abohar";

    constructor(
        public email: string,
        public name: string,
        private userId: string){

    }
}

const shivamProfessional = new UserProfessional("s@s.com","shivam","131");

/* GETTERS & SETTERS */

class UserGetterSetter {

    private _courseCount = 1;
    protected _courseCnt = 1;
    readonly city: string = "Abohar";

    constructor(
        public email: string,
        public name: string,
        private userId: string){

    }

    private deleteToken(){
        console.log("Token deleted!!!")
    }

    get getAppleEmail(): string{
        return `apple.${this.email}`;
    }

    get getCourseCount():number {
        return this._courseCount;
    }

    get getCourseCnt():number {
        return this._courseCnt;
    }

    set courseCount(courseNum: number){ // A 'set' accessor cannot have a return type annotation.
        if(this.courseCount <= 1){
            throw new Error("Course Count should be more than 1");
        }
        this._courseCount = courseNum;
    }

    set courseCnt(courseNum: number){ // A 'set' accessor cannot have a return type annotation.
        if(this.courseCnt <= 1){
            throw new Error("Course Count should be more than 1");
        }
        this._courseCnt = courseNum;
    }
}

/* PROTECTED ACCESS MODIFIER */
class SubUser extends UserGetterSetter{
    // Can't acquire all properties and method except private properties/methods.

    isFamily:boolean = true;
    changeCourseCount(){
        // this._courseCount = 4; // Property '_courseCount' is private and only accessible within class 'UserGetterSetter'
        this._courseCnt = 4; // works protected ta da
    }
}



// const shivamGetterSetter = new UserGetterSetter("") 

export {}