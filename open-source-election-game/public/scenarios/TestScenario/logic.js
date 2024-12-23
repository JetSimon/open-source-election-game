let testVar = 0;

function createEnding(engine, results) {
    return {
        slides: [
            {
                imageUrl: "https://placehold.co/250x250",
                endingText: "Did it work?"
            }
        ]
    }
}

function onAnswerPicked(engine, answerPicked) {
    testVar++;
    engine.insertNewQuestionNext({
        "id": 888,
        "description": "Inserted",
        "answers": [
            {
                "id": 8888,
                "description": "Ahh " + testVar,
                "feedback": "Ahhh",
                "answerEffects": [
                ]
            }
        ],
        "keepInPlaceIfQuestionsShuffled": false
    })
}

export {createEnding, onAnswerPicked}