import { Engine } from "../oseg/engine/Engine";
import { ScenarioModel } from "../oseg/engine/models/ScenarioModel";

async function runHeadlessEngine(data: ScenarioModel, rawLogic: string, seed: string, candidateId: number, runningMateId: number, isShuffled: boolean, visits: boolean) {
    const engine = await getHeadlessEngine(data, rawLogic, candidateId, runningMateId, seed, isShuffled)

    while (!engine.isGameOver()) {
        const question = engine.getCurrentQuestion();
        if (question == null) break;

        const randomIndex = Math.floor(
            question.answers.length * engine.random()
        );
        const answer = question.answers[randomIndex];

        engine.applyAnswer(answer);

        if(visits) {
            const states = engine.scenarioController.getStates();
            states[Math.floor(engine.random() * states.length)].visit(
                candidateId,
                engine
            );
        }
        
        engine.nextQuestion();
    }

    return engine.getFinalResults();
}

async function getHeadlessEngine(data: ScenarioModel, rawLogic: string, candidateId: number, runningMateId: number, seed: string, isShuffled: boolean)  {
    const sides = data.scenarioSides;
    const sideIndex = sides.map((x) => x.playerId).indexOf(candidateId);

    const encodedLogic = encodeURIComponent(rawLogic);
    const logicDataUri = "data:text/javascript;charset=utf-8," + encodedLogic;
    const {
        createEnding,
        onAnswerPicked,
        onScenarioStarted,
        onCandidateSelectionStarted,
    } = await import(/* @vite-ignore */ logicDataUri);

    const engine = new Engine();
    engine.logToConsole = false;

    engine.createEnding = createEnding;
    engine.onAnswerPicked = onAnswerPicked;
    engine.onScenarioStarted = onScenarioStarted;
    engine.onCandidateSelectionStarted = onCandidateSelectionStarted;

    engine.setSeed(seed);
    engine.loadScenario(data, false);

    if (engine.onCandidateSelectionStarted != null) {
        engine.onCandidateSelectionStarted(engine);
    }

    engine.setScenarioSide(sideIndex, runningMateId, isShuffled);
    return engine;
}

export { getHeadlessEngine, runHeadlessEngine };

