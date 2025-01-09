function lerp(start : number, end : number, t : number) {
    return (t * end) + ((1.0 - t) * start);
}

export {lerp};