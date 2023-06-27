/* INTERFACE VIDEO-1*/

interface User{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: ()=>string,
    startTrail(): string 
    getCoupon: (couponName?: string,value?: number) => number
}

const shivam: User = {
    dbId: 1024,
    email: "s@s.com",
    userId: 131,
    startTrail: ()=>{
        return "Starting a user trail"
    },
    getCoupon: (name = "defaultName", off=0)=>{
        return 100; 
    }
}

// i need to make my parameters optional if i want to use it
shivam.getCoupon();


/* INTERFACE VIDEO-2*/

// remember it's not sequential so getting in error in created variable shivam
// interface User {
//     githubToken: string
// }


interface Admin extends User {
    role: "sysAdmin" | "dbAdmin" | "adminAdmin"
}

const shivamAdmin: Admin = {
    role: "sysAdmin",
    dbId: 1024,
    email: "s@s.com",
    userId: 131,
    startTrail: ()=>{
        return "Starting a user trail"
    },
    getCoupon: (name = "defaultName", off=0)=>{
        return 100; 
    }
}

/* READ DOCS WHAT IS DIFFERENCE BETWEEN TYPE & INTERFACE*/

export {};