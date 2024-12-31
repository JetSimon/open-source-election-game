function lerp(a : number, b : number, t : number) {
    return (t * a) + ((1.0 - t) * b);
}

export {lerp};