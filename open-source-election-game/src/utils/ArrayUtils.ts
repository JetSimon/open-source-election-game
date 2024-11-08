function normalizeNumberArray(arr: number[]) {
    const total = sumNumberArray(arr);
    return arr.map((n) => n / total);
}

function sumNumberArray(arr: number[]) {
    let total = 0;
    for (const n of arr) {
        total += n;
    }
    return total;
}

export { normalizeNumberArray, sumNumberArray };