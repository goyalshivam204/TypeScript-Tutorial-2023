/* WHY INTERFACE IS IMPORTANT */
/* IN IOS WE HAVE PROTOCOLS MEANS -> SOME THINGS ARE DONE WITH SOME PROTOCOLS */

interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number
}

interface Story{
    createStory: () => void
}

class Instagram implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){

    }

    createStory(): void{
        console.log("Story was created");
    }
}

class YouTube implements TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){

    }
}