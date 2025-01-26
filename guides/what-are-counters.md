# What are Counters

Counters are numeric variables that you can show to the player to make the effects of answers more clear to them. In other words, they are numbers on the screen that players can see go up and down depending on their answers.

You can add or subtract from counters depending on what the player answers. And then you check check if a counter is less than/greater than/equal to a certain number, and make CYOA based on counters!

Here is a picture:

![../counters.png](An image of counters in 1964 The Beatles)

## Where Do I Define Counters?

Counters are defined (like all other game logic) in the logic.js file.

You initialize all your counters in the onScenarioStarted function.

For example:

```js
function onScenarioStarted(engine) {
    engine.setCounter("Example", 0); // Create a counter with the label 'example'
    engine.setCounterDisplayName("Example", "Something Else!"); // If you want, you can set the display name to something else instead of just rendering as 'Example: 0'.
}
```

## How Can I Add/Subtract Counters?

You would do this in the onAnswerPicked function.

This is an example of adding to a counter if the player picks the answer with id '201'.

It also shows how to set the display name of a counter dynamically, which you many find easier than manually checking which value the counter is at every time.

```js
function onAnswerPicked(engine, answerPicked) {

    // If you want to dynamically change the name of counters (set a certain display name based on the number the counter is at, here is an example)
    const exampleCounterLookup = [
        "Example: Zero", // When counter is at 0 show this
        "Example: One", // When counter is at 1 show this
        "Example: Two", // When counter is at 2 show this
        "Example: Max" // When counter is 3 or more, show this (because we clamp the value. See below)
    ];

    const ans = answerPicked.id;

    if (ans == 201) {
        engine.addCounter("Example", 1); // Add one to the 'Example' counter
    }

    // Now we set the display name dynamically
    const clampedExampleCounterValue = Math.max(0, Math.min(3, engine.getCounter("Example"))); // Clamps the value to be between 0 and 3, because our exampleCounterLookup is 4 elements long and in programming you start counting at 0

    engine.setCounterDisplayName("Example", exampleCounterLookup[clampedExampleCounterValue]); // Set the counter display name based off of the lookup table.
}
```

If the clamping confuses you, you could also set the display name dynamically like this example. Though I personally find it a bit messier.

```js
function onAnswerPicked(engine, answerPicked) {
    const exampleCounterValue = engine.getCounter("Example");

    if(exampleCounterValue == 0) {
        engine.setCounterDisplayName("Example", "None");
    }
    else if(exampleCounterValue == 1) {
        engine.setCounterDisplayName("Example", "Some");
    }
    else if(exampleCounterValue == 2) {
        engine.setCounterDisplayName("Example", "Lots");
    }
    else {
         engine.setCounterDisplayName("Example", "Max");
    }
}
```

## How Can I Use a Counter with CYOA?

This is an example of enabling a certain question (making it show up in game) if a counter is a certain value.

Specifically, setting the question with id 453 as enabled. Note you could also *disable* questions if a counter is at a certain value (you would just write false instead of true).

```js
function onAnswerPicked(engine, answerPicked) {
    if(engine.getCounter("Example") == 5) {
        engine.setQuestionEnabledById(453, true);
    }
}
```