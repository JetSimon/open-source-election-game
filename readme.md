# How to run

1. Clone this repo
2. Run ```npm install``` in the open-source-election-game directory (the one with package.json in it, you may need to run ```cd open-source-election-game```)
3. Run ```npm run dev``` and you should be able to see the game run in your browser.

# Data Differences/Similarities to TCT

Currently this game just loads the scenario hardcoded at ```src/scenarios/TestScenario.ts```

The scenario schema is very similar to a combined code 1 and 2 of the TCT engine.

```
interface ScenarioModel {
    candidates: CandidateModel[]; <- An array of information about candidates, what would be Code 1 in TCT
    states: StateModel[]; <- An array of information about each state <- In Code 2 in TCT
    issues: Issue[]; <- An array of information about each issue <- Code 2 in TCT
    scenarioSides: ScenarioSideModel[]; <- An array of "ScenarioSides", which right now just contains an array of questions. The design descision here is each playable candidate gets a ScenarioSide. Note that each Candidate-Running Mate pair DO NOT have unique ScenarioSides. That seems like something cumbersome we should not adapt from TCT.
}
```

Note that currently the election information isn't part of the ScenarioModel, but it will be in the future (see Issues)

Also note that instead of having an array of IssueScores like in TCT (an artifact of how everything was stored in a database in TCT), the associated state and candidate issue scores (as well as things like question answers, effects, etc) are just part of the CandidateModel and StateModel json. See the ```src/models/``` folder for a better idea of how the data is laid out.

# Engine, View, Models

I am trying to keep the engine stuff separate from the "view" (aka the frontend website). So technically the backend could be plugged into anything. All that/the game logic lives in the ```src/engine``` folder. The view part is in the ```src/views``` folder, but we could also have a /components folder in the future.

The ```src/models``` folder contains models for data structures. Models are the basic unchanging data of the engine. Look up the MVC design pattern.

# More About the Engine

The main game logic is loaded from Engine.ts. A controller for the Scenario is created which in turn controls the Candidates and States. Each time a question is answered we apply the answer effects and then recalculate the opinions of each state for each candidate (see the ```StateController/update``` function). Note that opinions are normalized (made to be in range 0-1) for easy use of polling, etc.