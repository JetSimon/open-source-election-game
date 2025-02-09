function createEnding(engine, results) {

    const playerId = engine.getPlayerCandidateController().getId();

    // I am defining some endings below. Note I have to check who the player played as first in this scenario.
    // You could also add more slides to have endings with pages

    // If you played as Clay
    if(playerId == 132) {
        if(engine.playerWonEv(results)) {
            return {
                slides: [
                    {
                        endingHeader: "Congratulations! You have won the 1844 Election",
                        imageUrl: "https://www.jetsimon.com/public/static/images/henry-clay-1844.jpg",
                        endingText: "<p>Your first order of business will be to block the annexation of Texas, and hopefully to end the further discussion of this issue. Then you can concentrate on undoing the damage that Andrew Jackson and his followers have inflicted on the American System. Unfortunately, it appears that you will have to deal with a Democratic majority in Congress. Best wishes for these next four years.</p>"
                    }
                ]
            }
        }
        else {
            return {
                slides: [
                    {
                        endingHeader: "Sorry. You have lost the 1844 Election",
                        imageUrl: "https://www.jetsimon.com/public/static/images/james-k-polk-1844.jpg",
                        endingText: "<p>President Polk is sure to go through with the annexation of Texas. You can only hope it doesn't lead to war. Even if the U.S. is successful in the short-term, the acquisition of such territory is sure to reopen the slavery question in a way which may hurt the Whigs. As for your own fortunes, you have likely missed your last chance to become President. How will your legacy be remembered?</p>"
                    }
                ]
            }
        }
    }
    // If you played as Polk
    else if(playerId == 131) {
        // Running mate is George Dallas
        if (engine.playerWonEv(results) && engine.runningMateId == 135) {
            return {
                slides: [
                    {
                        endingHeader: "Congratulations! You and Dallas have won the 1844 Election",
                        imageUrl: "https://www.jetsimon.com/public/static/images/james-k-polk-1844.jpg",
                        endingText: "<p>Your first order of business will be to confirm the annexation of Texas. More generally you can fight for the expansion of the United States in line with the ideals of \"Manifest Destiny\". With a Democratic majority in Congress, you will have wide latitude to implement your program, after four years of Tyler's paralysis. Best wishes for your term in office.</p>"
                    }
                ]
            }
        }
        else if(engine.playerWonEv(results)) {
            return {
                slides: [
                    {
                        endingHeader: "Congratulations! You have won the 1844 Election",
                        imageUrl: "https://www.jetsimon.com/public/static/images/james-k-polk-1844.jpg",
                        endingText: "<p>Your first order of business will be to confirm the annexation of Texas. More generally you can fight for the expansion of the United States in line with the ideals of \"Manifest Destiny\". With a Democratic majority in Congress, you will have wide latitude to implement your program, after four years of Tyler's paralysis. Best wishes for your term in office.</p>"
                    }
                ]
            }
        }
        else {
            return {
                slides: [
                    {
                        endingHeader: "Sorry. You have lost the 1844 Election",
                        imageUrl: "https://www.jetsimon.com/public/static/images/james-k-polk-1844.jpghttps://www.jetsimon.com/public/static/images/henry-clay-1844.jpg",
                        endingText: "<p>President Clay is sure to obstruct the annexation of Texas. Hopefully a new President can bring this to a better conclusion in four years. In the meantime, your voice may hold some influence, in an advisory capacity, with the Democratic majority in Congress. It is unlikely, however, that you will be nominated for President over the likes of Lewis Cass, James Buchanan, or others in 1848.</p>"
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