import ScenarioModel from "./oseg/engine/models/ScenarioModel";

const data : ScenarioModel = 
    {
        "candidates": [
            {
                "id": 21,
                "firstName": "Lewis",
                "lastName": "Cass",
                "party": "Democrat",
                "homeState": "Michigan",
                "color": "#0671B0",
                "runningMate": false,
                "isPlayable": false,
                "issueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.7,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.55,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.5,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0.5,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.5,
                        "weight": 1
                    }
                ],
                "description": "<p>Stephen Douglas, thanks to a Democratic schism, has little hope of winning the election outright. His path to victory involves throwing the election the House, and finishing in the top three in the electoral vote count. In this case, he could win or at least deny the Republicans a victory.</p><p>Douglas has been a proponent of 'popular sovereignty', but this compromise has lost its luster in North and South alike. If he is to deny Lincoln a majority, he must carry some Northern states.</p>",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Lewis_Cass_circa_1855.jpg",
                "runningMateIds": [],
                "startingGlobalMultiplier": 1
            },
            {
                "id": 20,
                "firstName": "Henry",
                "lastName": "Clay",
                "party": "Whig",
                "homeState": "Kentucky",
                "color": "#f0c862",
                "runningMate": false,
                "isPlayable": true,
                "issueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.6,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.5,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.5,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.15,
                        "weight": 1
                    }
                ],
                "description": "<p>In his fifth bid for the presidency and third nomination by a political party, Clay had not initially intended to enter the 1848 race; the brutish conduct and opportunism expressed by runner up Zachary Taylor compelled him to give the presidency a final shot. He holds great sway in the Whig Party, but his age and numerous failed runs have greatly damaged his political capital with the public.</p><p>Whig and Democratic pundits alike agree that Clay’s nomination likely means a brutal loss for the Whigs, unless he can find a way to excite the Union with his antiquated ideals or if some rift in the Democratic Party occurs - a prospect that may not be too out of the question.</p>",
                "imageUrl": "https://i.imgur.com/iW9k4ym.png",
                "runningMateIds": [45, 48, 47],
                "startingGlobalMultiplier": 1
            },
            {
                "id": 70,
                "firstName": "John C.",
                "lastName": "Breckinridge",
                "party": "Southern Democrat",
                "homeState": "Kentucky",
                "color": "#FFFF00",
                "runningMate": false,
                "isPlayable": false,
                "issueScores": [],
                "description": "<p>John C. Breckinridge is the Southern answer to Stephen Douglas as Democrat nominee. Like Douglas, Breckinridge has little chance of winning the election outright. He does have a good chance of winning all or most of the Southern states, though.</p><p>As an ardent pro-slavery candidate (a \"Fire-Eater\"), it is Breckenridge's job to defend the <em>Dred Scott</em> decision and represent the slaveholding interests in any House negotiations that would ensue after a deadlocked Electoral College.</p>",
                "imageUrl": "/static/images/john-c-breckenridge-1860.jpg",
                "runningMateIds": [],
                "startingGlobalMultiplier": 1
            },
            {
                "id": 22,
                "firstName": "Martin",
                "lastName": "Van Buren",
                "party": "Democratic",
                "homeState": "New York",
                "color": "#00C100",
                "runningMate": false,
                "isPlayable": false,
                "issueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.75,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.7,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.6,
                        "weight": 1
                    }
                ],
                "description": "<p>John Bell is a former Whig who has no stated position on the slavery issue, in spite of himself being a slaveholder. Bell's only position is to fight for the preservation of the Union under any circumstance. The vagueness of this stance is both an asset and a liability.</p><p>Bell's stronghold is the border states. His goal is to be another voice at the table, should Lincoln fail to win the Electoral College, and broker a compromise that would prevent the secession of any Southern states.</p>",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Martin_Van_Buren-_Eighth_President_of_the_United_States_%284359942264%29.jpg/640px-Martin_Van_Buren-_Eighth_President_of_the_United_States_%284359942264%29.jpg",
                "runningMateIds": [],
                "startingGlobalMultiplier": 1
            },
            {
                "id": 45,
                "firstName": "Millard",
                "lastName": "Fillmore",
                "party": "Whig",
                "homeState": "New York",
                "color": "#FF0000",
                "runningMate": true,
                "isPlayable": false,
                "issueScores": [],
                "description": "<p>Fillmore was the favorite at the convention and is a resident New Yorker - a key state in any election. Importantly, Fillmore has been a moderate on the slavery issue, which is especially contentious this election cycle, and generally aligns with you on domestic policy besides. Although Fillmore did not actually back you at the convention and is less than enthusiastic about your prospects for victory, his presence on the ticket would certainly do you some good in the North.</p>",
                "imageUrl": "https://i.imgur.com/eepT77p.png",
                "runningMateIds": [],
                "startingGlobalMultiplier": 1
            },
            {
                "id": 72,
                "firstName": "Herschel",
                "lastName": "Johnson",
                "party": "Democrat",
                "homeState": "Georgia",
                "color": "#0000FF",
                "runningMate": true,
                "isPlayable": false,
                "issueScores": [],
                "description": "<p>Herschel Johnson is a former Governor of Georgia with a stated opposition to the Fire-Eaters and talk of secession. He is one of the last leading Democrats of the South to have not bolted to the Southern Democrat splinter party. Unfortunately, it is not very likely that Johnson's presence will help Douglas compete with Breckenridge or Bell in the South.</p>",
                "imageUrl": "/static/images/herschel-johnson-1860.jpg",
                "runningMateIds": [],
                "startingGlobalMultiplier": 1
            },
            {
                "id": 73,
                "firstName": "Joseph",
                "lastName": "Lane",
                "party": "Southern Democrat",
                "homeState": "Oregon",
                "color": "#FFFF00",
                "runningMate": true,
                "isPlayable": false,
                "issueScores": [],
                "description": "<p>Joseph Lane is the first Governor of Oregon and a supporter of slavery, in spite of that state's free-soil status. His original home state is North Carolina. He agrees with Breckinridge on all major issues, and gives him a chance to pick up a few electoral votes in a place very distant from the Deep South.</p>",
                "imageUrl": "/static/images/joseph-lane-1860.jpg",
                "runningMateIds": [],
                "startingGlobalMultiplier": 1
            },
            {
                "id": 76,
                "firstName": "Edward",
                "lastName": "Everett",
                "party": "Constitutional Union",
                "homeState": "Massachusetts",
                "color": "#00C100",
                "runningMate": true,
                "isPlayable": false,
                "issueScores": [],
                "description": "<p>Edward Everett is nearing the end of an illustrious political career that includes time served in the House, Senate, as Governor of Massachusetts, Secretary of State, and as President of Harvard. Long known as a conservative, Everett hopes to provide regional balance to the Constitutional Union ticket, and to have the same moderating effect on northern abolitionists that Bell hopes to have on southern fire-eaters.</p>",
                "imageUrl": "/static/images/edward-everett-1860.jpg",
                "runningMateIds": [],
                "startingGlobalMultiplier": 1
            },
            {
                "id": 47,
                "firstName": "Abbott",
                "lastName": "Lawrence",
                "party": "Whig",
                "homeState": "Massachusetts",
                "color": "#FF0000",
                "runningMate": true,
                "isPlayable": false,
                "issueScores": [],
                "description": "<p>Abbott Lawrence is a fair bit more ideologically aligned with Clayite policies like internal improvements than others, being a vocal supporter of railroad construction. Out of all the vice-presidential candidates, he's surely the happiest to work with you in 1848. Additionally, despite being a Massachusetts native, Lawrence is dubbed a 'Cotton Whig' for his heavy moderation on slavery, which could help marginally in the South. On the other hand, though, Lawrence is quite well off and would do little to help shake Clay’s well-known reputation as a career politician.<p>",
                "imageUrl": "https://i.imgur.com/YT4GP6p.png",
                "runningMateIds": [],
                "startingGlobalMultiplier": 1
            },
            {
                "id": 48,
                "firstName": "Thomas",
                "lastName": "Ewing",
                "party": "Whig",
                "homeState": "Ohio",
                "color": "#FF0000",
                "runningMate": true,
                "isPlayable": false,
                "issueScores": [],
                "description": "<p>Ewing is a diehard Whig who served under the short-lived Harrison administration. Importantly, he resigned upon the maverick Tyler's repeal of the Banking Act, making him both an experienced pick and well liked by the party. Ewing carries little baggage other than his fondness for Catholicism, despite his official birth as a Presbyterian - unfortunately for him, rumors of a secret Catholic president do not sit well for many Southern and Whig voters. Your advanced age will only heighten those worries. His selection would certainly lead to the religion issue becoming another salient against the ticket.</p>",
                "imageUrl": "https://i.imgur.com/8OfOXVT.png",
                "runningMateIds": [],
                "startingGlobalMultiplier": 1
            },
            {
                "id": 129,
                "firstName": "James",
                "lastName": "Guthrie",
                "party": "Democrat",
                "homeState": "Kentucky",
                "color": "#0000FF",
                "runningMate": true,
                "isPlayable": false,
                "issueScores": [],
                "description": "<p>James Guthrie served as Secretary of the Treasury under Franklin Pierce, and paid off most of the federal debt during that term. He is a slaveholder and states' rights advocate, but a bitter opponent of secession. His selection would allow Douglas to run with a Southerner who is still somewhat connected to the national political scene. Guthrie has also long advocated internal improvements and owns a railroad, which could attract some limited crossover support from former Whigs.</p>",
                "imageUrl": "/static/images/james-guthrie-1860.jpg",
                "runningMateIds": [],
                "startingGlobalMultiplier": 1
            },
            {
                "id": 130,
                "firstName": "Horatio",
                "lastName": "Seymour",
                "party": "Democrat",
                "homeState": "New York",
                "color": "#0000FF",
                "runningMate": true,
                "isPlayable": false,
                "issueScores": [],
                "description": "<p>Horatio Seymour has served as Governor of New York and is influential in that state's politics. By selecting him, Douglas would be running with an all-northern ticket, but he could gain valuable votes in the nation's largest state. Seymour has been associated with the \"Hunker\" faction of New York Democrats, who favor internal improvements and oppose agitation on the slavery issue. It would take some cajoling and possibly more for Seymour to accept the nomination.</p>",
                "imageUrl": "/static/images/horatio-seymour-1860.jpg",
                "runningMateIds": [],
                "startingGlobalMultiplier": 1
            }
        ],
        "states": [
            {
                "id": 52,
                "name": "Alabama",
                "abbr": "AL",
                "electoralVotes": 9,
                "popularVotes": 61659,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.75,
                        "weight": 1.2
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.75,
                        "weight": 1.2
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0,
                        "weight": 0.8
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.6,
                        "weight": 0.8
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.5,
                        "weight": 0.7
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.8932
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0
                    }
                ]
            },
            {
                "id": 53,
                "name": "Arkansas",
                "abbr": "AR",
                "electoralVotes": 3,
                "popularVotes": 16888,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.66,
                        "weight": 1.2
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.66,
                        "weight": 1.2
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0,
                        "weight": 0.8
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.4,
                        "weight": 0.8
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.5,
                        "weight": 0.7
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.4831
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0
                    }
                ]
            },
            {
                "id": 54,
                "name": "California",
                "abbr": "CA",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.3,
                        "weight": 0.8
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.1,
                        "weight": 0.8
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.3,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.8677
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.025
                    }
                ]
            },
            {
                "id": 55,
                "name": "Colorado",
                "abbr": "CO",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.8,
                        "weight": 1.4
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.4,
                        "weight": 0.6
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.1,
                        "weight": 0.5
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.1,
                        "weight": 0.5
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.5,
                        "weight": 0.5
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.2329
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.02
                    }
                ]
            },
            {
                "id": 56,
                "name": "Connecticut",
                "abbr": "CT",
                "electoralVotes": 6,
                "popularVotes": 62398,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.6,
                        "weight": 1.2
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.6,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.5,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.5,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.2,
                        "weight": 0.7
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 1.0233
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.3432
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.04
                    }
                ]
            },
            {
                "id": 57,
                "name": "Delaware",
                "abbr": "DE",
                "electoralVotes": 3,
                "popularVotes": 12432,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.5,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 1.0407
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.033
                    }
                ]
            },
            {
                "id": 58,
                "name": "Florida",
                "abbr": "FL",
                "electoralVotes": 3,
                "popularVotes": 7203,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.55,
                        "weight": 1.2
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.6,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.2,
                        "weight": 0.6
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.4,
                        "weight": 0.6
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.4,
                        "weight": 0.6
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.4662
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0
                    }
                ]
            },
            {
                "id": 59,
                "name": "Georgia",
                "abbr": "GA",
                "electoralVotes": 10,
                "popularVotes": 92317,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.66,
                        "weight": 1.2
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.66,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.2,
                        "weight": 0.6
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.4,
                        "weight": 0.6
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.6,
                        "weight": 0.6
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.9978
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0
                    }
                ]
            },
            {
                "id": 60,
                "name": "Idaho",
                "abbr": "ID",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.7,
                        "weight": 1.4
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.4,
                        "weight": 0.6
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.4,
                        "weight": 0.6
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.5,
                        "weight": 0.6
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.3398
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.01
                    }
                ]
            },
            {
                "id": 61,
                "name": "Illinois",
                "abbr": "IL",
                "electoralVotes": 9,
                "popularVotes": 124596,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.1,
                        "weight": 0.8
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.5,
                        "weight": 1.1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0.1,
                        "weight": 1.2
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.6,
                        "weight": 1.1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.751123
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.534
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.01
                    }
                ]
            },
            {
                "id": 62,
                "name": "Indiana",
                "abbr": "IN",
                "electoralVotes": 12,
                "popularVotes": 152752,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.1,
                        "weight": 0.8
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.25,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.05,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.4,
                        "weight": 0.7
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.9965
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.19876
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.01
                    }
                ]
            },
            {
                "id": 63,
                "name": "Iowa",
                "abbr": "IA",
                "electoralVotes": 4,
                "popularVotes": 22271,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.15,
                        "weight": 1.2
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.25,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.1,
                        "weight": 0.8
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0,
                        "weight": 0.8
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.5,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.7534
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.2121
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.01
                    }
                ]
            },
            {
                "id": 64,
                "name": "Kansas",
                "abbr": "KS",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.45,
                        "weight": 1.3
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.3,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.25,
                        "weight": 0.7
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0.1,
                        "weight": 0.7
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.4,
                        "weight": 0.7
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 1.0221
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.01
                    }
                ]
            },
            {
                "id": 65,
                "name": "Kentucky",
                "abbr": "KY",
                "electoralVotes": 12,
                "popularVotes": 116865,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.35,
                        "weight": 1.3
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.15,
                        "weight": 0.7
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0,
                        "weight": 0.7
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.6,
                        "weight": 0.7
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 1.2845
                    },
                    {
                        "candidateId": 21,
                        "amount": 0.8532
                    },
                    {
                        "candidateId": 22,
                        "amount": 0
                    }
                ]
            },
            {
                "id": 66,
                "name": "Louisiana",
                "abbr": "LA",
                "electoralVotes": 6,
                "popularVotes": 33866,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.6,
                        "weight": 1.2
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.6,
                        "weight": 1.2
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.5,
                        "weight": 0.8
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.1,
                        "weight": 0.7
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.3,
                        "weight": 0.8
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 1.1121
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0
                    }
                ]
            },
            {
                "id": 67,
                "name": "Maine",
                "abbr": "ME",
                "electoralVotes": 9,
                "popularVotes": 87625,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.6,
                        "weight": 1.2
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.7,
                        "weight": 1.3
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.3,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.5,
                        "weight": 0.8
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.7376
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.6532
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.015
                    }
                ]
            },
            {
                "id": 68,
                "name": "Maryland",
                "abbr": "MD",
                "electoralVotes": 8,
                "popularVotes": 72359,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.3,
                        "weight": 1.1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.2,
                        "weight": 1.1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0,
                        "weight": 0.7
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 1.2326
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.43121
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.033
                    }
                ]
            },
            {
                "id": 69,
                "name": "Massachusetts",
                "abbr": "MA",
                "electoralVotes": 12,
                "popularVotes": 134748,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.7,
                        "weight": 1.3
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.7,
                        "weight": 1.3
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.6,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.2,
                        "weight": 0.8
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.2,
                        "weight": 0.8
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 1.11123
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.421
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.04
                    }
                ]
            },
            {
                "id": 70,
                "name": "Michigan",
                "abbr": "MI",
                "electoralVotes": 5,
                "popularVotes": 65082,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.1,
                        "weight": 0.9
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.3,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.7852
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.6421
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.025
                    }
                ]
            },
            {
                "id": 71,
                "name": "Minnesota",
                "abbr": "MN",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.6,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 1.0764
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.025
                    }
                ]
            },
            {
                "id": 72,
                "name": "Mississippi",
                "abbr": "MS",
                "electoralVotes": 6,
                "popularVotes": 52456,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.7,
                        "weight": 1.3
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.7,
                        "weight": 1.5
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.2,
                        "weight": 0.8
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.5,
                        "weight": 0.8
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.7,
                        "weight": 1.2
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.8721
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0
                    }
                ]
            },
            {
                "id": 73,
                "name": "Missouri",
                "abbr": "MO",
                "electoralVotes": 7,
                "popularVotes": 72748,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.5,
                        "weight": 1.1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.15,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.1,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.7485
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0
                    }
                ]
            },
            {
                "id": 74,
                "name": "Montana",
                "abbr": "MT",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.75,
                        "weight": 1.4
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.1,
                        "weight": 0.7
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.5,
                        "weight": 0.7
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.3747
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.004
                    }
                ]
            },
            {
                "id": 75,
                "name": "Nebraska",
                "abbr": "NE",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.3,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.5,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 1.0378
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.05
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.02
                    }
                ]
            },
            {
                "id": 76,
                "name": "Nevada",
                "abbr": "NV",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.8,
                        "weight": 1.4
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.5,
                        "weight": 0.8
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.3,
                        "weight": 0.8
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0.3,
                        "weight": 0.8
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.6,
                        "weight": 0.8
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.3448
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0
                    }
                ]
            },
            {
                "id": 77,
                "name": "New Hampshire",
                "abbr": "NH",
                "electoralVotes": 6,
                "popularVotes": 50104,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.55,
                        "weight": 1.2
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.6,
                        "weight": 1.3
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.3,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.6,
                        "weight": 0.8
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.8743
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.94321
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.04
                    }
                ]
            },
            {
                "id": 78,
                "name": "New Jersey",
                "abbr": "NJ",
                "electoralVotes": 7,
                "popularVotes": 77735,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.5,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.3,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.6,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 1.0544
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.321
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.04
                    }
                ]
            },
            {
                "id": 79,
                "name": "New York",
                "abbr": "NY",
                "electoralVotes": 36,
                "popularVotes": 455944,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.6,
                        "weight": 1.1
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.5,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.3,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.9812
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.5333331
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.033
                    }
                ]
            },
            {
                "id": 80,
                "name": "North Carolina",
                "abbr": "NC",
                "electoralVotes": 11,
                "popularVotes": 79826,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.6,
                        "weight": 1.2
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.6,
                        "weight": 1.3
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0.3,
                        "weight": 0.8
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.4,
                        "weight": 0.8
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 1.5412
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0
                    }
                ]
            },
            {
                "id": 81,
                "name": "North Dakota",
                "abbr": "ND",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.2,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 1.0749
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.008
                    }
                ]
            },
            {
                "id": 82,
                "name": "Ohio",
                "abbr": "OH",
                "electoralVotes": 23,
                "popularVotes": 328479,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.3,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.3,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.9919
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.2215
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.01
                    }
                ]
            },
            {
                "id": 83,
                "name": "Oregon",
                "abbr": "OR",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.3,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.4,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.9954
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.02
                    }
                ]
            },
            {
                "id": 84,
                "name": "Pennsylvania",
                "abbr": "PA",
                "electoralVotes": 26,
                "popularVotes": 368552,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.4,
                        "weight": 1.1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.4,
                        "weight": 1.1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.2,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.9478
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.43121
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.033
                    }
                ]
            },
            {
                "id": 85,
                "name": "Rhode Island",
                "abbr": "RI",
                "electoralVotes": 4,
                "popularVotes": 11155,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.6,
                        "weight": 1.2
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.6,
                        "weight": 1.2
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.6,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.6,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.3,
                        "weight": 0.7
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 1.0812
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.04
                    }
                ]
            },
            {
                "id": 86,
                "name": "South Carolina",
                "abbr": "SC",
                "electoralVotes": 9,
                "popularVotes": 10,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.66,
                        "weight": 1.4
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.66,
                        "weight": 1.4
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.1,
                        "weight": 0.8
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0.1,
                        "weight": 0.8
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.66,
                        "weight": 0.8
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0
                    },
                    {
                        "candidateId": 21,
                        "amount": 2
                    },
                    {
                        "candidateId": 22,
                        "amount": 0
                    }
                ]
            },
            {
                "id": 87,
                "name": "South Dakota",
                "abbr": "SD",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.25,
                        "weight": 1.1
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.25,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.9837
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.008
                    }
                ]
            },
            {
                "id": 88,
                "name": "Tennessee",
                "abbr": "TN",
                "electoralVotes": 13,
                "popularVotes": 122463,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.3,
                        "weight": 1.1
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.4,
                        "weight": 1.2
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.3,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.2,
                        "weight": 0.7
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.862
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0
                    }
                ]
            },
            {
                "id": 89,
                "name": "Texas",
                "abbr": "TX",
                "electoralVotes": 4,
                "popularVotes": 15177,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.6,
                        "weight": 1.2
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.6,
                        "weight": 1.3
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.2,
                        "weight": 0.7
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.6206
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0
                    }
                ]
            },
            {
                "id": 90,
                "name": "Utah",
                "abbr": "UT",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.7,
                        "weight": 1.4
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.8,
                        "weight": 1.2
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.307
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.001
                    }
                ]
            },
            {
                "id": 91,
                "name": "Vermont",
                "abbr": "VT",
                "electoralVotes": 6,
                "popularVotes": 47922,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.7,
                        "weight": 1.4
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.7,
                        "weight": 1.2
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.7,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.5,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.2,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 1.5889
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.033
                    }
                ]
            },
            {
                "id": 92,
                "name": "Virginia",
                "abbr": "VA",
                "electoralVotes": 17,
                "popularVotes": 92004,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.25,
                        "weight": 1.2
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.4,
                        "weight": 1.2
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.4,
                        "weight": 0.7
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.8171
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0
                    }
                ]
            },
            {
                "id": 93,
                "name": "Washington",
                "abbr": "WA",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.3,
                        "weight": 1.3
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.2,
                        "weight": 1.2
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.3,
                        "weight": 0.7
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.8645
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.01
                    }
                ]
            },
            {
                "id": 94,
                "name": "West Virginia",
                "abbr": "WV",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.3,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.4,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.2,
                        "weight": 0.9
                    },
                    {
                        "issueId": 9,
                        "issueScore": 0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.3,
                        "weight": 0.7
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.9873
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.01
                    }
                ]
            },
            {
                "id": 95,
                "name": "Wisconsin",
                "abbr": "WI",
                "electoralVotes": 4,
                "popularVotes": 39166,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": -0.1,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": -0.5,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": -0.2,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.15,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": -0.7,
                        "weight": 1.3
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.8121
                    },
                    {
                        "candidateId": 21,
                        "amount": 1.6531
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.025
                    }
                ]
            },
            {
                "id": 96,
                "name": "Wyoming",
                "abbr": "WY",
                "electoralVotes": 0,
                "popularVotes": 0,
                "baseIssueScores": [
                    {
                        "issueId": 6,
                        "issueScore": 0.15,
                        "weight": 1
                    },
                    {
                        "issueId": 7,
                        "issueScore": 0.25,
                        "weight": 1
                    },
                    {
                        "issueId": 8,
                        "issueScore": 0.15,
                        "weight": 1
                    },
                    {
                        "issueId": 9,
                        "issueScore": -0.05,
                        "weight": 1
                    },
                    {
                        "issueId": 10,
                        "issueScore": 0.35,
                        "weight": 1
                    }
                ],
                "baseCandidateStateModifiers": [
                    {
                        "candidateId": 20,
                        "amount": 0.9646
                    },
                    {
                        "candidateId": 21,
                        "amount": 1
                    },
                    {
                        "candidateId": 22,
                        "amount": 0.01
                    }
                ]
            }
        ],
        "issues": [
            {
                "id": 6,
                "name": "Expansion of Slavery",
                "description": "",
                "stances": [
                    "Free Soil",
                    "Limit",
                    "Limit",
                    "Moderate",
                    "Expand",
                    "Expand",
                    "Expand"
                ],
                "stanceDescriptions": [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": 7,
                "name": "Tariffs",
                "description": "",
                "stances": [
                    "Strongly Supportive",
                    "Supportive",
                    "Slightly Supportive",
                    "Moderate",
                    "Slightly Opposed",
                    "Opposed",
                    "Strongly Opposed"
                ],
                "stanceDescriptions": [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": 8,
                "name": "Spoils System",
                "description": "",
                "stances": [
                    "Supports",
                    "Supports",
                    "Supports",
                    "Supports",
                    "Opposed",
                    "Opposed",
                    "Opposed"
                ],
                "stanceDescriptions": [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": 9,
                "name": "Revolutions Abroad",
                "description": "",
                "stances": [
                    "Very Conservative",
                    "Conservative",
                    "Leans Conservative",
                    "Moderate",
                    "Leans Interventionist",
                    "Interventionist",
                    "Interventionist"
                ],
                "stanceDescriptions": [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": 10,
                "name": "Ideology",
                "description": "",
                "stances": [
                    "Diehard Whig",
                    "Whiggish",
                    "Whiggish",
                    "Moderate",
                    "Jacksonian",
                    "Jacksonian",
                    "Diehard Jacksonian"
                ],
                "stanceDescriptions": [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ]
            }
        ],
        "scenarioSides": [
            {
                "playerId": 20,
                "questions": [
                    {
                        "id": 165,
                        "description": "Following the Democratic National Convention of 1848, Martin Van Buren and a group of Barnburner Democrats have decided to form their own party - the Free Soil Party - which will be nominating Van Buren for president.",
                        "answers": [
                            {
                                "id": 1352,
                                "description": "We will congratulate Van Buren on the nomination.",
                                "feedback": "Van Buren’s attempt to sink the Democratic ticket this year may give you an unexpected advantage. Use it wisely.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": 0.6234
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 21,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": -0.15
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 69,
                                        "amount": 0.7894
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 91,
                                        "amount": 0.7964
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 77,
                                        "amount": 0.5964
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 85,
                                        "amount": 0.1794
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 67,
                                        "amount": 0.2864
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 84,
                                        "amount": 0.07764
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 82,
                                        "amount": 0.1998
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 70,
                                        "amount": 0.3098
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 62,
                                        "amount": 0.1019
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 61,
                                        "amount": 0.2087
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 63,
                                        "amount": 0.1027
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 95,
                                        "amount": 0.7027
                                    }
                                ]
                            },
                            {
                                "id": 1353,
                                "description": "This ‘Free Soil’ party runs a serious risk to a large portion of northern Whig voters. I'd like to put our party’s funds towards giving special attention to New York, to outcompete Van Buren.",
                                "feedback": "Never a bad idea to try to increase your share of the electorate, but be warned that those outside of New York see Van Buren as little more than an Abolitionist assuring his friends.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": 0.4234
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 21,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": -0.25
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 69,
                                        "amount": 0.7894
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 91,
                                        "amount": 0.7964
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 77,
                                        "amount": 0.5964
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 56,
                                        "amount": 0.2654
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 67,
                                        "amount": 0.2864
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 84,
                                        "amount": 0.07764
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 82,
                                        "amount": 0.1998
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 70,
                                        "amount": 0.3098
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 62,
                                        "amount": 0.1019
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 61,
                                        "amount": 0.2087
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 63,
                                        "amount": 0.1027
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 95,
                                        "amount": 0.7027
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 21,
                                        "issueId": -1,
                                        "stateId": 88,
                                        "amount": 0.3027
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 21,
                                        "issueId": -1,
                                        "stateId": 80,
                                        "amount": 0.2027
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 21,
                                        "issueId": -1,
                                        "stateId": 84,
                                        "amount": 0.3027
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 21,
                                        "issueId": -1,
                                        "stateId": 82,
                                        "amount": 0.1927
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": 0.123
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 166,
                        "description": "No matter how much you obfuscate, the central issue this year will be the status of slavery in the newly acquired Mexican territory. To form a voter base outside your loyal supporters, what stance will you take on what is to be done?",
                        "answers": [
                            {
                                "id": 1356,
                                "description": "I opposed the annexation of Texas in 1844 and believe President Polk’s unjust acquisition was nothing more than a slaver power grab. These territories and any new states in the area should be free of slavery.",
                                "feedback": "This is an unexpectedly strong stance against slavery, and means the bulk of votes you’ll be eating off of will be from Van Buren, who you were relying on to take Democratic votes. A risky move, by all means, but maybe there's a strategy to it?",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.04
                                    },
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.1
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": -0.213
                                    }
                                ]
                            },
                            {
                                "id": 1357,
                                "description": "I saved this Union 28 years ago, and I’ll save it under the same compromise. Any new states and any territories should be free above the 36’30th parallel and any admitted free states must be paired with the admission of a slave state, including a division of California into two states.",
                                "feedback": "This was the expected stance you’d take, albeit an idealistic one. The nation is not what it was in 1820. Still, reminding people of your accomplishments may give you the vote of those who want an experienced hand.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.04
                                    }
                                ]
                            },
                            {
                                "id": 1358,
                                "description": "The national mood is clearly in favor of the South and the Democrats this year. We can accept California’s and any future states admission as free states, but the newly acquired territories have no reason not to permit slavery.",
                                "feedback": "You got the nomination with the support of the North, but appear to have pivoted to the South where your reputation is not as warm as it was in 1844. Will you be able to eat into Cass' home turf?",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.09
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 58,
                                        "amount": 0.133
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": -0.211
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 69,
                                        "amount": -0.1111
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 59,
                                        "amount": 0.343
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 72,
                                        "amount": 0.233
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 80,
                                        "amount": 0.133
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 66,
                                        "amount": 0.3433
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 88,
                                        "amount": 0.133
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 92,
                                        "amount": 0.0733
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 72,
                                        "amount": 0.333
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 82,
                                        "amount": -0.0813
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 62,
                                        "amount": -0.113
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 62,
                                        "amount": -0.113
                                    }
                                ]
                            },
                            {
                                "id": 1359,
                                "description": "The slavery issue will break our campaign on the rocks if we address it. Instead, the Whig platform will take no official stance on slavery in the west. Focus on my dream of the American System and national bank.",
                                "feedback": "This is the central issue of the campaign, and you're going nowhere by trying to ignore it. While coming out for or against the institution is dangerous, people simply don't care as much about a national bank when there are fears of civil war.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.04
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 170,
                        "description": "William Henry Harrison's groundbreaking 1840 presidential campaign has changed the way election campaigns have been run ever since, as the public's focus shifts from the policies to the men themselves (with key exceptions like slavery).You’ll have to run some sort of “Log Cabin and Hard Cider” campaign to seriously compete these days. What do you propose?",
                        "answers": [
                            {
                                "id": 1369,
                                "description": "I’ve been in politics a long time, and everyone knows it. I’d like to use that fact to my advantage and liken myself to Thomas Jefferson, who I regularly corresponded with and knew.",
                                "feedback": "The comparisons to Thomas Jefferson fall flat. Citizens think of Jefferson as an American hero and scholar, and you as...less so.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.06
                                    }
                                ]
                            },
                            {
                                "id": 1370,
                                "description": "I’d like to return to the 1844 \"coon skin hat\" strategy, and present myself as a frontiersmen in touch with the common man. This is the sort of thing citizens loved about Harrison.",
                                "feedback": "It would take a special kind of fool to believe that a man who's been in politics for four decades is a frontiersman, especially after said man runs for President four years prior.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.05
                                    }
                                ]
                            },
                            {
                                "id": 1371,
                                "description": "I’d like to remain above the fray. Have campaigners and papers constantly point out that my positions are well known and that I make no attempts to spread electioneering lies.",
                                "feedback": "These aren't particularly effective at gathering support, but you're not hurting yourself by pointing out your experience.",
                                "answerEffects": []
                            },
                            {
                                "id": 1372,
                                "description": "I’d like to point to my time in the Senate, especially focusing on the Missouri compromise, to brand myself as \"The Father of Missouri, Savior of the Union.\" I’m a proven statesman and will be able to guide America forward.",
                                "feedback": "It almost seems like a lifetime ago, but the Missouri Compromise has remained popular and your hand in it is undeniable. In a time of such division over slavery, perhaps another compromise like this is what people want.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.03
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 197,
                        "description": "What do you think of your running mate, Thomas Ewing?",
                        "answers": [
                            {
                                "id": 1476,
                                "description": "Ewing served faithfully under the Harrison administration, as well as serving as Senator from Harrison's great state of Ohio. He has the experience to fulfill the duties of the Vice President, or even be President should the worst come to pass.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 82,
                                        "amount": 0.05
                                    }
                                ]
                            },
                            {
                                "id": 1479,
                                "description": "Thomas Ewing is a loud and proud Whig, like I am. It's my deepest pleasure to have him on my campaign, as we fight to put Whiggery back in the White House.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.03
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": -0.06
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 80,
                                        "amount": 0.06
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 59,
                                        "amount": 0.06
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 182,
                        "description": "What do you think of the liberal revolutions in Europe - specifically your thoughts on the elections in Hungary, and America's possible involvement in securing their independence from Austria?",
                        "answers": [
                            {
                                "id": 1408,
                                "description": "I support liberal revolutions, of course, but some of these proposals are unreasonable. The United States cannot - indeed, should not - maintain a navy or army abroad in Europe. There’s nothing we can do in this regard.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.056
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 84,
                                        "amount": 0.09
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 69,
                                        "amount": 0.09
                                    }
                                ]
                            },
                            {
                                "id": 1409,
                                "description": "This is simply not the concern of America. I believe Hungarian separatism to be wrong and the monarchism of Austria to be too illiberal, but the words of George Washington warned our nation against foreign intervention.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.045
                                    }
                                ]
                            },
                            {
                                "id": 1410,
                                "description": "I fully support the Austrian Empire in their fight against the Hungarian rebels. It is inconsistent to believe in one indivisible Union at home without applying the idea elsewhere.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.067
                                    }
                                ]
                            },
                            {
                                "id": 1411,
                                "description": "I believe we should support liberal revolutions abroad, as well as boycotting the Austrian Empire for their repression of Hungary.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.02
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 179,
                        "description": "As the war with Mexico has drawn to a close, what did you think of President Polk’s handling of the war?",
                        "answers": [
                            {
                                "id": 1400,
                                "description": "This war was a disaster which I opposed from the start! How many sons of the Union - my own included - died in the name of Polk and the Democrats' unconstitutional invasion? This was not just a war against Mexico - it was a war against America itself!",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.0565
                                    }
                                ]
                            },
                            {
                                "id": 1401,
                                "description": "The truth of the matter is that the war is over, and we have no intentions of returning territory to Mexico. Let’s not talk about the war and talk more about my plans on what to do with the territory we’ve acquired.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.06
                                    }
                                ]
                            },
                            {
                                "id": 1402,
                                "description": "President Polk made a grave error in acquiring anything except Texas from Mexico, and we see the fruits of that mistake today. Dare I say that the amount of land conquered shows the true intentions of the warmongering Democrats better than any speech?",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.04
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 92,
                                        "amount": -0.06534
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 88,
                                        "amount": -0.05421
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 80,
                                        "amount": -0.0764421
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 194,
                        "description": "Recent presidential campaigns have taken on a nasty attacking tone, and 1848 promises to be no different. Indeed, many in your party believe that your only chance to get back in the race is to find an effective angle to hit Cass on. What do you plan to mention?",
                        "answers": [
                            {
                                "id": 1464,
                                "description": "Cass served under the failed Jackson administration, bringing about one of the worst economic crises this Union has seen. I'd like to point this out everywhere I can.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.0165
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 66,
                                        "amount": -0.0764421
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 59,
                                        "amount": -0.083421
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 88,
                                        "amount": -0.086421
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 92,
                                        "amount": -0.08127
                                    }
                                ]
                            },
                            {
                                "id": 1465,
                                "description": "Voters won't respond to issues. I'd like to dig deep into Cass' past and find whatever we can to brand him a Federalist and opponent of the War of 1812, which I championed.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.0565
                                    }
                                ]
                            },
                            {
                                "id": 1466,
                                "description": "Popular sovereignty as national policy would be prone to fraud and lead to violence. It is a dangerous idea that will bring ruin to our country, and it must be stopped here and now.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.08954
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 193,
                        "description": "As with every election since 1832, you've been charged with that same old lie by your detractors that you and John Quincy Adams had conspired to elect the latter to the presidency in a corrupt bargain. What will you say to settle this once and for all?",
                        "answers": [
                            {
                                "id": 1460,
                                "description": "I have tried to dispel these rumors for two decades. The sad fact is that it isn't possible. Those who believe it will believe it and those who do not will not, and we will simply have to live with that.",
                                "feedback": "You certainly aren't wrong. After so many years of finger-pointing, the corrupt bargain is an inexorable mark on your reputation.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.05632
                                    }
                                ]
                            },
                            {
                                "id": 1461,
                                "description": "This charge is false, and Cass knows it. I will publish a personal letter sent by him in 1825, which exonerates me of this charge.",
                                "feedback": "",
                                "answerEffects": []
                            },
                            {
                                "id": 1463,
                                "description": "It’s insulting to our nation that the Democrats will repeat this lie even after the death of former President Adams.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 21,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.02632
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 184,
                        "description": "Taylor supporters who doubt your ability to win a presidential election and disagree with you on some fundamental issues, are far from enthusiastic about your candidacy this year. What can you say to reel them in? ",
                        "answers": [
                            {
                                "id": 1415,
                                "description": "A lot of Taylor’s support came from the South, which we need to win this election. I can’t reverse any major economic policies without inciting catastrophe, but I can reassure the south that I am a slaveholder who respects their institutions.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.1
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 59,
                                        "amount": 0.076121
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 52,
                                        "amount": 0.086121
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 72,
                                        "amount": 0.086121
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 66,
                                        "amount": 0.091121
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 58,
                                        "amount": 0.091121
                                    }
                                ]
                            },
                            {
                                "id": 1416,
                                "description": "Most Taylor supporters don’t support me simply because they think I can't win. I’ll emphasize the fact that I am in striking distance of Cass. With their support, we can defeat the Democrats.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.05432
                                    }
                                ]
                            },
                            {
                                "id": 1490,
                                "description": "I’d rather cut my losses in this department. Let’s focus on winning Cass and Van Buren voters more concerned with slavery.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.09432
                                    }
                                ]
                            },
                            {
                                "id": 1491,
                                "description": "I think my running mate is an excellent example of the diversity of this party. Indeed, I’ll boast the differences between him and I as proof of my willingness to compromise.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.03
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 167,
                        "description": "Although a number of Free Soil voters lean Democrat, the usual Whig-leaning voters are disenchanted with your nomination as a slave-owner. What can you say to convince them of your credentials?",
                        "answers": [
                            {
                                "id": 1360,
                                "description": "I am a Christian to my core. The Bible tells us that slavery is wrong and I believe this institution is immoral, even if it may not be immediately separated from our Union.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.05989
                                    }
                                ]
                            },
                            {
                                "id": 1361,
                                "description": "Whenever gradual emancipation has been advocated in Kentucky, I’ve stayed steadfast in support of it. Slavery has been a burden on both races.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 21,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.02549
                                    },
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.01979
                                    }
                                ]
                            },
                            {
                                "id": 1492,
                                "description": "The first American opponents of slavery were James Madison and Thomas Jefferson. Many are looking at this wrong - the Missouri Compromise was my greatest effort to contain slavery, not protect it.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.054623
                                    },
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 21,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.02623
                                    }
                                ]
                            },
                            {
                                "id": 1493,
                                "description": "I’d like to take this another direction. I think there’s no point agitating the South by bringing up anything in regards to my views on gradual emancipation.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.09989
                                    },
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.05549
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 195,
                        "description": "With Van Buren's campaign putting you at an unexpected advantage, it would be of your benefit to do what you can to play on divisions in this race. What do you propose?",
                        "answers": [
                            {
                                "id": 1469,
                                "description": "Cass’ history is full of pro-Wilmot, anti-slavery rhetoric. We’d be putting ourselves at a major advantage by attacking him as an Abolitionist, even a greater one than Van Buren.",
                                "feedback": "The lights are not working upstairs for old Henry Clay, it seems.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.076623
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 88,
                                        "amount": 0.03298
                                    }
                                ]
                            },
                            {
                                "id": 1470,
                                "description": "Any sectional appeals will just alienate the other half of the union, I will continue with the moderate rhetoric I’ve advocated my whole career.",
                                "feedback": "Fair enough. Van Buren and Cass' barbs at one another will help you regardless of what you do personally.",
                                "answerEffects": []
                            },
                            {
                                "id": 1471,
                                "description": "The North is easy pickings. Once voters realize Van Buren can’t win, they’ll turn to the only candidate who really can beat Cass. We need to look towards winning potential Free Soil voters.",
                                "feedback": "It's an interesting strategy, and there's truth behind it. Keep in mind, however, that Free Soilers alone will not be enough to win you this election, especially in such dire straits.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.04522
                                    },
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.04522
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 88,
                                        "amount": -0.08298
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 59,
                                        "amount": -0.07655
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 80,
                                        "amount": -0.07655
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 72,
                                        "amount": -0.07655
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 196,
                        "description": "What are your thoughts on James Knox Polk's \"Walker Tariff\", which lowered tariffs?",
                        "answers": [
                            {
                                "id": 1474,
                                "description": "Perhaps it would be better to moderate on the tariff issue. I don't support the lowering of tariffs to the extent of the Walker Tariff, but they certainly were too high under the Tyler administration.",
                                "feedback": "This would have been a better move for a candidate facing some overzealous radical. Against Cass, the tariff issue is simply too polarizing for you to suddenly swing on, and the only result is an upshot of angry Whigs.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.02889
                                    }
                                ]
                            },
                            {
                                "id": 1475,
                                "description": "I opposed this backwards reform with all my might. We must recognize that tariffs protect laborers and can be used to fund internal improvement projects.",
                                "feedback": "A standard position for a Whig, and especially for you.",
                                "answerEffects": []
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 223,
                        "description": "What do you think about the Wilmot Proviso, which would ban slavery in all territories which were acquired from Mexico?",
                        "answers": [
                            {
                                "id": 1559,
                                "description": "I would veto the Proviso with no hesitation, there are many solutions to the question of slavery in the territories but this is not one of them.",
                                "feedback": "This stance seems more suited for Lewis Cass, and the anti-slavery Whigs are shocked by your harsh rebuttal of a position they champion. Though you'll gain Southern support, expect Van Buren to make headway.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.06987
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 80,
                                        "amount": 0.0618
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 59,
                                        "amount": 0.05318
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 52,
                                        "amount": 0.02318
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 72,
                                        "amount": 0.04818
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 88,
                                        "amount": 0.04818
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 92,
                                        "amount": 0.05218
                                    }
                                ]
                            },
                            {
                                "id": 1560,
                                "description": "I do not believe it is the role of the president to veto a bill unless it is unconstitutional. In this case, the Wilmot Proviso is not unconstitutional. I do not openly support it but I would not - indeed, could not - veto it.",
                                "feedback": "Although this is the Whig line, many Southerners feel the Wilmot Proviso is unconstitutional, and Northern Whigs feel uneasy about your uncertainty.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.0765
                                    },
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.05915
                                    }
                                ]
                            },
                            {
                                "id": 1561,
                                "description": "It’d be best to make no official statement and let people speculate. Free Soilers may look at my past and suspect I would sign it and Southerners will see me as a slaveholder who would veto it.",
                                "feedback": "Southern Whig papers write that you're likely to veto the act, while Northern ones proclaim that you're likely to sign it. Without an official position, you seemed to have done the best you could to avoid alienating anybody.",
                                "answerEffects": []
                            },
                            {
                                "id": 1562,
                                "description": "I support the Wilmot Proviso, and I urge Congress to follow through with it in some form.",
                                "feedback": "Endorsing the Wilmot Proviso outright is the closest thing to political suicide one can have in the slave-owning South. Best hope you’ve been cultivating Northern voters - they’re all you have left.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.181
                                    },
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.121
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": 0.0618
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 153,
                        "description": "Your running mate, Thomas Ewing, is under constant attack by some Whig-aligned voters for his sympathy for Catholicism and attendance of Catholic services. Some prominent newspapers have even disavowed you after what they see as a betrayal. How do you think you'll address this tricky issue?",
                        "answers": [
                            {
                                "id": 1028,
                                "description": "Actually, I don’t think we should deny these claims at all. If Ewing doesn’t backtrack, then we can win with vital Irish votes we normally have trouble winning.",
                                "feedback": "",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.03811
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": 0.04
                                    }
                                ]
                            },
                            {
                                "id": 1029,
                                "description": "We’ll have a friend of Ewing publish a letter praising his Protestantism and his sympathy for the Catholics. This way, we appease both sides - immigrants need to know we are not enemies of Catholicism, and Nativists need to know we are not papists ourselves.",
                                "feedback": "Playing both sides works surprisingly well here, although the message is more well-received by Catholics than Nativists.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.02
                                    }
                                ]
                            },
                            {
                                "id": 56331,
                                "description": "Thomas is a devout Protestant. We need to viciously attack any claims that he’s a Catholic, and I’ll produce a statement myself claiming to be skeptical of the motives of papists. That should quell these attacks.",
                                "feedback": "You're playing a dangerous game leaning so hard into this, but perhaps growing nativism in New York will win you that state?",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": 0.02
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 168,
                        "description": "What do you think of the on-going revolution in France?",
                        "answers": [
                            {
                                "id": 1363,
                                "description": "I support Louis-Philippe and the Orleanists against the excesses of the Socialists that are at risk of taking power in France. Need I remind people about the Reign of Terror?",
                                "feedback": "Democrats and liberals quickly attack you as a monarchist, but many of their own members disagree with their party's fervent support for the Republicans. This could be a subtle way of gaining conservative support.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.039231
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 84,
                                        "amount": 0.03998
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 59,
                                        "amount": 0.041
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 88,
                                        "amount": 0.037
                                    }
                                ]
                            },
                            {
                                "id": 1364,
                                "description": "Of course I support the revolutionaries in France and their struggle. I hope they establish a Republican government there.",
                                "feedback": "This is a safe, simple position to take, and most Americans find it agreeable.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.029636
                                    }
                                ]
                            },
                            {
                                "id": 1380,
                                "description": "Americans are not engaged with the happenings in France. This isn't even worth a passing remark.",
                                "feedback": "The happenings of France have been part of the public interest since 1778. It's not a critical issue, but it wouldn't have been bad to make some comment.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.029476
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 239,
                        "description": "Since 1847, there’s been a minor recession within the nation. What do you think caused this recession and how would you fix it?",
                        "answers": [
                            {
                                "id": 1608,
                                "description": "As much as we’d like to blame Polk, the recession has been caused by economic changes in Britain. We shouldn’t be exaggerating the cause or extent of this Panic, and I predict it will be no trouble to resolve in the future.",
                                "feedback": "Don't defend your opponents in their stead!",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.04312
                                    }
                                ]
                            },
                            {
                                "id": 1609,
                                "description": "Is this even a question? Young and Old Hickory destroyed this country’s economy in the name of some short-sighted class war. We need to revive the national bank, as I have said for decades.",
                                "feedback": "You've preached this stance for decades on decades. Let's hope you're in a position to actually act on the bank issue next year.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.02312
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 80,
                                        "amount": 0.037
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 84,
                                        "amount": 0.037
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 68,
                                        "amount": 0.037
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 57,
                                        "amount": 0.037
                                    }
                                ]
                            },
                            {
                                "id": 1610,
                                "description": "The reckless spending caused by our unjust war with Mexico is the obvious reason for our recent economic woes. A Clay administration will avoid such conflicts in the future.",
                                "feedback": "This would probably work better if the war was still ongoing, but the Mexican-American War ended in February.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.02312
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": 0.037
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 84,
                                        "amount": 0.037
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 78,
                                        "amount": 0.037
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 56,
                                        "amount": 0.037
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 242,
                        "description": "What do you think of James K. Polk reviving the Independent Treasury? After all, it was repealed under your supervision in 1841.",
                        "answers": [
                            {
                                "id": 1617,
                                "description": "The Independent Treasury is at least better than the disaster that was the free banking system. If I can not guarantee a national bank, my administration will take priorities elsewhere.",
                                "feedback": "The bank issue has been dead for 4 years. Conceding that you will move on with the rest of the country is a fine choice that will help you.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.04111
                                    }
                                ]
                            },
                            {
                                "id": 1618,
                                "description": "Polk is as much a tool of Tammany Hall as Van Buren! The Independent Treasury is a sad, inadequate solution for the economic crisis caused by Jackson. Until the Democrats get the message, I have no qualms with striking it down again and again.",
                                "feedback": "There are whispers that your banking policy comes straight from 1832, and many Americans worry that your aggression on a dead issue will impact their finances.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.04111
                                    }
                                ]
                            },
                            {
                                "id": 1619,
                                "description": "To be frank, the independent treasury is the least of our worries. I’d rather focus on tariffs, which desperately need to be higher if we wish to have an effective national government.",
                                "feedback": "Perhaps it's best to ignore a dead issue and look towards the base.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.03543
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 57,
                                        "amount": 0.041091
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": 0.041091
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 241,
                        "description": "In January, the divisive Senator John C. Calhoun made a speech against the growing \"All-Mexico\" movement. Among other things, he said \"We have never dreamt of incorporating into our Union any but the Caucasian race—the free white race.\" and \"Ours, sir, is the Government of a white race.\" What did you think of that speech?",
                        "answers": [
                            {
                                "id": 1615,
                                "description": "I see nothing to gain by agreeing or disagreeing with Calhoun. He is the greatest enemy of our Union.",
                                "feedback": "John C. Calhoun spells nothing but trouble for you, and it's for the best to denounce him and move along.",
                                "answerEffects": []
                            },
                            {
                                "id": 1616,
                                "description": "I seldom agree with Senator Calhoun, but even a blind pig finds an acorn now and then. Most importantly, Lewis Cass was a proud supporter of the All-Mexico movement, while I have opposed the miscegenation of our Union since 1799.",
                                "feedback": "Few in the Union support race-mixing, but outright agreeing with John Calhoun? Well beyond the pale for many Northern Whigs. Hopefully some Southern converts will help make up for the losses.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.03983
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 72,
                                        "amount": 0.03121
                                    }
                                ]
                            },
                            {
                                "id": 1738,
                                "description": "As I do on nearly every issue, I disagree with Calhoun on his opposition to the All-Mexico movement. Any expansion of our Union is the spread of civilization to uncivilized races and should be pursued.",
                                "feedback": "The All-Mexico movement is controversial, to say the least. Impractical, unwieldy, and the spark to a potential conflagration, few Americans still want to control an unwilling Mexican populace, and the people are not excited to learn you're one of them.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.04381
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 82,
                                        "amount": 0.03121
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 62,
                                        "amount": 0.03121
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 222,
                        "description": "Many voters are concerned about your age. You would be entering office older than William Henry Harrison, who died thirty days after his inauguration. Is there anything you can say to help bring back voters who are concerned about a repeat of the Tyler administration?",
                        "answers": [
                            {
                                "id": 1555,
                                "description": "If worse came to worst, I believe my running mate would be more than suitable to carry out my ideals. There will be no repeat of the Tyler administration.",
                                "feedback": "Outside of Boston and New York City, it's for the best to not remind the public that a potentially secret-Papist could be close to the Presidency - especially not in the South.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.02997
                                    }
                                ]
                            },
                            {
                                "id": 1556,
                                "description": "I am in good health, and Cass is hardly any younger than I am. This is simply not a real risk.",
                                "feedback": "No matter how much you insist on this, your reputation as a drinking man is cause for concern to those Americans who fear another thirty-day administration, although the harm should be negligible.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.02997
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 212,
                        "description": "Democratic Vice Presidential candidate William Butler, a veteran of the War of 1812, is quick to call out your lack of military service while he and Cass served, going so far as to call you a \"coward\" in a public letter. Can you direct local Whig papers on how they can refute these accusations?",
                        "answers": [
                            {
                                "id": 1526,
                                "description": "I stand proud that I did not participate in that war of aggression.",
                                "feedback": "You aren’t running for Prime Minister, you know.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.07641
                                    }
                                ]
                            },
                            {
                                "id": 1527,
                                "description": "Please. I was one of its fiercest supporters - indeed, I practically started it myself! Does that sound cowardly?",
                                "feedback": "The War of 1812 is no longer a controversial topic, and your role in it can hardly be downplayed - even if this comment makes you sound pompous.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.028912
                                    }
                                ]
                            },
                            {
                                "id": 1528,
                                "description": "I was in government during the whole war, with the exception of when I was appointed to help create the Treaty of Ghent that ended the war. This attack is completely disingenuous.",
                                "feedback": "Sure enough, this rebuttal effectively smothers Butler's comments, and the quote soon disappears from the public eyes.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.03292
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 211,
                        "description": "Will you attempt to make any in-roads into the votes of immigrants this election cycle - a group which traditionally leans Democratic?",
                        "answers": [
                            {
                                "id": 1523,
                                "description": "Democrats and Whigs alike are in agreement about immigration. It is a testament to the openness of our great Union that any white person is allowed to settle here.",
                                "feedback": "What are you saying? Whigs and Democrats are very much not in agreement about immigration. Native Americans cringe as their poster-boy seems to be rejecting them.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.05732
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": 0.03121
                                    }
                                ]
                            },
                            {
                                "id": 1524,
                                "description": "This is a foolish game. We’ll just lose the support of the Native American Party in critical states like New York. We won’t make an active outreach to these people.",
                                "feedback": "Nativism is certainly on the decline, but it is a real part of the Whig coalition.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.02192
                                    }
                                ]
                            },
                            {
                                "id": 1525,
                                "description": "European immigrants tend to think more highly of Free Soilism - voters we need to win in the North. If we go on the offensive and anonymously publish libel that accuses Cass of nativism, we can kill two birds with one stone.",
                                "feedback": "You're definitely making in-roads with some immigrants in New York and Boston now, even if the Native American Party is questioning their loyalty to you.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.03192
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": 0.04121
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 207,
                        "description": "As with any election, opponents are quick to label you an abolitionist, immediately drawing attention to your plan for gradual abolition in Kentucky in 1799. Once and for all, can you dispel this notion?",
                        "answers": [
                            {
                                "id": 1510,
                                "description": "This plan and my ideas are about Kentucky alone. I would never go as far as to impose these ideas onto the rest of the Union. Even though I believe it is a just cause, we Whigs understand that states will emancipate at their own pace.",
                                "feedback": "Only the most radical Free Soilers in the Union believe that the federal government has the constitutional right to abolish slavery, so at least this will keep fury in the press to a minimum. Southern voters are still agitated, of course.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.04112
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 88,
                                        "amount": -0.02121
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 59,
                                        "amount": -0.02121
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 84,
                                        "amount": -0.02121
                                    }
                                ]
                            },
                            {
                                "id": 1511,
                                "description": "My plan and my ideas are strictly opposed to abolition. I have supported gradual emancipation with colonization and compensation to slave owners. My idea is moderate and just, and I feel no shame in espousing it.",
                                "feedback": "If nothing else, it's admirable that you've stayed so consistent throughout your whole career on the issue even when only a handful of slaveholding states see your plans as reasonable.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.05112
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 88,
                                        "amount": 0.04988
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 68,
                                        "amount": 0.02988
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 78,
                                        "amount": 0.04988
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 92,
                                        "amount": 0.03988
                                    }
                                ]
                            },
                            {
                                "id": 1512,
                                "description": "Absolutely not! Indeed, double down on this! If I make statements reminding the world that I believe slavery is a sin and that I support gradual emancipation, I can win over the abolitionists which cost me 1844.",
                                "feedback": "Birney may have cost you the 1844 election, but don't forget he did so with two percent of the vote.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 22,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.0612
                                    },
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.0412
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 236,
                        "description": "Would you, under any circumstances, disavow the Oregon treaty and renegotiate with the British on the extent of the United States territory?",
                        "answers": [
                            {
                                "id": 1599,
                                "description": "Perhaps with significant support from the populace and due time. We have a real claim to this territory that Polk failed to deliver to his supporters.",
                                "feedback": "A minority of ultra-nationalists across the Union want to negotiate the Oregon Treaty. It seems you're speaking to the Southern ones. Nationwide, however, war with the British is a deeply unpopular concept.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.0462
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 88,
                                        "amount": 0.03978
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 59,
                                        "amount": 0.03978
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 66,
                                        "amount": 0.03978
                                    }
                                ]
                            },
                            {
                                "id": 1600,
                                "description": "Perhaps with significant support from the populace. I’m not quick to delve into another war, but actions which expand our glorious Union are good.",
                                "feedback": "A minority of ultra-nationalists across the Union want to negotiate the Oregon Treaty. It seems you're speaking to the Western and Northern ones. Nationwide, however, war with the British is a deeply unpopular concept.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.0462
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 82,
                                        "amount": 0.03978
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 84,
                                        "amount": 0.03978
                                    },
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 89,
                                        "amount": 0.03978
                                    }
                                ]
                            },
                            {
                                "id": 1601,
                                "description": "Are you kidding? This is just asking for a war with Britain. Our fragile Union can hardly bear the consequences of our last war of aggression! Polk’s negotiations were more than satisfactory, and we will take no action to change them.",
                                "feedback": "Very few Americans want a war with Britain, but going so far out of your way to heap dovish praise on Polk and the British rubs a few feathers the wrong way.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.0462
                                    }
                                ]
                            },
                            {
                                "id": 1739,
                                "description": "This issue is settled. There is no value in poking the flames of sectionalism.",
                                "feedback": "No one except extreme nationalists was calling for a renegotiation of the Oregon Treaty.",
                                "answerEffects": []
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 225,
                        "description": "Scandal! As the election comes to a draw, rumors spread that you have withdrawn from the election and come out in favor of Van Buren. With only about a week left before polls open and close, what will you do to combat this electioneering lie?",
                        "answers": [
                            {
                                "id": 1564,
                                "description": "Whigs will see through this deception!",
                                "feedback": "Disastrously, a number of panicked voters seem to be staying home or casting their votes for Van Buren instead of you as the days go by. Could this be the ugly end of your campaign?",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.04
                                    }
                                ]
                            },
                            {
                                "id": 1565,
                                "description": "Whigs will see through this deception!",
                                "feedback": "As the days pass, refutations and apologies become commonplace in most papers. Nearly no informed voters will be affected by this last minute electioneering - indeed, you may receive a small boost thanks to Cass' overplaying of his hand.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.04
                                    }
                                ]
                            },
                            {
                                "id": 1566,
                                "description": "Punch back relentlessly. We can publish articles that Cass has died and that the Democratic electors plan to vote for John C. Calhoun if Cass wins.",
                                "feedback": "Good try, but Cass is quickly able to prove himself as well as ever. As papers nationwide print apologies and denunciations, the outlook looks grim for the Clay campaign.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": -0.05
                                    }
                                ]
                            },
                            {
                                "id": 1567,
                                "description": "Punch back relentlessly. We can publish articles that Cass has died and that the Democratic electors plan to vote for John C. Calhoun if Cass wins.",
                                "feedback": "In the chaos of these combating rumors, confused voters stay home as Whig papers circulate the lie. The effect may be minor, but this could be what pulls Cass down just below you.",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "Global",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": -1,
                                        "amount": 0.05
                                    }
                                ]
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    },
                    {
                        "id": 192,
                        "description": "Campaigning is wrapping up as election day draws near, before voting begins, which state would you like to have your party give special attention to?",
                        "answers": [
                            {
                                "id": 1455,
                                "description": "Tennessee.",
                                "feedback": "Though not as valuable as other swing states, Tennessee is necessary for any Whig campaign to have a chance. Good luck, Great Compromiser!",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 88,
                                        "amount": 0.045
                                    }
                                ]
                            },
                            {
                                "id": 1456,
                                "description": "Georgia.",
                                "feedback": "Though less valuable than the Northern states, Georgia is a massive pickup for a Southern-focused campaign. Good luck, Great Compromiser!",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 59,
                                        "amount": 0.045
                                    }
                                ]
                            },
                            {
                                "id": 1457,
                                "description": "Pennsylvania.",
                                "feedback": "Pennsylvania is a crucial swing state for Democrats and Whigs alike. Good luck, Great Compromiser!",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 84,
                                        "amount": 0.045
                                    }
                                ]
                            },
                            {
                                "id": 1458,
                                "description": "New York.",
                                "feedback": "New York is critical to the success of any Northern-focused campaign. Good luck, Great Compromiser!",
                                "answerEffects": [
                                    {
                                        "answerEffectType": "State",
                                        "candidateId": 20,
                                        "issueId": -1,
                                        "stateId": 79,
                                        "amount": 0.045
                                    }
                                ]
                            },
                            {
                                "id": 1459,
                                "description": "We need to shore up our base. Let's make sure we win in Pennsylvania and New York, where the stakes are highest.",
                                "feedback": "",
                                "answerEffects": []
                            }
                        ],
                        "keepInPlaceIfQuestionsShuffled": false
                    }
                ]
            }
        ],
        "theme": {
            "backgroundImageUrl": "",
            "backgroundColor": "",
            "headerImageUrl": "",
            "primaryGameWindowColor": "",
            "secondaryGameWindowColor": "",
            "primaryGameWindowTextColor": "",
            "secondaryGameWindowTextColor": "",
            "bottomBannerBackgroundColor": "",
            "bottomBannerTextColor": "",
            "advisorImage": "https://i.imgur.com/hDFuAV8.pn",
            "quote": ""
        },
        "hasStateVisits": true,
        "scenarioName": "1848b",
        scenarioDescription: "The last four years have not been kind to America. Polk's annexation of the neighbouring Republic of Texas, and the war with Mexico it provoked, has heightened the slavery debate to its tensest levels yet. With Polk keeping his promise of a one-term presidency, Lewis Cass' ideal of \"popular sovereignty\" - that each territory and state should choose its status of slavery for itself - has taken the Democratic nomination. On the other side, an old Whig hero makes his last run at office - Henry Clay will take the mantle one more time, even if his odds are slim.<p></p>Lewis Cass holds a healthy lead in the minds of most Americans, including those who supported Clay's candidacy four years ago. The 'Great Compromiser' must chip away at Cass' lead, or else once again be right rather than President.",
        scenarioImageUrl: "https://i.imgur.com/bn4Frse.png",
        credits: "by Terra",
        music: []
    }
