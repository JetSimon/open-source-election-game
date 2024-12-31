function createEnding(engine, results) {
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
   
}

export {createEnding, onAnswerPicked}