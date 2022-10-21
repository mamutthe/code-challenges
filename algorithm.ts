function mdc(u: number, v: number): number {
    let t: number;
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
