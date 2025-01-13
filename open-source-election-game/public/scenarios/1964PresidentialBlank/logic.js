function onScenarioStarted(engine) {

}

function createEnding(engine, results) {
    return {
        slides: [
            {
                endingHeader: "Example Ending",
                imageUrl: "",
                endingText: "This ending is an example ending that will always be returned"
            }
        ]
    }
}

function onAnswerPicked(engine, answerPicked) {

}

export {createEnding, onAnswerPicked, onScenarioStarted}