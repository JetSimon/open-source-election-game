let testVar = 0;

function createEnding(engine, results) {

    if (engine.playerWonEv(results)) {
        return {
            slides: [
                {
                    imageUrl: "https://placehold.co/250x250",
                    endingText: "You win electorally speaking!"
                },
                {
                    imageUrl: "https://placehold.co/250x250",
                    endingText: "Slide 2!"
                },
                {
                    imageUrl: "https://placehold.co/250x250",
                    endingText: "Slide 3 :3"
                }
            ]
        }
    }

    return {
        slides: [
            {
                imageUrl: "https://placehold.co/250x250",
                endingText: "You lose electorally speaking!"
            },
            {
                imageUrl: "https://placehold.co/250x250",
                endingText: "Slide 2!"
            },
            {
                imageUrl: "https://placehold.co/250x250",
                endingText: "Slide 3 :3"
            }
        ]
    }
}

function onAnswerPicked(engine, answerPicked) {
    const ans = answerPicked.id;

    // If the answer picked is one of the ones with this id, do a theme switch!
    if ((ans == 4183 || ans == 16540 || ans == 16541 || ans == 16542)) {
        engine.setNewBackgroundImage("https://a-z-animals.com/media/2023/12/tobacco.jpg");
        engine.setNewHeaderImage("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Flag_of_the_State_of_Georgia_%281956%E2%80%932001%29.svg/1280px-Flag_of_the_State_of_Georgia_%281956%E2%80%932001%29.svg.png");

        engine.setNewPlayerCandidateImage("https://i.imgur.com/r0PNzdQ.png");
        engine.setNewPlayerCandidateName("", "Talmadge");

        engine.setNewRunningMateImage("https://i.imgur.com/cKRqhiK.jpeg");
        engine.setNewRunningMateName("", "For ?");

        /*
        nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#A52A2A" 
        nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#A9A9A9" 
        $(".container")[0].style.backgroundColor = "#FFBF00" 
        $("#game_window")[0].style.borderColor = "#FFBF00" 
        quotes = [
            "<em><q>The problem with trying to leave politics is that once it gets in your blood, it can be like a narcotic.</q></em>"
        ]
        customquote = quotes[Math.floor((Math.random() * quotes.length))
        ]
        corrr=`\n<h2>The Devil Went Down to Georgia</h2><font id='wittyquote' size='3' color='white'><em>`+customquote+`</em></font>`
        */
    }

    // If you answer the this, then start the lawsuit sequence
    if (ans == 16563) {
        engine.setNewBackgroundImage("https://i.imgur.com/ibYjCW8.png");
        engine.setNewHeaderImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1200px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png");

        engine.setNewPlayerCandidateImage("https://i.imgur.com/nzuuxkT.png");
        engine.setNewPlayerCandidateName("", "R. Bauer");

        engine.setNewRunningMateImage("https://studentorgs.kentlaw.iit.edu/fba/wp-content/uploads/sites/7/2019/07/FBA-seal.png");
        engine.setNewRunningMateName("", "Esquire");

        const question = {
            "id": 16569,
            "description": "Assembled before you are six members of the Federal Election Commission. Your clients, George McGovern and George Cunningham, stand accused in absentia of violating 2 U.S.C. §437g(a)(12) (A) and 11 C.F.R. §111.21 of the Federal Election Campaign Act of 1971 by issuing a press release making public a compliant filed against the National Conservative Political Action Committee. What argument will you offer to the Commission? ",
            "answers": [
                {
                    "id": 16570,
                    "description": "Contrary to NCPAC's contention, Senator McGovern and Mr. Cunningham could not have \"made public\" the complaint, for that complaint had already been a matter of public knowledge for three weeks. Several hours before the complaint was filed -- Senator McGovern's office issued a release supporting the Party's attempt through its complaint to address alleged illegal acts by NCPAC.",
                    "feedback": "RECOMMENDATION<br>\n1. Find no reason to believe Senator George McGovern or George Cunningham violated 2 U.S.C. §437g(a)(12)(A) or 11 C.F.R. §111.21 by issuing a May 23, 1980, press release; <br>\n2. Close the file.\n",
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
                    "id": 16571,
                    "description": "The General Counsel has recently indicated, with no further explanation, his own view that this language may require confidential treatment of a complaint prior to any \"reason to believe\" finding. See MUR 1161. Yet there is no evidence that Congress has intended to broaden the scope of §437g(a) (12) (A) beyond its original and limited reference to \"notification or investigation.\" The 1979 amendments to the Act certainly provide no such evidence. ",
                    "feedback": "RECOMMENDATION<br>\n1. Table discussion for a period exceeding no more than four calendar weeks from the date of September 17, 1980.<br>\n2. Call for direct questioning General Counsel Steel for Clarification.<br>\n3. Call for direct questioning of respondent parties.<br>\n\n",
                    "answerEffects": [
                        {
                            "answerEffectType": "Issue",
                            "candidateId": -1,
                            "issueId": 51,
                            "stateId": -1,
                            "amount": -0.2
                        }
                    ]
                },
                {
                    "id": 16572,
                    "description": "On an issue as important as this, i.e., the right of individuals and committees to speak freely on matters of public importance, the Commission is constrained to act carefully with full explanation of its intention to narrow such rights. Until it has done so, it cannot be presumed that Congress had intended to further restrict public discussion of FECA related issues.\n",
                    "feedback": "RECOMMENDATION<br>\n1. Refer to Congressional Oversight Committee.<br>\n2. Order Resp. McGovern to cease reference to the pending case in campaign material and fundraising.<br>\n3. Table discussion.",
                    "answerEffects": [
                        {
                            "answerEffectType": "Global",
                            "candidateId": 131,
                            "issueId": -1,
                            "stateId": -1,
                            "amount": -0.0125
                        }
                    ]
                }
            ],
            "keepInPlaceIfQuestionsShuffled": true
        }

        engine.insertNewQuestionNext(question);
    }

    // After you answer above about the lawsuit, add this one too
    if(ans == 16570 || ans == 16571 || ans == 16572) {
        const question = {
            "id": 641,
            "description": "James Abdnor has refused each invitation you've extended for debate, regardless of setting or moderator. Those familiar with Abdnor are hardly shocked; the Representative exhibits a certain shyness in front of large crowds and in confrontational settings, potentially owing to his speech impediment. Still, you are insistent on a debate. How will you press this matter?",
            "answers": [
                {
                    "id": 4205,
                    "description": "There's really nothing more myself or anyone else can do at this point to coax Representative Abdnor onto the debate stage. A man pursuing the office of Senator cannot be one who ducks challenges; debates allow the people of this state to hear the candidates articulate their positions, but also to see them as men and get a feel for their character. The public must be aware of his refusal, and the best way to do that is in speeches and advertisements. ",
                    "feedback": "<q>Only two politicians have ever refused to debate George McGovern--</q> the full-page newspaper advertisement reads, <q>Richard Nixon and Jim Abdnor.</q>",
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
                            "amount": -0.004
                        }
                    ]
                },
                {
                    "id": 4206,
                    "description": "Perhaps the men who sign Mr. Abdnor's checks haven't signed off on permission to debate. The oil and business lobbies have contributed to the tune of half a million dollars to his campaign, more than any other source of funding between the candidates. The flaw in the Representative's campaign is simple; he is more than willing to open himself up to donors, yet slinks away from the very people he seeks to represent. ",
                    "feedback": "Leaning heavily into the folksy character many associate with him, Abdnor tucks his hands in his pockets, smiles warmly, and offers, \"I have to say I'm a little saddened by his comments. My campaign is open to everyone; I've received an outpouring of support from all sides, and I'll appreciate that forever.\" To the press and public, he's a victim.\n\n",
                    "answerEffects": [
                        {
                            "answerEffectType": "Issue",
                            "candidateId": -1,
                            "issueId": 51,
                            "stateId": -1,
                            "amount": -0.35
                        },
                        {
                            "answerEffectType": "Global",
                            "candidateId": 132,
                            "issueId": -1,
                            "stateId": -1,
                            "amount": 0.005
                        }
                    ]
                },
                {
                    "id": 4237,
                    "description": "I am perfectly content to let Jim burry his head in the sand on this; let me say, it will hurt his campaign a heck of a lot more than mine. Still, it's not about winning or losing, it's about affording the public an opportunity to present their questions to the candidates and hear their response. If he won't come, I'm sure Mr. Peterson would be more than happy to take his place. ",
                    "feedback": "In Wall, you and Peterson engage in a largely low-tempo debate, save for a question to Peterson about his arrest at the National Mall. His anger is palpable, but does not manifest. Many wonder what happened in the course of history for a Democrat to be debating a fringe third party candidate.\n\n",
                    "answerEffects": [
                        {
                            "answerEffectType": "Issue",
                            "candidateId": -1,
                            "issueId": 49,
                            "stateId": -1,
                            "amount": -0.8
                        },
                        {
                            "answerEffectType": "Global",
                            "candidateId": 131,
                            "issueId": -1,
                            "stateId": -1,
                            "amount": -0.01
                        },
                        {
                            "answerEffectType": "Global",
                            "candidateId": 132,
                            "issueId": -1,
                            "stateId": -1,
                            "amount": 0.004
                        },
                        {
                            "answerEffectType": "Global",
                            "candidateId": 133,
                            "issueId": -1,
                            "stateId": -1,
                            "amount": 1.5
                        },
                        {
                            "answerEffectType": "State",
                            "candidateId": 133,
                            "issueId": -1,
                            "stateId": 15968,
                            "amount": 0.27
                        }
                    ]
                }
            ],
            "keepInPlaceIfQuestionsShuffled": false
        }

        engine.insertNewQuestionNext(question);
    }

    // If the answer picked is one of the ones with this id, change the candidate image
    if ((ans == 4224 || ans == 4225 || ans == 4226 || ans == 4227)) {
        engine.setNewPlayerCandidateImage("https://i.imgur.com/rvcKjPE.png");
    }
}

export { createEnding, onAnswerPicked }