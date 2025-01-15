# Welcome

This is the documentation for OSEG. To see all the functions you can use for CYOA and endings, I would suggest looking at [the Engine/Engine page](https://jetsimon.com/open-source-election-game/doc/classes/Engine.Engine.html). There are 'Ending Utilty Functions' and 'CYOA Utility Functions' sections.

# Basic Overview

An OSEG scenario is made up of four files:

- All data about the game, including candidates, states, issues, questions, answers, and more is stored in the *data.json* file
- Everything to do with "CYOA" and endings is in *logic.js* (see the section below on logic.js for more details and examples)
- The map the player plays on is stored in *map.svg*. It is expected that for every path in map.svg with an id, there is a state with that abbreviation in data.json. Unless you want to have a state be invisible.
- Any extra styling you want to do goes in *style.css*

# All About logic.js

Having to code in javascript using logic.js may seem intimidating at first. But worry not, many of the concepts in TCT mods are also in OSEG! And if you were coding TCT mods you were using javascript already!

The logic.js file has three functions that are called in various points in the game:

1. onScenarioStarted - called after the player chooses their candidate and presses start. Used for initializing anything you need. Could also be used for a theme fake out, or music changing when you hit start 

2. onAnswerPicked - Called whenever the player picks an answer (same as cyoa function). Gives you access to the engine to ask things about the game, and the answer that was given

3. createEnding - Called when the game is over and the ending is about to be shown to the player. Gives access to asking the engine things, gives you the results of the game. Expects you to return an EndingModel containing an EndingSlide[] (a list of ending slides).

---

So a very basic logic.json for a scenario with one side would look something like this:

```js
function createEnding(engine, results) {
    if(engine.playerWonEv(results)) {
        return {
            slides: [
                {
                    endingHeader: "Congratulations! You have won the Election",
                    imageUrl: "https://picsum.photos/200/300",
                    endingText: "<p>You won!</p>"
                }
            ]
        }
    }
    else {
        return {
            slides: [
                {
                    endingHeader: "Sorry. You have lost the Election",
                    imageUrl: "https://picsum.photos/200/300",
                    endingText: "<p>You lost!</p>"
                }
            ]
        }
    }
}

function onAnswerPicked(engine, answerPicked) {
    // This scenario has no CYOA, so we can leave this blank. But make sure to still include the function!
}

function onScenarioStarted(engine) {
    // No CYOA, so we can leave this blank. But make sure to still include the function!
}

export {createEnding, onAnswerPicked, onScenarioStarted}
```

Again, for a list of all helper functions you can call using engine (like how playerWonEv is called in the above example), see [this list](https://jetsimon.com/open-source-election-game/doc/classes/Engine.Engine.html).


# CYOA Code Snippets

## Inserting a new question next if the player answers a specific answer

```js
function onAnswerPicked(engine, answerPicked) {

    // answerPicked is of the type AnswerModel, see the docs for all the fields it has, but we just want id for now
    const ans = answerPicked.id;

    // If the answer id is 16563 then make a question and insert it
    if (ans == 16563) {

        // You don't have to make these questions manually, you could make them in the editor and then copy the code from data.json and then delete them from the editor.
        const question = {
            "id": 16569,
            "description": "This is a question",
            "answers": [
                {
                    "id": 16570,
                    "description": "Answer one",
                    "feedback": "Feedback",
                    "answerEffects": [
                        {
                            "answerEffectType": "Global",
                            "candidateId": 131,
                            "issueId": -1,
                            "stateId": -1,
                            "amount": 0.015
                        },
                        {
                            "answerEffectType": "Global",
                            "candidateId": 132,
                            "issueId": -1,
                            "stateId": -1,
                            "amount": -0.008
                        }
                    ]
                },
                {
                    "id": 16570,
                    "description": "Answer two",
                    "feedback": "That did nothing",
                    "answerEffects": [
                    ]
                },
            ],
            "keepInPlaceIfQuestionsShuffled": true
        }

        // Tell the engine to insert this question next!
        engine.insertNewQuestionNext(question);
    }
}
```

## Theme Switch Example

```js
function onAnswerPicked(engine, answerPicked) {
    const ans = answerPicked.id;

    // If the answer picked is one of the ones with this id, do a theme switch!
    if ((ans == 4183 || ans == 16540 || ans == 16541 || ans == 16542)) {
        engine.setNewBackgroundImage("https://placecats.com/500/500");
        engine.setNewHeaderImage("https://placecats.com/500/500");

        engine.setNewPlayerCandidateImage("https://placecats.com/500/500");
        engine.setNewPlayerCandidateName("First", "Last");

        engine.setNewRunningMateImage("https://placecats.com/500/500");
        engine.setNewRunningMateName("First", "Last");

        engine.setQuote("\"What a profound quote\"");
        engine.setScenarioName("A new name?! Wow!");
    }
}
```

# Ending Code Snippets

## Checking if Player PV is in a Certain Range

```js
function createEnding(engine, results) {    
    const playerPvPercentage = engine.getPlayerPvPercentage(results); 
    const playerWonPv = engine.playerWonPv(results);

    // Player did not win, but got between 39 and 40 percent
    // The ! before playerWonPv means not. Read it as "the player did not win pv"
    if (!playerWonPv && playerPvPercentage >= 0.39 && playerPvPercentage < 0.40) {
        return {
            slides: [
                {
                    imageUrl: "https://placecats.com/210/240",
                    endingText: "<p>You really lost</p>",
                    endingHeader: "Slide 1"
                },
                {
                    imageUrl: "https://placecats.com/210/240",
                    endingText: "<p>You really?! lost</p>",
                    endingHeader: "Slide 2"
                }
            ]
        }
    }
    
    // Any loss below 39%. Note that the more specific loss of between 39 and 40 was specified was specified above. Whichever condition returns a value first will be the one that is used. So go from more specific to less specific. Think it through.
    if (!playerWonPv && playerPvPercentage < 0.39) { 
        return {
            slides: [
                {
                    imageUrl: "https://placecats.com/210/240",
                    endingText: "<p>You really lost</p>",
                    endingHeader: "Boo Hoo"
                }
            ]
        }
    }

    // If the player won with any amount
    if(playerWonPv) {
         return {
            slides: [
                {
                    imageUrl: "https://placecats.com/210/240",
                    endingText: "<p>You really won</p>",
                    endingHeader: "Woo Hoo"
                }
            ]
        }
    }

    // Fallback scenario in case anything was unaccount for, useful for debugging
    return {
        slides: [
            {
                imageUrl: "https://placecats.com/210/240",
                endingText: "<p>Error</p>",
                endingHeader: "This ending shouldn't happen"
            }
        ]
    }
}
```