import { Engine } from "../../engine/Engine";
import EndingModel from "../../models/EndingModel";

import FinalResultsModel from "../../models/FinalResultsModel";

let testVar = 0;

function createEnding(engine : Engine, results : FinalResultsModel) : EndingModel {
    return {
        slides: [
            {
                imageUrl: "https://placehold.co/250x250",
                endingText: "Did it work?"
            }
        ]
    }
}

function onAnswerPicked(engine : Engine, answerPicked : AnswerModel) {
    console.log("Test, was this answer picked?")
    console.log("testVar is now", ++testVar);
}

export {createEnding, onAnswerPicked}