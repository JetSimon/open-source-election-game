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

function shuffleArray<T>(array : Array<T>) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  function seededShuffleArray<T>(array : Array<T>, randomFunction : () => number) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      const randomIndex = Math.floor(randomFunction() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

export { normalizeNumberArray, sumNumberArray, shuffleArray, seededShuffleArray };