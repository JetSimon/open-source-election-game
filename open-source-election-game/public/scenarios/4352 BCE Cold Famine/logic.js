let keepsake = "";
let job = "";

let executed = false;
let wife = false;
let pregnant = true;

let farmersMakeGraves = false;
let leftFoodOut = false;

function handleAllVariableUpdates(engine, a) {
    if (a == 14664) {
        executed = true;
        engine.setQuestionEnabledById(14667, true);
    }
    else if (a == 14673 || a == 14674 || a == 14722) {
        wife = true;

        // You got married, your wife can get preggers!
        engine.setQuestionEnabledById(14695, true);

        // Turn on baby questions
        engine.setQuestionEnabledById(14703, true);
        engine.setQuestionEnabledById(14703, true);
    }
    else if (a == 14705 || a == 14698) {
        // You killed the baby, turn off baby questions!
        engine.setQuestionEnabledById(14703, false);
        engine.setQuestionEnabledById(14711, false);
        pregnant = false;
    }
    else if (a == 14636) {
        keepsake = "Skull Necklace";
    }
    else if (a == 14637) {
        keepsake = "Mother's Shell";
    }
    else if (a == 14638) {
        engine.setAnswerEnabledById(14721, true);
        keepsake = "Cow Sculpture"
    }
    else if (a == 14640) {
        engine.setAnswerEnabledById(14681, true);
        job = "Farmer";
    }
    else if (a == 14642) {
        job = "Shepard";
    }
    else if (a == 14641) {
        job = "Spiritual Leader"
    }
    else if (a == 14654) {
        farmersMakeGraves = true;
    }
    else if(a == 14694) {
        leftFoodOut = true;
    }
}

function makeCharacterSheetView(engine) {
    const view = `
    <h2 class="CharacterHeader">The Leader</h2>
    <div style="display: flex; flex-direction: row; margin: 8px;">
        <div style="width:33%;">
            <img class="CharacterImage" src="https://github.com/JetSimon/tct-4352BCE/blob/main/rawimages/player.png?raw=true"></img>
        </div>
        <div style="text-align:center; width:66%">
            <h3>Marital Status: ${wife ? "Married" : "Single"}</h3>
            <h3>Occupation: ${job == "" ? "None" : job}</h3>
            <h3>Inventory</h3> 
            <div class="Inventory">
                <ul>
                    ${keepsake != "" ? ("<li>" + keepsake + "</li>") : "Nothing"}
                </ul>
            </div>
        </div>
    </div>
    `
    return view;
}

