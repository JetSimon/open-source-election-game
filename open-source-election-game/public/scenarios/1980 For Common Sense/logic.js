function createEnding(engine, results) {    
    const playerPvPercentage = engine.getPlayerPvPercentage(results); 
    const playerWonPv = engine.playerWonPv(results);

    // Player did not win, but got between 39 and 40 percent
    // The ! before playerWonPv means not. Read it as "the player did not win pv"
    if (!playerWonPv && playerPvPercentage >= 0.39 && playerPvPercentage < 0.40) {
        return {
            slides: [
                {
                    imageUrl: "https://i.imgur.com/ZfyH9EP.png",
                    endingText: "<p>The first thing I noticed about George McGovern was his penchant for looking to the top-right corner of the room as he thought of the word he wanted to use. Once you get to know him, you start to pick up on his little tics and mannerisms. When he's about to say something he believes to be witty or snarky, his eyebrows preemptively raise and a smile tugs against the rounded corners of his cheeks. When I met him, McGovern was not making any sort of face. His mouth sagged, but didn't frown. He was looking at me, but he wasn't seeing me. He was making a non-face. In two days time, he'd be grinning and shaking hands- campaigning- yet again, though this time not for any office.</p><p>He said nothing while waiting for me to begin the interview. He would fold his hands over his lap, look around the room for any excitement, unfold his hands to scratch at his nose, refold them again, and the cycle would continue. I did not sense impatience, but I figured it was probably time to begin.</p>",
                    endingHeader: "Vote Your Conscience"
                },
                {
                    imageUrl: "https://i.imgur.com/ZfyH9EP.png",
                    endingText: "<p>\"What is Americans for Common Sense?\" I ventured. I didn't feel the need to do any introductions. This was the main event.<br><br>\"We are an organization that seeks to meet head-on the dangerous marriage of political zealots and religious extremists who impose their beliefs on America.\" McGovern stated matter of factly, offering no more information than what he deemed necessary.<br><br>\"Why common sense?\" I countered.<br><br>\"I believe it's something sorely needed. The single-issue interest groups are distorting the conversation mak-\"<br><br>\"And how is this different from organizations like, say, NCPAC?\" I interrupted.</p>",
                    endingHeader: "Vote Your Conscience"
                },
                {
                    imageUrl: "https://i.imgur.com/ZfyH9EP.png",
                    endingText: "<p>McGovern's mouth stopped moving as soon as mine moved. When I finished, he concluded his thought by using my question, \"A group like NCPAC or Young Americans for Freedom blatantly seek to distort the conversation through misdirection, exaggeration, and narrowing discussion onto one topic where they feel confident they can win. The goal of Americans for Common Sense is to speak the truth and to give candidates an ally against these super-groups\"<br><br>\"Candidates like yourself last year?\"<br><br>A slight smile indicative of recollecting a bygone time, \"I suppose you could say that, yes.\"<br><br>\"I understand your time is focused on this organization you've founded, but the burning question, to me at least, is if 1980 was the last chance for people to vote for you?\"</p>",
                    endingHeader: "Vote Your Conscience"
                },
                {
                    imageUrl: "https://i.imgur.com/ZfyH9EP.png",
                    endingText: "<p>The question made him pause, and off went his eyes to the right-hand corner of the room, as if there was a thesaurus for him to refer to. \"We are probably ten to twelve years behind where the conservatives are. My focus at this time is on finding coordinators for every state, full-time organizers in the big cities, and to build a million person strong mailing list.\" He paused for a second, but only a second, as he loaded his zinger, \"Those are the only votes I'm looking for at this time.\"<br><br>I grinned, enjoying our rapport, \"That sounds like a non-answer.\" He offered only a shrug. \"Let me put it this way,\" I continued, \"which state is your top priority right now?\"<br><br>Up went his eyebrows and on crept the smile, \"Iowa.\"<br><br>Hank Dylan in <em>Rolling Stone</em> magazine. For Common Sense published 2/25/81.</p>",
                    endingHeader: "Vote Your Conscience"
                }
            ]
        }
    }
    
    // Any loss below 39%. Note that the more specific loss was specified above.
    if (!playerWonPv && playerPvPercentage < 0.39) { 
        return {
            slides: [
                {
                    imageUrl: "https://2.bp.blogspot.com/-xqPFt_N7f7I/UJHT7xXDqEI/AAAAAAAAASc/QD4FolM0yqo/s1600/georgeteresa.jpg",
                    endingText: "<p>The cost of politics is not measured is money spent, miles driven, or words said. No, the price is time. All hard work requires tremendous effort and you burden it because you think that because you try hard enough or believe so strongly, you are certain to win. It can be so taxing that you lie awake at night with the hateful words of others swirling in your head like raging waters. It can be so intoxicating that you neglect anything that doesn't further your goal of winning. The price of politics is self-destruction.</p><p>Eleanor was the most hurt by the campaign. Of course, you could spur a temper too, but Elanor could just never adjust to the very public stripping away of your life and soul, the concerted national effort to defame you as a murderer and traitor. It's too much. She needs you. The children need you. And you will heed their call for their father to come home. Retiring peacefully to the Great Smoky Mountains of Tennessee, you pursue a modest lifestyle of reading, lounging, and bouncing grandkids on your knee. America does not see much more McGovern, but you belong to no one but your family.</p>",
                    endingHeader: "I wasn't about to change, so they got rid of me. Okay, that's the system."
                }
            ]
        }
    }

    // Any loss >= 40%. 
    if (!playerWonPv && playerPvPercentage >= 0.40) { 
        return {
            slides: [
                {
                    imageUrl: "https://i.imgur.com/Z4KR7JE.png",
                    endingText: "<p>You've been no stranger to national embarrassment and suffocating loss, but, to your surprise, the pain is magnified by how you've narrowed the result down. Instead of a mid-low 30's wipe out, you managed to outperform expectations. This campaign was unlike any other you endured. The vitriol, the conspiracy, the hopeless-- it's certainly a new day in America. Yet, you fought to see that sun rise. Tumultuous as it was, when they record the history of this time- the end of the age of the liberal Democrats- they will chronicle your strength to continue in the face of impossible odds.</p><p>James Abdnor will go on to serve a single, largely unremarkable, term in the Senate; only to one day be replaced by a man the Rapid City Journal will call, \"the McGovern of his generation.\" You will contest higher office once more to no avail. But your service is not over. You will go on to serve in the administrations of Democratic and Republican presidents alike, continuing your lifelong struggle to end hunger. Long after you're gone, many will look at your life and surmise you to be a failure. But, in your heart, you've never failed.<p>",
                    endingHeader: "\"Abdnor won't win without a helluva fight. I haven't been in politics this long to peter out now.\""
                }
            ]
        }
    }

    // Won PV without majority
    if(playerWonPv && playerPvPercentage < 0.50) {
        return {
            slides: [
                {
                    imageUrl: "https://i.imgur.com/GIK8vLW.png",
                    endingText: "<p>They never do learn do they? You can't always count on George McGovern to win, but you'd be a fool to bet against his ability to defy the odds. The combined forces of the New Right could not unseat you; vindicated are all of your perceived weaknesses that you know to be strengths. Battle-scarred, bloody, and bruised, you emerge from the wreckage on November 5th, alive-- unlike most other Democrats.</p><p>In your fourth and final term, you will be a strident opponent of the Reagan administration at just about every avenue. The Freshman Class of 1981, boisterous and eager to finally operate the levers of power, will endure your orations on the necessity of SALT II and normalizing relations with Cuba. As one of the last survivors of a dying breed, the uptick in media appearances and requests for interviews is noticeable; Terry Dolan and NCPAC may find they like this outcome better than the alternative. Sure, they're a vote down in the Senate, but you are a juicy target for fundraising materials. The Reverend Jesse Jackson will suggest you'd make an apt Secretary of State. Of course, the Jackson administration will never come to be, but you will continue to serve as a national icon for liberalism until your passing.<p>",
                    endingHeader: "\"It wouldn't be the first time that I was that far behind and won. They always overdo the attack, and I always work pretty hard in a campaign.\""
                }
            ]
        }
    }
    
    // Won PV without majority
    if(playerWonPv && playerPvPercentage >= 0.50) {
        return {
            slides: [
                {
                    imageUrl: "https://i.imgur.com/RtimAmh.png",
                    endingText: "<p>Thirty years ago, you built the South Dakota Democratic Party out of rubble into marble; what once barely contested a third of all races state-wide is now an invigorated machine able to slay Goliath. The alliance of national conservative interest groups with all their might, men, and money could not defeat you nor could they strip you of your composure.</p><p>Emboldened by the breadth of your implausible victory, you resolve to use this final term to redouble your efforts towards completing your life's work: achieving peace between nations and vanquishing want for food. With Senator Church one of many casualties of the Reagan Revolution, you're second in line for chairmanship of the Foreign Relations Committee where you will passionately advocate for lifting economic restrictions on Cuba and for humanitarian relief in Africa. You will make your second entrance into the presidential primaries in 1988. Although Governor Dukakis will emerge the victor, only he and the Reverend Jesse Jackson place before you. You will serve with distinction in the Clinton administration as UN Ambassador, informal advisor, and liberal icon.<p>",
                    endingHeader: "The Politics of Hope"
                }
            ]
        }
    }

    // Fallback ending just in case :)
    return {
        slides: [
            {
                imageUrl: "https://i.imgur.com/RtimAmh.png",
                endingText: "This ending shouldn't be possible",
                endingHeader: "Error"
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

        engine.setQuote("\"The problem with trying to leave politics is that once it gets in your blood, it can be like a narcotic.\"");
        engine.setScenarioName("The Devil Went Down to Georgia");
    }

    // If you answer the this, then start the lawsuit sequence
    if (ans == 16563) {
        engine.setNewBackgroundImage("https://i.imgur.com/ibYjCW8.png");
        engine.setNewHeaderImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1200px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png");

        engine.setNewPlayerCandidateImage("https://i.imgur.com/nzuuxkT.png");
        engine.setNewPlayerCandidateName("", "R. Bauer");

        engine.setNewRunningMateImage("https://studentorgs.kentlaw.iit.edu/fba/wp-content/uploads/sites/7/2019/07/FBA-seal.png");
        engine.setNewRunningMateName("", "Esquire");

        engine.setScenarioName("NCPAC vs. McGovern et al.");
        engine.setQuote("\"From political intimidation and conspiracy trials to the Constitution and the Bill of Rights, come home, America!\"");

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
                    "feedback": "\"Only two politicians have ever refused to debate George McGovern--\" the full-page newspaper advertisement reads, \"Richard Nixon and Jim Abdnor.\"",
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

    // Change theme back after the Talmadge question
    if((ans == 4171 || ans == 4172 || ans == 4173 || ans == 16433 || ans == 16572 || ans == 16571 || ans == 16570 )){
        engine.setNewBackgroundImage("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxUPDw8VDw8PDw8PFQ8PDxUPDw8PFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLi0BCgoKDQ0NDg0NDysZFRkrKysrKys3LSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAGhABAQEAAwEAAAAAAAAAAAAAAAERodHwYf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A4sioAigIAAACCgIAAAAAAogKAAABgQABYApAAMAAAQABAAAARQBAAAAFARQAAAF0BAUEFAMABc+cAAAgGgAgpAQVAAAAARUUAQBQ0AAAAAAAWAAqEBoQAAARUAAARUAAAAAAAoAIKAAABoAAAqKACgYAAAAACUAAAEAgAAAAAAAAAAAuIALiAKigAACgFFQAEAAARUAAADBFABABVABAAAAFEUAAFExQAAAAEVAAAAQAAABAAAAVQAQVAFBAFAAFBBZAAAFQAAQAAAABAQAAAAAFANAAABdARQABQRUUFEAAAEAAABFQAAABAAAAUAAAABQA1FAAAVFBcEwAAARUAAARUBUAAACgAAAAAAAAAoUABQRQBQAQVAQAAABFQAAAAAAAAAAAAFEAUAAAFEUGhMARFAQVAAAEUBAAAAAAAAAAAAUAEVFAABTABc9oCiAICFAEFAQAAAAQFBAUEBQAUQAVFAAAVLSAqoAuqzooIqIAACAAKgAAAIAoYAigAAAAKIAoAGAAqsqCgAlABlaAIoARKABEAItAEVAFQAUQBqJOgBSIAKAAgCxQBQFH/9k=");
        engine.setNewHeaderImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Flag_of_South_Dakota_%281963%E2%80%931992%29.svg/2560px-Flag_of_South_Dakota_%281963%E2%80%931992%29.svg.png");

        engine.setNewPlayerCandidateImage("https://i.imgur.com/doCp5DY.png");
        engine.setNewPlayerCandidateName("", "McGovern");

        engine.setNewRunningMateImage("https://i.imgur.com/P88o71J.png");
        engine.setNewRunningMateName("", "For Senate");

        engine.setScenarioName("1980: For Common Sense");
        engine.setQuote("\"Even friends will admit McGovern commands the support of a majority of his constituents for only one day every six years.\"")
    }

    // If the answer picked is one of the ones with this id, change the candidate image
    if ((ans == 4224 || ans == 4225 || ans == 4226 || ans == 4227)) {
        engine.setNewPlayerCandidateImage("https://i.imgur.com/rvcKjPE.png");
    }
}

function onScenarioStarted(engine) {

}

export { onScenarioStarted, createEnding, onAnswerPicked }