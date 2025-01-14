interface HighscoreSubmissionModel {
    candidate : number;
    runningMate : number;
    answers : number[];
    visits : number[];
    seed : string; 
    isShuffled : boolean;
}

export default HighscoreSubmissionModel;