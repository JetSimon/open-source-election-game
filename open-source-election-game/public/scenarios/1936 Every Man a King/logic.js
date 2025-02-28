function createEnding(engine, results) {

    const playerId = engine.getPlayerCandidateController().getId();

    // I am defining some endings below. Note I have to check who the player played as first in this scenario.
    // You could also add more slides to have endings with pages

    // If you played as Landon
    if(playerId == 200) {
        if(engine.playerWonEv(results)) {
            return {
                slides: [
                    {
                        endingHeader: "Wow, Alfred! You have won the 1936 election.",
                        imageUrl: "https://itsastronomical.com/assets/1936b/landon.png",
                        endingText: "<p>It seemed all but impossible for victory until Huey Long was given the Democratic nomination. Whatever opening you found from that, it has clearly worked. Regardless of his clear scandals, you should be proud of what you did. Huey Long refuses to concede, and the Democratic machinery is absolutely livid at him for screwing them over, to lose the White House to some newcomer Governor from Kansas.</p><p>On the governing front, it seems that Democrats still have control of both chambers, so you’ll be working with a divided government. Regardless, sit back and relax, knowing that you’ve maintained Republican dominance! Congratulations, President-Elect Landon!</p>"
                    }
                ]
            }
        }
        if(engine.playerEvAtLeast(results) < 266) {
            return {
                slides: [
                    {
                        endingHeader: "Sorry! You have lost the 1936 election.",
                        imageUrl: "https://itsastronomical.com/assets/1936b/long.png",
                        endingText: "<p>Considering how unpopular the Republican Party is nationwide, this isn’t the biggest surprise. Still, most Republicans felt that there was a clear opening with Huey Long's many, many scandals - and yet you seemed to falter, despite the opportunity that arose.</p><p>The Kingfish, Huey Long, will be able to pass his legislation and may very well cause trouble. This is probably the end of your political career, depending on how big the margin between you and Huey Long was. If the race was close, perhaps you could still influence the Republican Party. You could also always go back to run for Governor of Kansas.</p>"
                    }
                ]
            }
        }
        else {
            return {
                slides: [
                    {
                        endingHeader: "Wow! No candidate holds a majority of electoral votes!",
                        imageUrl: "https://i.imgur.com/BboBj0T.png",
                        endingText: "<p>I assume you messed around with the code since there's an odd number of electors and you can’t split the Southern Electors in a Alf Landon playthrough.</p><p>Anyway, this is quite interesting. It seems no candidate has achieved a majority in the Electoral College. This was rather unlikely, but it’s still disappointing. It seems Congress will instead choose to give Long's running mate, Burton Wheeler a chance to lead. This is disappointing, but it seems you may have a shot at winning in 1940 if you can keep your influence in the Party Machinery.</p>"
                    }
                ]
            }
        }
    }
    // If you played as Long
    else if(playerId == 201) {
        // Death Candidates
        if(engine.playerWonEv(results)) {
            return {
                slides: [
                    {
                        endingHeader: "Congratulations, Kingfish! You have won the 1936 election.",
                        imageUrl: "https://itsastronomical.com/assets/1936b/long.png",
                        endingText: "<p>Wow! Things really took a turn for the worse, but somehow, you managed to pull it off. It seems despite your blatantly corrupt scandals, Americans weren't able to trust another Republican in the White House. This is moreso a statement on the economy, rather than your own personal popularity.</p><p>Your term will likely begin with investigations, and impeachment is certainly not out of the question. It's clear that Wheeler will remain a more popular figure compared to yourself.</p>"
                    }
                ]
            }
        }
        if(engine.playerEvAtLeast(results) < 266) {
            return {
                slides: [
                    {
                        endingHeader: "Sorry! You have lost the 1936 election.",
                        imageUrl: "https://itsastronomical.com/assets/1936b/landon.png",
                        endingText: "<p>Given the scandals you got wrapped up in, absolutely no one is particularly shocked, but this still is a major setback for the Democrats. You likely will have to resign from your Senate seat when the investigations wrap up, and your party influence is diminished. Seems the Kingfish's days are numbered. What once seemed like inevitable has fallen out of sight.</p><p>Burton Wheeler is expected to maintain his influence within the party, and it's expected he will run in 1940. Kudos to him for not getting wrapped up within your scandals. Perhaps he will speak somewhat good of you within your memoirs, but that's really the best-case scenario for you.</p>"
                    }
                ]
            }
        }
        else {
            return {
                slides: [
                    {
                        endingHeader: "Wow! No candidate holds a majority of electoral votes!",
                        imageUrl: "https://i.imgur.com/BboBj0T.png",
                        endingText: "<p>This is quite interesting. It seems no candidate has achieved a majority in the Electoral College. This was quite unlikely, but you’re still in shock. It seems Congress will instead choose to give your running mate, Burton Wheeler a chance to lead. You will likely resign due to the mounting invesigations. Best of luck on that front.</p>"
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
                    endingHeader: "Wow! No candidate holds a majority of electoral votes!",
                    imageUrl: "https://i.imgur.com/BboBj0T.png",
                    endingText: "<p>This is quite interesting. It seems no candidate has achieved a majority in the Electoral College. This was quite unlikely, but you’re still in shock. It seems Congress will instead choose to give your running mate, Burton Wheeler a chance to lead. You will likely resign due to the mounting invesigations. Best of luck on that front.</p>"
                }
            ]
        }
    }
}

var wheeler = false;
var wallace = false;

function onAnswerPicked(engine, answerPicked) {
    // This scenario has mild CYOA
    const ans = answerPicked.id;
    const playerId = engine.getPlayerCandidateController().getId();

    if (ans == 5002 && playerId == 201) {
        engine.setNewPlayerCandidateImage("https://itsastronomical.com/assets/1936b/wallace.png");
        engine.setNewPlayerCandidateName("Henry", "Wallace");

        engine.setNewRunningMateImage("https://itsastronomical.com/assets/1936b/wheeler.png");
        engine.setNewRunningMateName("Burton K.", "Wheeler");
        wallace = true;
        engine.currentQuestionIndex = 25

    }

    if (ans == 5065 && playerId == 201) {
        wheeler = true;
        engine.setNewPlayerCandidateImage("https://itsastronomical.com/assets/1936b/wheeler.png");
        engine.setNewPlayerCandidateName("Burton K.", "Wheeler");

        engine.setNewRunningMateImage("https://itsastronomical.com/assets/1936b/wallace.png");
        engine.setNewRunningMateName("Henry", "Wallace");

        engine.currentQuestionIndex = 25
    }
}

function onScenarioStarted(engine) {
    
}

export {createEnding, onAnswerPicked, onScenarioStarted}