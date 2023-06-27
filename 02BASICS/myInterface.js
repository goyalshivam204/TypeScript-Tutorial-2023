"use strict";
/* INTERFACE VIDEO-1*/
Object.defineProperty(exports, "__esModule", { value: true });
var shivam = {
    dbId: 1024,
    email: "s@s.com",
    userId: 131,
    startTrail: function () {
        return "Starting a user trail";
    },
    getCoupon: function (name, off) {
        if (name === void 0) { name = "defaultName"; }
        if (off === void 0) { off = 0; }
        return 100;
    }
};
shivam.getCoupon();
