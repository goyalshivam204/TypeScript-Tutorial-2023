/* ABSTRACT CLASS */

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){

    }
    // getSepia(): void // Function implementation is missing or not immediately following the declaration.
    abstract getSepia(): void
    getReelTime(): number{
        return 8;
    }
}

abstract class TakePhoto2 { 
     constructor(
        public cameraMode: string,
        public filter: string
    ){

    }
    // getSepia(): void // Function implementation is missing or not immediately following the declaration.
    abstract getSepia(): void
    getReelTime(): number{
        return 8;
    }
}


// const tp = new TakePhoto("test","Test"); // Cannot create an instance of an abstract class.
class Instagram extends TakePhoto {
   constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("Sepia is called")
    }
}
const ig = new Instagram("test","Test",123);
console.log("Reel time:", ig.getReelTime()); // that's is difference between abstract and interface

export {};