# How to run

1. Clone this repo
2. Run ```npm install``` in the open-source-election-game directory (the one with package.json in it, you may need to run ```cd open-source-election-game```)
3. Run ```npm run dev``` and you should be able to see the game run in your browser.

# Data Differences/Similarities to TCT

The ScenarioModel schema is very similar to a combined code 1 and 2 of the TCT engine.

```
interface ScenarioModel {
    candidates: CandidateModel[]; <- An array of information about candidates, what would be Code 1 in TCT
    states: StateModel[]; <- An array of information about each state <- In Code 2 in TCT
    issues: Issue[]; <- An array of information about each issue <- Code 2 in TCT
    scenarioSides: ScenarioSideModel[]; <- An array of "ScenarioSides", which right now just contains an array of questions. The design descision here is each playable candidate gets a ScenarioSide. Note that each Candidate-Running Mate pair DO NOT have unique ScenarioSides. That seems like something cumbersome we should not adapt from TCT.
}
```

Note that instead of having an array of IssueScores/AnswerFeedback/etc like in TCT (an artifact of how everything was stored in a database in TCT), the associated state and candidate issue scores (as well as things like question answers, effects, etc) are just part of the CandidateModel and StateModel json. See the ```src/engine/models/``` folder for a better idea of how the data is laid out.

In total, you need 3 files to define a scenario:

1. The scenario model is stored in a file called data.json. 

2. The logic for cyoa and endings is stored in a file called logic.js.

3. The map svg for each scenario is stored in a file called map.svg. Note that each state in data.json needs a corresponding path in the map.svg where the id of the path is the abbreviation of the staate.

# Engine, View, Models

I am trying to keep the engine stuff separate from the "view" (aka the frontend website). So technically the backend could be plugged into anything. All that/the game logic lives in the ```src/engine``` folder. The views for the game, that aren't needed to function technically but are needed to interact with it are in ```src/game```. The ```src/website``` folder contains frontend code for the website that isn't strictly needed to play the game. The ```src/editor``` folder contains the frontend code for the scenario editor page. Note that the editor folder depends on the engine and game folders.

The ```src/engine/models``` folder contains the interfaces for the basic data structures of the game/scenarios.

# More About the Engine

The main game logic is loaded from Engine.ts. A controller for the Scenario is created which in turn controls the Candidates and States. Each time a question is answered we apply the answer effects and then recalculate the opinions of each state for each candidate (see the ```StateController/update``` function). Note that opinions are normalized (made to be in range 0-1) for easy use of polling, etc.