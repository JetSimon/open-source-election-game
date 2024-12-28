let testVar = 0;

function createEnding(engine, results) {

    if(engine.playerWonEv(results)) {
        return {
            slides: [
                {
                    imageUrl: "https://placehold.co/250x250",
                    endingText: "You win electorally speaking!"
                },
                {
                    imageUrl: "https://placehold.co/250x250",
                    endingText: "Slide 2!"
                },
                {
                    imageUrl: "https://placehold.co/250x250",
                    endingText: "Slide 3 :3"
                }
            ]
        }
    }
    
    return {
        slides: [
            {
                imageUrl: "https://placehold.co/250x250",
                endingText: "You lose electorally speaking!"
            },
            {
                imageUrl: "https://placehold.co/250x250",
                endingText: "Slide 2!"
            },
            {
                imageUrl: "https://placehold.co/250x250",
                endingText: "Slide 3 :3"
            }
        ]
    }
}

function onAnswerPicked(engine, answerPicked) {
    /*testVar++;
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
    })*/
}

export {createEnding, onAnswerPicked}