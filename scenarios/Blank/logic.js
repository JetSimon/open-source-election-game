function createEnding(engine, results) {
    // Put ending logic here
}

function onAnswerPicked(engine, answerPicked) {
    // Put CYOA logic here. Fired after each answer picked.
}

function onScenarioStarted(engine) {
    // Fired after the player hits "start" (finishes selecting candidate and VP)
}

export {createEnding, onAnswerPicked, onScenarioStarted}