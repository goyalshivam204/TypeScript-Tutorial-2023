"use strict";
/* WHY INTERFACE IS IMPORTANT */
/* IN IOS WE HAVE PROTOCOLS MEANS -> SOME THINGS ARE DONE WITH SOME PROTOCOLS */
class Instagram {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Story was created");
    }
}
class YouTube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
}