function createEnding(engine, results) {    

    const pv = engine.getPlayerPvPercentage(results) * 100;
    let image = "";

    function setImage(newImage) {
        image = newImage;
    }

    function getOverall() { 
        if(pv > 50) {
            setImage("https://github.com/JetSimon/tct-4352BCE/blob/main/rawimages/dawn.png?raw=true");
            return "<p>Your tribe has made it through the brutal Winter. Those still among the living celebrate your leadership.</p>"
        }
        
        setImage("https://github.com/JetSimon/tct-4352BCE/blob/main/rawimages/chaos.png?raw=true")
        return "<p>Chaos has reigned supreme. Unfortunately you did not survive the Winter. Your people are lost to the time.</p>";
    }

    function getLeadership() {
        let leadership = ""
        if(pv > 85) {
            leadership = "You are renowned by your community. A leader like you only comes along once a millenia. Statues are built in your honour and fables are told of this Winter."
        }
        else if(pv > 80) {
            leadership = "You were an invaluable asset during such a harsh Winter. Your legacy echoes through time. In the years to come linguists will disover that the word in many languages for Leader stems from your name."
        }
        else if(pv > 65) {
            leadership = "Your leadership skills were useful during such a tough Winter. Although you didn't always make the right choices, you held it together enough to call yourself a survivor."
        }
        else if(pv > 50) {
            leadership = "Under your guidence, your people were able to barely survive the Winter. Hopefully next time you will be more prepared."
        }
        else {
            leadership = "Your leadership skills were not enough. You are not a true leader."
        }
        return "<p>" + leadership + "<p>";
    }

    function getFamily() {
        let family = "";

        if(wife && pregnant) {
            if(pv >= 75) {
                family = "In the years after the famine, you were able to raise a small family. Your ancestors had influence for years to come and tales of their deeds have been passed down in some form to the modern day."
            }
            else {
                family = "You had a small family in the years following the famine. You lived a good life surrounded by those you love."
            }
        }
        else if(wife) {
            family = "You and wife spent the rest of your days together. Whether you were happy or not is up to you.";
        }
        else {
            family = "You died alone. Unmarried and with no ancestors to carry on your bloodline. Hopefully you found other ways to leave your mark."
        }

        return "<p>" + family + "<p>";
    }

    function getCulturalInfluence() {
        if(pv < 50) {
            return "<p>The history of your people is forgotten. No evidence of you was left behind. It is like you never existed.</p>";
        }

        let influence = ""

        if(pv > 70) {
            influence += "<p>The way your people lived had a profound effect on many cultures around the world.</p>"
        } else {
            influence += "<p>Your people and culture spread out over time. Until it got harder and harder to trace exactly where and who you used to be. Though in the late 1800s a group of researchers managed to use linguistics to make some guesses.<p>"
        }
    
        if(farmersMakeGraves) {
            if(pv > 70) {
                influence += "<p>After your encouragment (or lack of discouragement), farmers continued to decorate their ancestors graves with copper. In fact, the practice is still practiced in the modern era, though no one knows where it originated. Except you.</p>"
            } else {
                influence += "<p>After your encouragement, farmers continued to decorate their ancestors graves with copper. In the 20th century archaeologists uncovered the ruins of your settlement and found evidence that some graves were covered in copper, while others were not. No one knows why.</p>"
            }
        }

        if(leftFoodOut) {
            influence += "<p>The practice of leaving food for ancestral spirits";
            if(pv >= 75) {
                influence += " caught on in the years after the famine. It is said if one leaves food out once a year at Winter, next year's harvest will be plentiful.</p>"
            }
            else {
                influence += " never really caught on. It was the start of a decline in belief in spirits. Until one day they were nothing more than just wivestales.</p>"
            }
        }

        return influence;
    }

    const slideText = getOverall() + getLeadership() + getFamily() + getCulturalInfluence();
    return {
        slides : [
            {
                endingHeader: "The End",
                imageUrl: image,
                endingText: slideText
            }
        ]
    }
}

function onAnswerPicked(engine, answerPicked) {
    const a = answerPicked.id;
    handleAllVariableUpdates(engine, a);

    if (a == 14721) {
        // Would unlock gift
    } else if (a == 14681) {
        // Would unlock green thumb
    }

    const q = engine.getCurrentQuestion().id;

    if (q == 14683) {
        // change theme to winter

        try {
            if(document != null) {
                document.head.innerHTML += "<style>.Map {background-color:white!important;}</style>";
            }
        }
        catch(e) {
            console.warn("Document was not defined");
        }
        
        engine.setNewBackgroundImage("https://github.com/JetSimon/tct-4352BCE/blob/main/rawimages/winter.jpeg?raw=true");
        engine.scenarioController.theme.primaryGameWindowColor = "#38a2bc";
        engine.scenarioController.theme.secondaryGameWindowColor = "rgb(34, 112, 132)";
        engine.scenarioController.theme.bottomBannerBackgroundColor = "rgb(77, 86, 100)";

        engine.setNewMusic([
            {
            "url": "https://github.com/JetSimon/tct-4352BCE/raw/main/rawimages/winter.mp3",
            "displayName": "Winter",
            "imageUrl": "https://i.imgur.com/gHdr3f6.jpeg"
            }
        ])
    }

}

function onScenarioStarted(engine) {

    engine.setNewMusic([
        {
            "url": "https://github.com/JetSimon/tct-4352BCE/raw/main/rawimages/normal.mp3",
            "displayName": "Fall",
            "imageUrl": "https://i.imgur.com/pDzKx1u.png"
        }
    ]);

    engine.addCustomView("Character", makeCharacterSheetView);

    engine.setAnswerEnabledById(14690, engine.runningMateId == 1003);
    engine.setAnswerEnabledById(14720, engine.runningMateId == 1003);
}

export { createEnding, onAnswerPicked, onScenarioStarted };

