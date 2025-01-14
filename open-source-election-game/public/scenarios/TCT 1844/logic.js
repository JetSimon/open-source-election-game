function createEnding(engine, results) {
    if(engine.playerWonEv(results)) {
        return {
            slides: [
                {
                    endingHeader: "Congratulations! You have won the 1844 Election",
                    imageUrl: "https://www.jetsimon.com/public/static/images/james-k-polk-1844.jpg",
                    endingText: "<p>Your first order of business will be to block the annexation of Texas, and hopefully to end the further discussion of this issue. Then you can concentrate on undoing the damage that Andrew Jackson and his followers have inflicted on the American System. Unfortunately, it appears that you will have to deal with a Democratic majority in Congress. Best wishes for these next four years.</p>"
                }
            ]
        }
    }
    
    return {
        slides: [
            {
                endingHeader: "Sorry. You have lost the 1844 Election",
                imageUrl: "https://www.jetsimon.com/public/static/images/henry-clay-1844.jpg",
                endingText: "<p>President Polk is sure to go through with the annexation of Texas. You can only hope it doesn't lead to war. Even if the U.S. is successful in the short-term, the acquisition of such territory is sure to reopen the slavery question in a way which may hurt the Whigs. As for your own fortunes, you have likely missed your last chance to become President. How will your legacy be remembered?</p>"
            }
        ]
    }
}

function onAnswerPicked(engine, answerPicked) {
    // This scenario has no CYOA
}

function onScenarioStarted(engine) {
    
}

export {createEnding, onAnswerPicked, onScenarioStarted}