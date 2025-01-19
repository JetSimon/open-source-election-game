enum Difficulty {
    Cakewalk,
    VeryEasy,
    Easy,
    Normal,
    Hard,
    Impossible,
    Unthinkable,
    Blowout,
    Disaster
}

function getMultiplierFromDifficulty(difficulty : Difficulty) : number {
    switch(difficulty) {
        case Difficulty.Cakewalk:
            return 2.0
        case Difficulty.VeryEasy:
            return 1.5
        case Difficulty.Easy:
            return 1.2
        case Difficulty.Normal:
            return 1.0
        case Difficulty.Hard:
            return 0.8
        case Difficulty.Impossible:
            return 0.6
        case Difficulty.Unthinkable:
            return 0.4
        case Difficulty.Blowout:
            return 0.2
        case Difficulty.Disaster:
            return 0.1
        default:
            return 1.0;
    }
}

function getDisplayNameForDifficulty(difficulty : Difficulty) : string {
    const s : string = Difficulty[difficulty];
    return s.replace(/([A-Z])/g, ' $1').trim();
}

function getAllDifficultyValues() : Difficulty[] {
    return [
        Difficulty.Cakewalk,
        Difficulty.VeryEasy,
        Difficulty.Easy,
        Difficulty.Normal,
        Difficulty.Hard,
        Difficulty.Impossible,
        Difficulty.Unthinkable,
        Difficulty.Blowout,
        Difficulty.Disaster
    ];
}

export { Difficulty, getMultiplierFromDifficulty, getDisplayNameForDifficulty, getAllDifficultyValues}