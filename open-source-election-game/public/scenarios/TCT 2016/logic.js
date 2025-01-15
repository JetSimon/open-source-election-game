function createEnding(engine, results) {

    const playerId = engine.getPlayerCandidateController().getId();

    // I am defining some endings below. Note I have to check who the player played as first in this scenario.
    // You could also add more slides to have endings with pages

    // If you played as Trump
    if(playerId == 200) {
        if(engine.playerWonEv(results)) {
            return {
                slides: [
                    {
                        endingHeader: "Congratulations! You have won the 2016 election.",
                        imageUrl: "https://www.jetsimon.com/public/static/images/donald-trump-2016.jpg",
                        endingText: "<p>In spite of a hard-fought challenge from Hillary Clinton, you have shocked the world with your election victory.</p><p>On the political front, you have the bully pulpit in your favor, but support in Congress in uncertain. Will you govern as a more traditional conservative, or will you make a break from orthodoxy?</p>"
                    }
                ]
            }
        }
        else {
            return {
                slides: [
                    {
                        endingHeader: "Sorry! You have lost the 2016 election.",
                        imageUrl: "https://www.jetsimon.com/public/static/images/hillary-clinton-2016.jpg",
                        endingText: "<p>Many of your supporters are despondent that you have faltered to the likes of Hillary Clinton. Republicans in general believe this was a very winnable election, and are enraged that you came in to blow it. Luckily, there are any number of ways for you to take advantage of your newfound exposure. One rumor even has you founding a television station to profit from the aggrieved sensibilities of your followers. The future is in your hands.</p>"
                    }
                ]
            }
        }
    }
    // If you played as Hillary
    else if(playerId == 201) {
        if(engine.playerWonEv(results)) {
            return {
                slides: [
                    {
                        endingHeader: "Congratulations! You have won the 2016 election.",
                        imageUrl: "https://www.jetsimon.com/public/static/images/hillary-clinton-2016.jpg",
                        endingText: "<p>In spite of a hard-fought challenge from Donald Trump, you have become the first woman elected to serve as President.</p><p>On the political front, it is unclear how much of your agenda you will be able to push forward with the current Congress. Hopefully your victory has helped Democrats further down the ballot. Start packing and prepare to move back into the White House!</p>"
                    }
                ]
            }
        }
        else {
            return {
                slides: [
                    {
                        endingHeader: "Sorry! You have lost the 2016 election.",
                        imageUrl: "https://www.jetsimon.com/public/static/images/donald-trump-2016.jpg",
                        endingText: "<p>Many of your supporters are despondent that you have faltered to the likes of Donald Trump. Many in the left wing of the party are furious that you pushed their candidate aside, only to lose. Time will tell how Trump operates as President. As for you, a long and sometimes ambiguous political career seems to be coming to its end.</p>"
                    }
                ]
            }
        }
    }
    // No other endings defined, return an error
    else {
        return {
            slides: [
                {
                    endingHeader: "Error",
                    imageUrl: "https://www.jetsimon.com/public/static/images/henry-clay-1844.jpg",
                    endingText: "Bad ending"
                }
            ]
        }
    }
}

function onAnswerPicked(engine, answerPicked) {
    // This scenario has no CYOA
}

function onScenarioStarted(engine) {
    
}

export {createEnding, onAnswerPicked, onScenarioStarted}