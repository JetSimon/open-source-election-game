# How to Add a Midgame Running Mate Selection

1. (Optional) If you want to skip the initial running mate selection screen, add the following property to your data.json file:

```json
"skipRunningMateSelection" : true
```

So for example:

```json
{
    "music": [],
    "credits": "by Jet",
    "candidates": [...],
    "states": [...],
    "issues": [...],
    "scenarioSides": [...],
    "theme": {...},
    "hasStateVisits": true,
    "scenarioName": "Some Name",
    "scenarioDescription": "Some Description",
    "scenarioImageUrl": "Some Image",
    "skipRunningMateSelection" : true
}
```

The ... is just placeholder. The important part is the second to last line.

2. In your logic.js file, somewhere in onAnswerPicked (for example if the answer id == the answer id of the question you want to choose a new vp from), add this:

```js
engine.showRunningMateSelectionScreen();
```

This will trigger the running mate selection screen to show after the player answers that question!