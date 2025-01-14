function createEnding(engine, results) {

    if(engine.getCounter("Walrus") >= 4) {
        return {
            slides : [
                {
                    endingHeader: "I AM THE EGGMAN",
                    imageUrl: "https://jetsimon.com/cts-media/public/1964Beatles_The_BeatlesEpstein_0.png",
                    endingText: "<p>THE WALRUS CULT LIVES FOREVER. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. I AM THE EGGMAN. YOU ARE THE WALRUS!</p>"
                }
            ]
        }
    }

    const pv = engine.getPlayerPvPercentage(results);

    if(pv >= 0.95) {
        return {
            slides: [
                {
                    endingHeader: "Beatleland",
                    imageUrl: "https://jetsimon.com/cts-media/public/1964Beatles_The_BeatlesEpstein_1.png",
                    endingText: "<p>The Beatles have won America. Not just musically speaking, but in every way possible. Children play only with Beatles toys. Instead of worshipping gods people instead worship the Holy Four. Praise be John, George, Paul, and Ringo.</p>"
                }
            ]
        }
    }
    else if(pv >= 0.70) {
         return {
            slides: [
                {
                    endingHeader: "Beatlemania",
                    imageUrl: "https://jetsimon.com/cts-media/public/1964Beatles_init_3.png",
                    endingText: "<p>The Beatles have been crowned the kings of The British Invasion. They've made it to the toppermost of the poppermost! With amazing record sales they retire from touring in the mid 60s and produce many classic albums before disbanding in the early 70s.</p>"
                }
            ]
        }
    }
    else if(pv >= 0.50) {
        return {
            slides: [
                {
                    endingHeader: "Toss Up",
                    imageUrl: "https://jetsimon.com/cts-media/public/1964Beatles_The_BeatlesEpstein_2.png",
                    endingText: "Historians will forever debate who the kings of The British Invasion were. It is very unclear who truly won, was it The Rolling Stones with their British take on the blues? Or was it teeny boppers The Beatles? Who, after refusing to tour in 1966 never made another album. As they could not support themselves from record sales alone."
                }
            ]
        }
    }
    else if(pv >= 0.35) {
        return {
            slides: [
                {
                    endingHeader: "Rolling Stoned and Beatled till I'm blind",
                    imageUrl: "https://jetsimon.com/cts-media/public/1964Beatles_init_4.png",
                    endingText: "<p>Although many historians may disagree, clearly The Rolling Stones are the biggest band of the 60s British Invasion. The Beatles had a few hits early on, but they were no match for the Stones. By the time The Rolling Stones really hit their stride, The Beatles' relationships had soured before a bitter break up in 1967.</p>"
                }
            ]
        }
    }
    else if(pv >= 0.10) {
        return {
            slides: [
                {
                    endingHeader: "I'm a Loser",
                    imageUrl: "https://jetsimon.com/cts-media/public/1964Beatles_init_4.png",
                    endingText: "<p>The Beatles were no match for The Rolling Stones. How could a few timid lads from Liverpool ever compete with the star power of Mick Jagger and Keith Richards? The Beatles' follow up album 'Help!' never made it very far up the charts. By the end of the decade they were almost completely forgotten.</p>"
                }
            ]
        }
    }
    else {
        return {
            slides: [
                {
                    endingHeader: "We Were Four Guys...That's All",
                    imageUrl: "https://jetsimon.com/cts-media/public/1964Beatles_The_BeatlesEpstein_4.png",
                    endingText: "<p>The Beatles were somehow completely forgotten as soon as they leave America. When they got back to the UK they spent the rest of their days doing menial day jobs. You may say they're dreamers, but they always wondered \"what if\".</p>"
                }
            ]
        }
    }
}

function onAnswerPicked(engine, answerPicked) {

    const walrusCounterLookup = [
        "Walrus Level: Just Four Guys",
        "Walrus Level: Sitting in an English Garden",
        "Walrus Level: Waiting For the Sun",
        "Walrus Level: Eggmen",
        "Walrus Level: Walrus"
    ];

    const ans = answerPicked.id;

    // If the player picked a Walrus answer, increase walrus level!
    if (ans == 3737 || ans == 3785 || ans == 3782 || ans == 3775 || ans == 3787) {
        engine.addCounter("Walrus", 1);
    }

    // If the player can maintain walrus balance then increase their global multiplier every turn!
    if(engine.getCounter("Walrus") == 3) {
        engine.addCandidateGlobalMultiplier(105, 1.5)
    }
    // If the player cannot maintain walrus balance then decrease their global multiplier every turn!
    else if(engine.getCounter("Walrus") > 3) {
        engine.addCandidateGlobalMultiplier(105, -0.5)
    }

    const clampedWalrusLevel = Math.max(0, Math.min(4, engine.getCounter("Walrus")))
    engine.setCounterDisplayName("Walrus", walrusCounterLookup[clampedWalrusLevel])
}

function onScenarioStarted(engine) {
    engine.setCounter("Walrus", 0);
    engine.setCounterDisplayName("Walrus", "Walrus Level: Just Four Guys");
}

export {createEnding, onAnswerPicked, onScenarioStarted}