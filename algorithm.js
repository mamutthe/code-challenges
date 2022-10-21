"use strict";
function mdc(u, v) {
    let t;
    while (u > 0) {
        if (u < v) {
            t = u;
            u = v;
            v = t;
        }
        u = u - v;
    }
    return v;
}
function main() {
    int;
}
