let testVar = 0;

function createEnding(engine, results) {

    engine.setNewMusic([
        {
            "url": "https://jetsimon.com/groglow/beat2.wav",
            "displayName": "Test 2 - Test 2",
            "imageUrl": "https://placecats.com/500/500"
        }
    ]);

    if(engine.playerWonEv(results)) {
        return {
            slides: [
                {
                    endingHeader: "You won!",
                    imageUrl: "https://placehold.co/250x250",
                    endingText: "You win electorally speaking!"
                },
                {
                    endingHeader: "You won!",
                    imageUrl: "https://placehold.co/250x250",
                    endingText: "Slide 2!"
                },
                {
                    endingHeader: "You won!",
                    imageUrl: "https://placehold.co/250x250",
                    endingText: "Slide 3 :3"
                }
            ]
        }
    }
    
    return {
        slides: [
            {
                endingHeader: "You lost!",
                imageUrl: "https://placehold.co/250x250",
                endingText: "You lose electorally speaking!"
            },
            {
                endingHeader: "You lost!",
                imageUrl: "https://placehold.co/250x250",
                endingText: "Slide 2!"
            },
            {
                endingHeader: "You lost!",
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

        engine.addNewSong({
            "url": "https://jetsimon.com/groglow/beat2.wav",
            "displayName": "Test 2 - Test 2",
            "imageUrl": "https://placecats.com/500/500"
        })
}

export {createEnding, onAnswerPicked}