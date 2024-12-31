import ScenarioModel from "./engine/models/ScenarioModel";

const data : ScenarioModel = {
    "candidates": [
        {
            "id": 201,
            "firstName": "Franklin",
            "lastName": "Roosevelt",
            "party": "Democrat",
            "homeState": "New York",
            "color": "#4D4C99",
            "isPlayable": true,
            "issueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.5,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.5,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.15,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.4,
                    "weight": 1
                }
            ],
            "description": "<p>Franklin D. Roosevelt is the incumbent Governor of New York. A former ally and protégé of Al Smith, he instead seeks the nomination for himself this year. Whereas many in the Democratic Party seek to be cautious and conservative, Roosevelt instead believes his strong, progressive reforms in New York are in tune with the mood of the American people.</p><p>Governor Roosevelt believes that he can easily win both the nomination and the general election, hopefully ending over a decade of both Republican domination and fiscal conservatism. To do both, however, he will need to wage an aggressive campaign, keeping himself in touch with the public.</p>",
            "imageUrl": "https://itsastronomical.com/assets/1932/fdr.png",
            "runningMateIds": [1],
            "startingGlobalMultiplier": 1,
            "runningMate": false
        },
        {
            "runningMate": false,
            "id": 200,
            "firstName": "Herbert",
            "lastName": "Hoover",
            "party": "Republican",
            "homeState": "California",
            "color": "#C9566A",
            "isPlayable": true,
            "issueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.4,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.3,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.3,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.4,
                    "weight": 1
                }
            ],
            "description": "<p>When Mr. Hoover ran for and won the Presidency in 1928, he did so expecting four to eight years of smooth sailing. What he got, however, was anything but that. Instead of the first pitches, cross-country touring, and cheers that his predecessors were both given, Mr. Hoover has been the blame for a series of spiraling economic crises that began early in his term.</p><p>With this in mind, the President faces an uphill battle in 1932. Many have written off his chances of victory as early as 1930. His fate seems so bad, in fact, that it appears he will run largely unopposed for the Republican nomination - perhaps giving him full control of the GOP. Hoover must find some way - any way to convince the American people that he deserves another four years in office.</p>",
            "imageUrl": "https://itsastronomical.com/assets/1932/hoover.png",
            "runningMateIds": [6],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": false,
            "id": 202,
            "firstName": "Norman",
            "lastName": "Thomas",
            "party": "Union",
            "homeState": "North Dakota",
            "color": "#CC7A98",
            "isPlayable": false,
            "issueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.7,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.6,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.15,
                    "weight": 1
                }
            ],
            "description": "<p>William Lemke is a House Rep from North Dakota. A hefty amount of space barring is his only chance at the presidency.</p>",
            "imageUrl": "https://itsastronomical.com/assets/1932/lemke.jpg",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": false,
            "id": 203,
            "firstName": "Other",
            "lastName": "Candidates",
            "party": "Independent",
            "homeState": "Hell",
            "color": "#F2C679",
            "isPlayable": false,
            "issueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0,
                    "weight": 1
                }
            ],
            "description": "<p>Fortnite</p>",
            "imageUrl": "https://itsastronomical.com/assets/1932/byrd.jpeg",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": true,
            "id": 6,
            "firstName": "Charles",
            "lastName": "Curtis",
            "party": "Republican",
            "homeState": "Kansas",
            "color": "#FF0000",
            "isPlayable": false,
            "issueScores": [],
            "description": "'",
            "imageUrl": "https://itsastronomical.com/assets/1932/curtis.png",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": true,
            "id": 7,
            "firstName": "James",
            "lastName": "Harbord",
            "party": "Republican",
            "homeState": "New York",
            "color": "#FF0000",
            "isPlayable": false,
            "issueScores": [],
            "description": "'",
            "imageUrl": "https://itsastronomical.com/assets/1932/harbord.png",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": true,
            "id": 8,
            "firstName": "Hiram",
            "lastName": "Bingham",
            "party": "Republican",
            "homeState": "Connecticut",
            "color": "#FF0000",
            "isPlayable": false,
            "issueScores": [],
            "description": "'",
            "imageUrl": "https://itsastronomical.com/assets/1932/bingham.png",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": true,
            "id": 9,
            "firstName": "Hanford",
            "lastName": "MacNider",
            "party": "Republican",
            "homeState": "Kansas",
            "color": "#FF0000",
            "isPlayable": false,
            "issueScores": [],
            "description": "'",
            "imageUrl": "https://itsastronomical.com/assets/1932/macnider.png",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": true,
            "id": 205,
            "firstName": "William",
            "lastName": "Borah",
            "party": "Republican",
            "homeState": "Idaho",
            "color": "#FF0000",
            "isPlayable": false,
            "issueScores": [],
            "description": "'",
            "imageUrl": "https://itsastronomical.com/assets/1932/Borah.png",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": true,
            "id": 207,
            "firstName": "Arthur",
            "lastName": "Vandenberg",
            "party": "Republican",
            "homeState": "Michigan",
            "color": "#FF0000",
            "isPlayable": false,
            "issueScores": [],
            "description": "'",
            "imageUrl": "https://itsastronomical.com/assets/1932/Vandenberg.png",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": true,
            "id": 1,
            "firstName": "John",
            "lastName": "Garner",
            "party": "Democrat",
            "homeState": "Texas",
            "color": "#0000FF",
            "isPlayable": false,
            "issueScores": [],
            "description": "'",
            "imageUrl": "https://itsastronomical.com/assets/1932/garner.png",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": true,
            "id": 2,
            "firstName": "William Gibbs",
            "lastName": "McAdoo",
            "party": "Democrat",
            "homeState": "California",
            "color": "#0000FF",
            "isPlayable": false,
            "issueScores": [],
            "description": "'",
            "imageUrl": "https://itsastronomical.com/assets/1932/mcadoo.png",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": true,
            "id": 3,
            "firstName": "Carter",
            "lastName": "Glass",
            "party": "Democrat",
            "homeState": "Virginia",
            "color": "#0000FF",
            "isPlayable": false,
            "issueScores": [],
            "description": "'",
            "imageUrl": "https://itsastronomical.com/assets/1932/glass.png",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": true,
            "id": 4,
            "firstName": "Cordell",
            "lastName": "Hull",
            "party": "Democrat",
            "homeState": "Tennessee",
            "color": "#0000FF",
            "isPlayable": false,
            "issueScores": [],
            "description": "'",
            "imageUrl": "https://itsastronomical.com/assets/1932/hull.png",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": true,
            "id": 5,
            "firstName": "Albert",
            "lastName": "Ritchie",
            "party": "Democrat",
            "homeState": "Maryland",
            "color": "#0000FF",
            "isPlayable": false,
            "issueScores": [],
            "description": "'",
            "imageUrl": "https://itsastronomical.com/assets/1932/ritchie.png",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": true,
            "id": 210,
            "firstName": "Henry",
            "lastName": "Wallace",
            "party": "Democrat",
            "homeState": "Iowa",
            "color": "#0000FF",
            "isPlayable": false,
            "issueScores": [],
            "description": "'",
            "imageUrl": "https://itsastronomical.com/assets/1932/Wallace.png",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": true,
            "id": 214,
            "firstName": "James",
            "lastName": "Maurer",
            "party": "Socialist",
            "homeState": "Pennsylvania",
            "color": "#00C100",
            "isPlayable": false,
            "issueScores": [],
            "description": "'",
            "imageUrl": "'",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "runningMate": true,
            "id": 215,
            "firstName": "Other",
            "lastName": "Running Mates",
            "party": "Independent",
            "homeState": "Illinois",
            "color": "#FFFF00",
            "isPlayable": false,
            "issueScores": [],
            "description": "'",
            "imageUrl": "'",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        }
    ],
    "states": [
        {
            "id": 1000,
            "name": "Alabama",
            "abbr": "AL",
            "electoralVotes": 11,
            "popularVotes": 245354,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.65,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.55,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.8,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.7,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1002,
            "name": "Arizona",
            "abbr": "AZ",
            "electoralVotes": 3,
            "popularVotes": 118251,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.5,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.2,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1003,
            "name": "Arkansas",
            "abbr": "AR",
            "electoralVotes": 9,
            "popularVotes": 220562,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.65,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.55,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.8,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.7,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1004,
            "name": "California",
            "abbr": "CA",
            "electoralVotes": 22,
            "popularVotes": 2267966,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.4,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.15,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.35,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1005,
            "name": "Colorado",
            "abbr": "CO",
            "electoralVotes": 6,
            "popularVotes": 457696,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.3,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.1,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1006,
            "name": "Connecticut",
            "abbr": "CT",
            "electoralVotes": 8,
            "popularVotes": 594183,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.2,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.35,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.15,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.2,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1007,
            "name": "Delaware",
            "abbr": "DE",
            "electoralVotes": 3,
            "popularVotes": 112901,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1008,
            "name": "Florida",
            "abbr": "FL",
            "electoralVotes": 7,
            "popularVotes": 276252,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.65,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.55,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.8,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.7,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1009,
            "name": "Georgia",
            "abbr": "GA",
            "electoralVotes": 12,
            "popularVotes": 255590,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.65,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.55,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.8,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.7,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1011,
            "name": "Idaho",
            "abbr": "ID",
            "electoralVotes": 4,
            "popularVotes": 186625,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.3,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.4,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.4,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1012,
            "name": "Illinois",
            "abbr": "IL",
            "electoralVotes": 29,
            "popularVotes": 3407926,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.4,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.35,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.3,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1013,
            "name": "Indiana",
            "abbr": "IN",
            "electoralVotes": 14,
            "popularVotes": 1576927,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.2,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1014,
            "name": "Iowa",
            "abbr": "IA",
            "electoralVotes": 11,
            "popularVotes": 1036687,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.2,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.2,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1015,
            "name": "Kansas",
            "abbr": "KS",
            "electoralVotes": 9,
            "popularVotes": 791978,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.3,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.2,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.15,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1016,
            "name": "Kentucky",
            "abbr": "KY",
            "electoralVotes": 11,
            "popularVotes": 983063,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.25,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.2,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.35,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1017,
            "name": "Louisiana",
            "abbr": "LA",
            "electoralVotes": 10,
            "popularVotes": 268804,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.4,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.55,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.8,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.7,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1018,
            "name": "Maine",
            "abbr": "ME",
            "electoralVotes": 5,
            "popularVotes": 298444,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.55,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.15,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1019,
            "name": "Maryland",
            "abbr": "MD",
            "electoralVotes": 8,
            "popularVotes": 511054,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.15,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.25,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.1,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1020,
            "name": "Massachusetts",
            "abbr": "MA",
            "electoralVotes": 17,
            "popularVotes": 1580114,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.35,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.2,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1021,
            "name": "Michigan",
            "abbr": "MI",
            "electoralVotes": 19,
            "popularVotes": 1664765,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.45,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.15,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.15,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.25,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1022,
            "name": "Minnesota",
            "abbr": "MN",
            "electoralVotes": 11,
            "popularVotes": 1002843,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.55,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.25,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.1,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1023,
            "name": "Mississippi",
            "abbr": "MS",
            "electoralVotes": 9,
            "popularVotes": 146034,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.65,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.55,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.8,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.7,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1024,
            "name": "Missouri",
            "abbr": "MO",
            "electoralVotes": 15,
            "popularVotes": 1609894,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.4,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1025,
            "name": "Montana",
            "abbr": "MT",
            "electoralVotes": 4,
            "popularVotes": 216479,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.35,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.45,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.15,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.15,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1026,
            "name": "Nebraska",
            "abbr": "NE",
            "electoralVotes": 7,
            "popularVotes": 570137,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.3,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.25,
                    "weight": -0.2
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1027,
            "name": "Nevada",
            "abbr": "NV",
            "electoralVotes": 3,
            "popularVotes": 41430,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.2,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.5,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.5,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1028,
            "name": "New Hampshire",
            "abbr": "NH",
            "electoralVotes": 4,
            "popularVotes": 205520,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.2,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1029,
            "name": "New Jersey",
            "abbr": "NJ",
            "electoralVotes": 16,
            "popularVotes": 1629507,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.4,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.3,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.1,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1030,
            "name": "New Mexico",
            "abbr": "NM",
            "electoralVotes": 3,
            "popularVotes": 151606,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.2,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.15,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.15,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.25,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1031,
            "name": "New York",
            "abbr": "NY",
            "electoralVotes": 47,
            "popularVotes": 4688614,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.5,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.6,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.1,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1032,
            "name": "North Carolina",
            "abbr": "NC",
            "electoralVotes": 13,
            "popularVotes": 711501,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.65,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.55,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.8,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.7,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1033,
            "name": "North Dakota",
            "abbr": "ND",
            "electoralVotes": 4,
            "popularVotes": 256290,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.3,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.4,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.2,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1034,
            "name": "Ohio",
            "abbr": "OH",
            "electoralVotes": 26,
            "popularVotes": 2609728,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.3,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1035,
            "name": "Oklahoma",
            "abbr": "OK",
            "electoralVotes": 11,
            "popularVotes": 704633,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.4,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.55,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.2,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.2,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1036,
            "name": "Oregon",
            "abbr": "OR",
            "electoralVotes": 5,
            "popularVotes": 368808,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.3,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.15,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.15,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.2,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1037,
            "name": "Pennsylvania",
            "abbr": "PA",
            "electoralVotes": 36,
            "popularVotes": 2859177,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.15,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.45,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.15,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.15,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1038,
            "name": "Rhode Island",
            "abbr": "RI",
            "electoralVotes": 4,
            "popularVotes": 266170,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.35,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.25,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.15,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1039,
            "name": "South Carolina",
            "abbr": "SC",
            "electoralVotes": 8,
            "popularVotes": 104407,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.65,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.55,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.8,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.7,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1040,
            "name": "South Dakota",
            "abbr": "SD",
            "electoralVotes": 4,
            "popularVotes": 288438,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.3,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.35,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.2,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1041,
            "name": "Tennessee",
            "abbr": "TN",
            "electoralVotes": 11,
            "popularVotes": 390256,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.25,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.55,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.8,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.7,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1042,
            "name": "Texas",
            "abbr": "TX",
            "electoralVotes": 23,
            "popularVotes": 863426,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.25,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.55,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.8,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.7,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1043,
            "name": "Utah",
            "abbr": "UT",
            "electoralVotes": 4,
            "popularVotes": 206578,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.2,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.55,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.2,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1044,
            "name": "Vermont",
            "abbr": "VT",
            "electoralVotes": 3,
            "popularVotes": 136980,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.15,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.6,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.2,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1045,
            "name": "Virginia",
            "abbr": "VA",
            "electoralVotes": 11,
            "popularVotes": 297942,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.6,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.55,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.8,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.7,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1046,
            "name": "Washington",
            "abbr": "WA",
            "electoralVotes": 8,
            "popularVotes": 614814,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.35,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.15,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.15,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.35,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1048,
            "name": "West Virginia",
            "abbr": "WV",
            "electoralVotes": 8,
            "popularVotes": 743774,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.15,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.1,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1049,
            "name": "Wisconsin",
            "abbr": "WI",
            "electoralVotes": 12,
            "popularVotes": 1114808,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.35,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": -0.35,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": -0.15,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": -0.25,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        },
        {
            "id": 1050,
            "name": "Wyoming",
            "abbr": "WY",
            "electoralVotes": 3,
            "popularVotes": 96962,
            "baseIssueScores": [
                {
                    "issueId": 100,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 101,
                    "issueScore": -0.2,
                    "weight": 1
                },
                {
                    "issueId": 102,
                    "issueScore": 0.45,
                    "weight": 1
                },
                {
                    "issueId": 103,
                    "issueScore": 0.15,
                    "weight": 1
                },
                {
                    "issueId": 104,
                    "issueScore": 0.1,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 200,
                    "amount": 0.8899999999999999
                },
                {
                    "candidateId": 201,
                    "amount": 1.41
                },
                {
                    "candidateId": 202,
                    "amount": 0.00166
                },
                {
                    "candidateId": 203,
                    "amount": 0.0062
                }
            ]
        }
    ],
    "issues": [
        {
            "id": 100,
            "name": "Great Depression",
            "description": "",
            "stances": [
                "Not Hit",
                "Slightly Hit",
                "Slightly Hit",
                "Hit Hard",
                "Hit Hard",
                "Hit Very Hard",
                "Hit Very Hard"
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
            "id": 101,
            "name": "Foreign Policy",
            "description": "",
            "stances": [
                "Strongly Isolationist",
                "Isolationist",
                "Slightly Isolationist",
                "Moderate",
                "Slightly Internationalist",
                "Internationalist",
                "Strongly Internationalist"
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
            "id": 102,
            "name": "Economy",
            "description": "",
            "stances": [
                "Very Conservative",
                "Conservative",
                "Slightly Conservative",
                "Moderate",
                "Slightly Liberal",
                "Liberal",
                "Very Liberal"
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
            "id": 103,
            "name": "Prohibition",
            "description": "",
            "stances": [
                "Dry",
                "Dry",
                "Slightly Dry",
                "Moderate",
                "Slightly Wet",
                "Wet",
                "Wet"
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
            "id": 104,
            "name": "Trade",
            "description": "",
            "stances": [
                "Very Protectionist",
                "Protectionist",
                "Leans Protectionist",
                "Moderate",
                "Leans Free Trade",
                "Free Trade",
                "Strongly Free Trade"
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
            "playerId": 201,
            "questions": [
                {
                    "id": 1000,
                    "description": "After some instability across 1929, it appears that the New York Stock Exchange has begun to crash. Things are getting bad - last Thursday alone, the market lost over 11% of its value. The effects of such a crash may have global ramifications. You're up for re-election next year as Governor of New York - what on earth are you going to do?",
                    "answers": [
                        {
                            "id": 5000,
                            "description": "We have to show people that we're picking up the slack of the federal government. We'll be establishing programs under the state government to help provide employment and relief.",
                            "feedback": "This is a good way to pick up support after only narrowly winning in 1928. In any case, you glide to re-election easily, setting the stage for a 1932 campaign.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.7
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.3
                                }
                            ]
                        },
                        {
                            "id": 5001,
                            "description": "The upstate of New York isn't exactly friendly territory. We need to hammer in on appealing to this region - talking rural river improvements and agricultural prices, on top of economic relief will help me win re-election.",
                            "feedback": "“We thought you were acquainted only with Wall Street magnates” writes one man. Until now, Democrats did not have an upstate organization. Winning much of the rural upstate, you secure re-election by around 15%, setting the stage for your nomination. ",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.2
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.32
                                }
                            ]
                        },
                        {
                            "id": 5002,
                            "description": "We have to start contrasting myself to Hoover from the get-go. My re-election bid will be anti-Hoover more than anything else, to really get people thinking about 1932.",
                            "feedback": "Unfortunately, this doesn't pair with your brand of authentic politics. People clearly know you've got ambitions, and so you don't win re-election by as large of a margin as you had wished.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.3
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1007,
                    "description": "It's not long after your victory in the Gubernatorial election before James Farley and Louis Howe begin asking you how to prepare for 1932. As the days go by, the bread lines get longer, and more banks close, it seems like an easy victory for any Democrat - yourself included. Where to begin?",
                    "answers": [
                        {
                            "id": 5016,
                            "description": "If the ship is righted in the next year, we will be in for a much more difficult campaign. We need to be careful and prepare for every contingency.",
                            "feedback": "It's good to prepare for the worst, even as you hope for the best. We'll see what happens over the next two years.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.025
                                }
                            ]
                        },
                        {
                            "id": 3058051,
                            "description": "Farley needs to travel cross-country to gauge my level of support. Smith, if he chooses to run, would lock up much of the northeast. We'll need the west and south to win this.",
                            "feedback": "Farley's findings show intense optimism for the campaign. From California to Illinois, you are the consensus.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0425
                                }
                            ]
                        },
                        {
                            "id": 3058052,
                            "description": "We need to clear an avenue for ourselves early - let's focus on the issues of the day, from the economy, prohibition, to tariffs, and foreign policy.",
                            "feedback": "Unfortunately, such a move alienates certain factions from you. A large setback at a time where you need to be making allies.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.035
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1008,
                    "description": "With your former ally Al Smith beginning to move towards a bid, your opponents in the party begin to make themselves known. One such is Chairman John Raskob, an ally of Smith. He has just proposed a DNC meeting to advise the eventual convention on what position to take on prohibition. The push to make prohibition an issue will hurt you - what will you do?",
                    "answers": [
                        {
                            "id": 5020,
                            "description": "Let my allies continue the fight. I must stay in this \"damp\" faction within the party to avoid dividing my alliance. ",
                            "feedback": "Thankfully, Smith and Raskob's proposals are defeated, providing you with more breathing space as you seek the nomination.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 104,
                                    "stateId": -1,
                                    "amount": -0.65
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.15
                                }
                            ]
                        },
                        {
                            "id": 5021,
                            "description": "We need to make ourselves clear here. Let's push back against the Committee and make sure the convention decides the outcome.",
                            "feedback": "Advisors believe that this is exactly what Smith and his allies wanted. Your ambiguity on the issue has been a major benefit.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": -0.6
                                }
                            ]
                        },
                        {
                            "id": 5022,
                            "description": "We need to make ourselves clear here. Prohibition is not popular anymore - we would benefit more by letting this simply pass.",
                            "feedback": "Advisors believe that this is exactly what Smith and his allies wanted. Your ambiguity on the issue has been a major benefit.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.05
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1028,
                    "description": "It's now early 1932, and you've officially declared your candidacy for President. Your goal for now is to enter the convention with as many primary delegates as possible - while your main opponent in most places will be Governor Smith. What will your strategy be?",
                    "answers": [
                        {
                            "id": 5093,
                            "description": "Mr. Smith believes that I cannot compete in places like New Jersey or Massachusetts, so we shall do just that. I want Farley and others in both states.",
                            "feedback": "Unfortunately, you leave the door wide open for Smith to hold you to a close margin in Pennsylvania as he easily carries both New Jersey and Massachusetts.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1029,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1020,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 5094,
                            "description": "Let's try to win California - with the vote split there, I believe we could secure a plurality between Smith and Cactus Jack.",
                            "feedback": "You manage to outpoll Smith, and achieve second place. However, Speaker Garner is able to secure first place.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1004,
                                    "amount": 0.0075
                                }
                            ]
                        },
                        {
                            "id": 3058410,
                            "description": "Favorite sons are our biggest possible threat - in Illinois and Ohio. These delegate-rich states would provide us with a lot.",
                            "feedback": "Unfortunately, going to fight favorite sons is rarely a good strategy - it backfired spectacularly for McAdoo in 1924.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1012,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1034,
                                    "amount": 0.02
                                }
                            ]
                        },
                        {
                            "id": 3058417,
                            "description": "The answer is simple here - let's go in on Pennsylvania. We may not be able to secure New York's delegates, but the second largest state is a must-win for us.",
                            "feedback": "Thankfully, you are able to win here 57%-43% against Mr. Smith. You will gain plenty of delegates from this tactical move.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1037,
                                    "amount": 0.0075
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1014,
                    "description": "You've managed to reach a majority on the first ballot. Unfortunately, however, you haven't made it all the way there yet. You're no stranger to bargains and deals - and there are, unusually, many options - the only question is who to seek out?",
                    "answers": [
                        {
                            "id": 5040,
                            "description": "The cleanest deal here is to have my men go to Texas' delegation - do whatever must be done to get Cactus Jack to drop out.",
                            "feedback": "The cost for such a deal is fairly clear - the Vice Presidency. You will be obliged to honor such an offer.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.5
                                }
                            ]
                        },
                        {
                            "id": 5041,
                            "description": "We can easily bypass Texas - California's delegation is still enamored with their Wilsonian hero. Perhaps a place on the ticket would suffice?",
                            "feedback": "Many of McAdoo's supporters felt he was cheated out of the nomination twice. The running mate position brings them enough solace.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": -0.3
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.02
                                }
                            ]
                        },
                        {
                            "id": 5042,
                            "description": "Harry Byrd of Virginia doesn't seem too pleased with my candidacy - perhaps a more conservative Vice President can smooth things over?",
                            "feedback": "Your men offer Byrd the running mate slot. He declines, and instead requests Carter Glass to take the position.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.5
                                }
                            ]
                        },
                        {
                            "id": 3058404,
                            "description": "We don't need direct deals. Let's push for an ally, a southerner, on the ticket to get me over the top.",
                            "feedback": "Mr. Cordell Hull has been an ally of your bid for the White House. Thankfully, you have the votes for both you and him to be nominated.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 101,
                                    "stateId": -1,
                                    "amount": 0.6
                                }
                            ]
                        },
                        {
                            "id": 3058405,
                            "description": "The Governor of Maryland's got some scattered support. Even if he is a conservative, I think we can get him on board and over the top.",
                            "feedback": "Albert Ritchie is far from your first choice, but he at least seals the deal for your nomination.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.4
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.2
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1006,
                    "description": "With your nomination secured, many of your advisors believe you should visit the convention personally to accept the nomination. If done, this would be an absolutely unprecedented move, never before in the history of the party. Is this something you wish to do?",
                    "answers": [
                        {
                            "id": 5013,
                            "description": "They have nominated me, and I want to thank them. We will break traditions and leave it to the Republican Party, far more skilled in that part, to break promises. ",
                            "feedback": "As your plane lands, the people of the convention get more and more excited. They are excited for you to win in November!",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.005
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1015,
                                    "amount": 0.03
                                }
                            ]
                        },
                        {
                            "id": 5014,
                            "description": "We must not get complacent here. The press could be hostile to such a move. But I want a telegram to quickly be sent, to show my appreciation.",
                            "feedback": "Your advisors believe that you missed an opportunity here to excite a party that has been out of power for nearly 16 years.",
                            "answerEffects": []
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1001,
                    "description": "As you begin to pen up an acceptance letter, what shall you say to the Democratic Convention as you thank them for the nomination?",
                    "answers": [
                        {
                            "id": 5003,
                            "description": "With the convention voting for the repeal of prohibition, it is time to make my position known: this convention wants repeal, your candidate wants repeal, and America wants repeal!",
                            "feedback": "Loud cheers from the audience! A wet man through and through!",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": 0.8
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.005
                                }
                            ]
                        },
                        {
                            "id": 50030,
                            "description": "We must appeal to the progressive mood of the country: We must be a party of liberal thought, of\nplanned action, of enlightened international outlook, and of the greatest good to the greatest number of people. I pledge a New Deal for the American people.",
                            "feedback": "Many of your allies believe that you're in tune with the nation at large with language like this.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 3058207,
                            "description": "We must focus on unifying the party. In times like these, I call for cutting the administrative costs of government and for the rapid reduction of tariffs. These positions are consensus among this party, and this nation. ",
                            "feedback": "Many of your advisors believe you could have been more bold here. ",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": 0.4
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1011,
                    "description": "As expected, President Herbert Hoover has been renominated, despite his sheer unpopularity. A \"draft Coolidge\" campaign failed spectacularly as Hoover faced little opposition. How will you address him throughout the campaign?",
                    "answers": [
                        {
                            "id": 5030,
                            "description": "As I have during the primaries, I will aggressively take the attack to Hoover. We will contrast his lack of a response with my desire to take action.",
                            "feedback": "Many Americans are looking for more positive solutions to the Great Depression, and want to feel hope rather than mudslinging.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 5031,
                            "description": "We will all but ignore the President, and instead focus on my policies and platform. The past few years can speak for themselves - we need new leadership soon.",
                            "feedback": "This is a fairly safe strategy. It stands to reason that the American people are tired of negativity.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0075
                                }
                            ]
                        },
                        {
                            "id": 5032,
                            "description": "We'll dig in deep and attack Hoover for everything - from the tariffs he signed into law, to the corporate favoriting of his policies. Hoover is unpopular, and we have to emphasize this.",
                            "feedback": "Many Americans are looking for more positive solutions to the Great Depression, and want to feel hope rather than mudslinging.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.3
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1009,
                    "description": "A variety of industries have been damaged and shuttered by the economic crisis. Perhaps one of the most apparent is banks - the failures of banks has sent domino effects across other industries. As President, what action would you take regarding the economy?",
                    "answers": [
                        {
                            "id": 5024,
                            "description": "We need to be careful with which banks we bail out. Intervening too much in the free market could make the situation far worse.",
                            "feedback": "This is very similar to Hoover's rhetoric on the matter. This is not a good look for you.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.56
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 202,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.4
                                }
                            ]
                        },
                        {
                            "id": 5025,
                            "description": "We need to act quickly on this matter. I will swiftly enact measures to help save more banks from failing. What the current administration is doing is not sufficient. ",
                            "feedback": "Many Americans agree with you and your platform on this matter. This is also a good and subtle way to attack Hoover's failures.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.005
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 5026,
                            "description": "Of course, we do need to bail out the banks. However, we must also address those that the bank failed, such as agriculture or manufacturing. ",
                            "feedback": "To some critics, this sounds socialist in nature. Hoover does not hesitate to attack you for this.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.9
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 202,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.1
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1038,
                    "description": "Some advisors believe you may see success by widespread use of the radio during your campaign. Is this something you are interested in doing?",
                    "answers": [
                        {
                            "id": 5127,
                            "description": "Of course. While Governor, I made many radio broadcasts to gain support. I don't see how this would be much different.",
                            "feedback": "Many believe that this was a genius idea. You gain support nationally with such a decision.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0125
                                }
                            ]
                        },
                        {
                            "id": 5128,
                            "description": "Let's use the radio to try to emphasize our policy positions. We'll use short ads to talk about our stances on the economy, prohibition, and trade. ",
                            "feedback": "You're able to articulate your stance on the matters of the day nationally. Good idea.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 104,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 5129,
                            "description": "Radio was a nice idea in New York, but the stakes here are higher. Let's focus on more traditional campaigning in the meantime.",
                            "feedback": "Many advisors believe you're missing a good opportunity here.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1016,
                    "description": "Tragedy struck when military forces in DC moved to clear encampments set up by the Bonus Army, a group of protesters seeking to gain their service bonuses early. Hundreds have been injured, and a few have died. Do you have a reaction?",
                    "answers": [
                        {
                            "id": 3058324,
                            "description": "This is unfortunate. I send my condolences to their loved ones. ",
                            "feedback": "No one will say it out loud, but this move helps you for certain. Hoover's reputation is self-imploding.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 3058326,
                            "description": "I will attack Hoover for such a heavy-handed response to peaceful protesters. I will restore respect for our troops once I am elected.",
                            "feedback": "Your attempts to add to the attacks don't really resonate with people.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.04
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
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
                    "id": 1021,
                    "description": "Prohibition has been a tricky issue for Democrats to navigate over the past decade. However, it's becoming clear as ever that the popularity of the amendment and the Volstead Act have shrunk as the 1920s roared on. What is your stance on prohibition?",
                    "answers": [
                        {
                            "id": 5067,
                            "description": "The Democratic platform calls for a full repeal of prohibition. I think now would be a good time for a beer!",
                            "feedback": "This is the expected answer. Loud cheers from the crowd! A wet man through and through!",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": 0.7
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 202,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.05
                                }
                            ]
                        },
                        {
                            "id": 5068,
                            "description": "Prohibition has helped keep our nation morally sound. I do not believe it would be wise for us to move towards its repeal.",
                            "feedback": "Until you said this, there were wet Republicans teetering towards supporting you such as Pauline Sabin. Unfortunately, you've driven them away.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": -0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.05
                                }
                            ]
                        },
                        {
                            "id": 5069,
                            "description": "I believe that this issue is best left in the hands of each state. I would support a constitutional amendment providing the power to regulate such drinks to the states. ",
                            "feedback": "The prohibition debate has wets and dries. This middle ground answer satisfies neither.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": 0.4
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                }
                            ]
                        },
                        {
                            "id": 3058436,
                            "description": "I support a repeal of prohibition, as it has driven up the levels of crime across cities nationwide. We need to take the power of alcohol out of the hands of criminals and into the hands of bartenders and good Americans.",
                            "feedback": "This is a great way to angle your support for repeal.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0065
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1023,
                    "description": "During the campaign, you've discussed your plans for a \"New Deal\" for the American people. Is there any one policy proposal you would like to emphasize to get people to support you?",
                    "answers": [
                        {
                            "id": 5075,
                            "description": "I stand for the swift repeal of the Smoot-Hawley tariffs. In it's place, we will reform the system to promote trade and allow for more accessible products to be available.",
                            "feedback": "Promising to repeal Smoot-Hawley can't be a bad idea.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 104,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0075
                                }
                            ]
                        },
                        {
                            "id": 5076,
                            "description": "If elected, I will propose an Emergency Banking law, alongside a bank holiday in order to stabilize the system. From there, we will regulate and ensure the stability of the system through legislation.",
                            "feedback": "The Glass–Steagall act passed this year seems to be just the beginning, according to both men. They'd like to save banks by regulating them.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.7
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0075
                                }
                            ]
                        },
                        {
                            "id": 5077,
                            "description": "In order to drop unemployment, I am proposing a Public Works Administration, in order to give people work and improve the quality of roads, schools, bridges, dams, and other things.",
                            "feedback": "The promise of new jobs makes many concerned Americans listen to you more and more.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 3058441,
                            "description": "I will enact temporary measures to pause our gold standard. This will help us input more money into the economy.",
                            "feedback": "This will likely help the economy, but the effects are tricky to explain to your average voter.",
                            "answerEffects": []
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1020,
                    "description": "With Hoover's numbers struggling, there are two main places to pick up voters. Which is more important to you - appealing to urban voters and building upon Smith's coalition, or making gains with rural voters?",
                    "answers": [
                        {
                            "id": 5063,
                            "description": "If it comes to it, states like Illinois, Ohio, New York, and Michigan provide far more for us electorally than Wyoming or the Dakotas. I'm afraid that the choice here is clear.",
                            "feedback": "It's good to play it safe, all things considered. Who knows what could happen between now and election day?",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": -0.7
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1012,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1021,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1034,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1037,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 5064,
                            "description": "We can afford to campaign in smaller states - both in New England and out west. We've got most of the big city states locked up anyway.",
                            "feedback": "Given your lead, perhaps it wouldn't hurt to take some risks, for downballot's sake.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1005,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1011,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1014,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1015,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1018,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1025,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1026,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1027,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1028,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1033,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1035,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1044,
                                    "amount": 0.01
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1022,
                    "description": "We are fourteen years removed from the end of the Great War and sitting in an international financial crisis. Although the population remains mostly isolationist, the issue of foreign policy still very much so affects the nation's economic health. The Smoot-Hawley tariff, for instance, has terrorized international trade and has exacerbated the crisis at home and abroad. What would be the stance of a potential Roosevelt administration?",
                    "answers": [
                        {
                            "id": 5071,
                            "description": "The removal of this abominable tariff. Not only has it been the position of the Democratic party throughout the past century, this tariff in particular has ravaged our nation and worsened our economic well being tenfold. Outside of that, I believe we should speak of the United States being a symbol of hope to the rest of the world, and to those languishing under the governments of tyrants.",
                            "feedback": "Destroying the tariff is a no-brainer. However, the end of this comment leaves isolationists uneasy.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 101,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 104,
                                    "stateId": -1,
                                    "amount": 0.6
                                }
                            ]
                        },
                        {
                            "id": 3058499,
                            "description": "I believe we should emphasize our commitment to non-intervention in Central and South America first and foremost. The United States has no reason to harm its good standing with fellow nations of the New World, and therefore I want to put forth a “Good Neighbor” policy; so that the United States may walk hand in hand with the fellow free nations of the New World.",
                            "feedback": "This does not mention the biggest mistake of the Hoover presidency, nor does it calm isolationists' nerves. However, the people of the Americas are very happy to hear their will be no more intervention from the United States in their political affairs.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 101,
                                    "stateId": -1,
                                    "amount": -0.6
                                }
                            ]
                        },
                        {
                            "id": 3058503,
                            "description": "The removal of this abominable tariff. Not only has it been the position of the Democratic party throughout the past century, this tariff in particular has ravaged our nation and worsened our economic well being tenfold. Besides that, we should remain silent on most issues involving foreign policy, so as to not rock the boat. ",
                            "feedback": "Destroying the tariff is a no-brainer, politically. It's unusual for a tariff to be so widely unpopular in such a fashion.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 104,
                                    "stateId": -1,
                                    "amount": 0.6
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1030,
                    "description": "The topic of civil rights and black-related issues has long been a rather stagnant issue - Republicans win the vast majority of black voters while Democrats win largely white-only southern elections. Some advisors believe that Hoover's unpopularity will allow you to pick up black voters up north. What do you think?",
                    "answers": [
                        {
                            "id": 3058273,
                            "description": "We can afford to shave a few points off of the south if it means we can make progress up north. I'm willing to send overtures to northern blacks in subtle ways.",
                            "feedback": "It might not be a bad idea to let cultural issues take a back seat during this campaign.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1012,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1000,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1003,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1008,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1009,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1017,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1023,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1032,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1035,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1039,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1041,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1042,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1045,
                                    "amount": -0.03
                                }
                            ]
                        },
                        {
                            "id": 3058274,
                            "description": "Yes. It's unlikely the south will vote for Hoover anyway. We have a lot of room to act here, to encourage black voters to turn out for us. What's the worst that can happen?",
                            "feedback": "Polls seem to indicate some downturn in the south. Not enough to lose you the state - but some Hoovercrats down south may stick with him.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1000,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1003,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1008,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1009,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1017,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1023,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1032,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1035,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1039,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1041,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1042,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1045,
                                    "amount": 0.05
                                }
                            ]
                        },
                        {
                            "id": 3058275,
                            "description": "My hands are tied - I relied on the south to bring me the nomination. I will have to rely on them to secure me the election. Look at what happened to Smith.",
                            "feedback": "Black voters up north are rightfully annoyed. Advisors believe you missed a good opportunity here.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1000,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1003,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1008,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1009,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1017,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1023,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1032,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1035,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1039,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1041,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1042,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1045,
                                    "amount": 0.075
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1029,
                    "description": "For years, the cold climate has meant Maine holds its local elections in September, instead of November. The saying has long gone then, \"as Maine goes, goes the nation.\" In a Republican state this has been predictive for years, but in a shock, Democrats have won the governor's mansion and two out of the three House seats there. Perhaps we can make ground in more states than expected. Should we focus our efforts in new ground?",
                    "answers": [
                        {
                            "id": 5097,
                            "description": "New England has for years been the homeland of the Republican Party. This proves we can crack their stranglehold on it. We shall head all the way to Boston and stump up in Bangor. ",
                            "feedback": "For the first time this election, Republicans seem nervous, as Hoover heads on the stump for the first time. He darkly warns Iowa of the carnage you could unleash on every man of sense in this country. You figure you may not be such good friends anymore",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1020,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1018,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 3058485,
                            "description": "No reason to take any risks-it's still anyone's game. Smith's men still refuse to fall in line, so let's make sure we turn out every voter we can in New York.",
                            "feedback": "For the first time this election, Republicans seem nervous, as Hoover heads on the stump for the first time. He darkly warns Iowa of the carnage you could unleash on every man of sense in this country. You figure you may not be such good friends anymore",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 3058489,
                            "description": "Michigan hasn't gone Democratic since 1852, but things there look better than ever. Let's spend more time in the Inner Midwest and crack their hold on the region.",
                            "feedback": "For the first time this election, Republicans seem nervous, as Hoover heads on the stump for the first time. He darkly warns Iowa of the carnage you could unleash on every man of sense in this country. You figure you may not be such good friends anymore",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1021,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 3058493,
                            "description": "We haven't yet been to the Far West, but they may still be loyal to Hoover. Let's see San Francisco, and see if we can change Los Angeles' mind.",
                            "feedback": "For the first time this election, Republicans seem nervous, as Hoover heads on the stump for the first time. He darkly warns Iowa of the carnage you could unleash on every man of sense in this country. You figure you may not be such good friends anymore",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1004,
                                    "amount": 0.01
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1032,
                    "description": "Hoover has continuously said that recovery is \"just around the corner,\" and he has continuously been wrong. Cities cannot pay their bills. Factories bleed employees. Hoover, incredulously, blames you for this, saying that businesses fear your election and that your party has ruined the economy with rampant spending-and that you would ruin it further with needless inflation. How will you take the attack to his economic record?",
                    "answers": [
                        {
                            "id": 5107,
                            "description": "What more could the millions of unemployed lose? How much further into bankruptcy could farmers and businessmen fall? The President, in desperation, resorts to the breeding of fear. I go on to pledge action to make things better.",
                            "feedback": "A leak from the president's camp. \"We are opposed by 10,000,000 unemployed, 10,000 bonus marchers, and 10-cent corn. Is it any wonder that the prospects are dark?”",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.5
                                }
                            ]
                        },
                        {
                            "id": 5108,
                            "description": "For the past four years the President has centralized our government and ballooned our spending in service of a perverse socialist system for the wealthiest among us. I pledge to will return to balanced budgets and sound fiscal policy, so long as it is not at the expense of starving people.",
                            "feedback": "Your brain trust of advisors loathes this new centrist tack, but the campaign is no place to act a schoolmarm. Promising some stability will allay many businessmen's fears, as long as nobody holds you to it.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.1
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 202,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 3058519,
                            "description": "The President hopes to shift the blame, claiming this Depression is the fault of bankers in Britain or France. Doesn't he realize that he failed to veto Smoot-Hawley? Doesn't he realize that he has been the chief manager of our economy for the past four years?",
                            "feedback": "Hoover's choice to defend the Smoot-Hawley Tariff in a farm state like Iowa should not go unpunished. But there may be more to it than that-rumor has it that Senator Smoot has been stumping harder in Utah for re-election.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 104,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.005
                                }
                            ]
                        },
                        {
                            "id": 3058523,
                            "description": "Hoover entered the White House with total control over the Executive and Legislative branches, and here we sit with 25% unemployment. We might say that he has staffed the Executive with the Four Horsemen of the Apocalypse— Destruction, Delay, Deceit, and Despair.",
                            "feedback": "Hoover has viciously attacked your party as a whole for causing the crash, an argument few believe. It's done quite a lot to rally the old Stop Roosevelt forces around you.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.005
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1025,
                    "description": "Given the fiscal conservatism that Hoover has indulged in, many progressives in the Republican Party are now on the fence and willing to support you. Your advisors believe some big names like Norris or LaGuardia could help with support. What will you do to appeal to them?",
                    "answers": [
                        {
                            "id": 5083,
                            "description": "Given my already unstable coalition, adding Republicans to the mix may cause unneeded infighting. They are welcome to support me.",
                            "feedback": "Advisors believe you are missing a good opportunity here.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 5084,
                            "description": "Let's not focus on more typical sources of division. Instead, I'd like us to focus on economic policy and my plans for recovery to appeal to them.",
                            "feedback": "Norris, LaGuardia and others all confirm they are backing you. This can't possibly hurt your campaign.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0075
                                }
                            ]
                        },
                        {
                            "id": 3058536,
                            "description": "The Muscle Shoals Bill was a point of frustration with Hoover by many progressives. I will use that issue to win over their support.",
                            "feedback": "Norris, LaGuardia and others all confirm they are backing you. Even Hiram Johnson announces his support for you, as William Borah stays quiet.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0125
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1026,
                    "description": "Although there are many wealthy men who back you-Hearst, Owen Young, and more, one of your wealthiest backers, Bernard Beruch, says you have more to fear. He says that the rich and wealthy fear and loathe your candidacy, and you need to calm their nerves. How can you get business back on your side?",
                    "answers": [
                        {
                            "id": 5086,
                            "description": "For me, it's rather simple. The people should judge me by the enemies I have made.",
                            "feedback": "Henry Ford openly states that some factories will shut down if you're elected. The laborers, however, don't seem to care. Perhaps somebody does need to stick it to the boss.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0075
                                }
                            ]
                        },
                        {
                            "id": 3058253,
                            "description": "Bernard should send a very clear message. The businessmen are better off dealing with me, than with real radical change that the socialists could inflict if Hoover's course is allowed to continue.",
                            "feedback": "It's cold comfort for the industrial class, but with stock market reports still dismal, it's an easy argument to accept. It doesn't stop Henry Ford from claiming \"dark forces\" support your candidacy. Whatever those may be.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.3
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.3
                                }
                            ]
                        },
                        {
                            "id": 3058256,
                            "description": "Well we can say different things in different places. We're headed to Pittsburgh, a Republican city. I can preach the virtues of abalanced budget and deficit reduction there, and carry on as normal.",
                            "feedback": "You visit Pittsburgh and speak at length about your commitment to fiscal responsibility, and the local Republicans stomp the floor. When you reach Cleveland at the next stop you're speaking of federal jobs insurance as normal.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.035
                                }
                            ]
                        },
                        {
                            "id": 3058259,
                            "description": "Hoover's conduct is abysmal-he campaigns on a gospel of fear! He has given millions to his wealthy cronies who now pledge to fire their employees if I win. It's incredibly shameful of the President.",
                            "feedback": "James Cox, your 1920 ticket mate, returns from the dead to put it pithily. If a man is sleeping on a haystack, you can't get much out of threatening to kick him off the bed.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.2
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1033,
                    "description": "The reclusive President, forced out of his White House Prison, snarls at the press, and the race gets darker. His men spread rumors that your illness in the early 20s was something darker than polio. They claim you're still ill, perhaps due to the lasting impact of syphilis, cancer, or depression. The press is loathe to take photos of you at your lowest, avoiding taking photos of you when you fell, but Hoover's whisper campaign continues to make an issue of your health. Can we combat this? ",
                    "answers": [
                        {
                            "id": 5111,
                            "description": "We've been campaigning vigorously for the whole year. I think that, more than anything, disproves that silly rumor that I can't walk.",
                            "feedback": "You've doubled your campaign schedule against Hoover, making dozens of stops every week. Hoover has only just left his shell, and if he says he can't keep up against a cripple that's on him.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0075
                                }
                            ]
                        },
                        {
                            "id": 5112,
                            "description": " I don't have any interest in talking about my illness at all. It isn't a story. Period. If Eleanor wants to talk about it she can, but I have no interest.",
                            "feedback": "A reporter asks Eleanor at a public meeting how your illness has affected you. She thinks for a moment. \"Anyone who has gone through great suffering is bound to have a greater sympathy and understanding of the problems of mankind.\"",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.6
                                }
                            ]
                        },
                        {
                            "id": 51120,
                            "description": "The President should be awfully sorry he's spreading rumors about my illness. I think it's a shamefully low thing for a man of his stature to do.",
                            "feedback": "Hoover doesn't look presidential doing it, but you're fostering more inquiry into your health, as more papers report on how tightly you cling onto your son's arm when standing, on the metal braces on your legs. More and more people are beginning to notice something isn't right.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 3058514,
                            "description": "We have a pamphlet prepared about my health with my doctor's notes giving me a clean bill of health. Just release that and we'll get through.",
                            "feedback": "The pamphlet is released, and most papers accept it in good faith. It doesn't, however, stop the occasional idle speculation on why you always grip your podium so tightly when speaking, something even your most ardent admirers cannot ignore.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0075
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1034,
                    "description": "After the convention, Al Smith refused to waver. His delegates walked out, and he's thus far refused to endorse you. His reasons are purely personal-he feels you didn't take his advice enough as Governor of New York. He has a stranglehold on New York's Democratic Party, and your failure to mend relations could lose you the state. How can you make peace with Al?",
                    "answers": [
                        {
                            "id": 5114,
                            "description": "The New York Democratic Convention is coming up, and Al will certainly be there. I'll make an appearance and hopefully he'll realize we can't throw it to Hoover.",
                            "feedback": "As you're sitting at the convention, Albert finally gives in and stops by to say hi. A nearby reporter sees him greet you, assumes it's friendly, and the headline says he endorsed you. Lucky break.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 5115,
                            "description": "At the end of the day Al is just angry I haven't always been warm with him. I'll give him a call, talk to him about the election, ask him about how he tried to handle Hoover, and call it a day.",
                            "feedback": "When Smith tells you you're far too reliant on rural voters, you unintentionally scoff, infuriating Al. No endorsement is forthcoming, and the gears of the New York Dems machine don't turn.",
                            "answerEffects": []
                        },
                        {
                            "id": 5116,
                            "description": "Smith knows that at heart there's nothing radical about this platform. We aren't going to overthrow the whole system, and if we keep pressing that point, he'll get the message that we are safe to endorse.",
                            "feedback": "You continue a centrist turn of rhetoric, disheartening your top advisors and satisfying business. Smith, to his credit, gets the memo and warmly endorses your candidacy.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 3058533,
                            "description": "We have a common enemy, Hoover. He waged a wretched, discriminatory campaign against Albert, and he slanders our whole party. I'll urge him to unite behind us and get it over with.",
                            "feedback": "Local New York officials grit their teeth as Smith tells them not help you. This feud was about more than the party. This is entirely personal, and with how hard Hoover has hit you lately he enjoys watching you squirm.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.0115
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1036,
                    "description": "You and the President have had clashing, often scattered views on government intervention in the economy. President Hoover bemoans your abandonment of \"classical liberalism\" while spending federal funds to save the economy. You call for a \"new liberalism\" where the government is active in the economy but claim he represents a kind of socialism for the wealthy. How would you actively describe yourself ideologically?",
                    "answers": [
                        {
                            "id": 5121,
                            "description": "I am a Christian and a Democrat - that's all.",
                            "feedback": "Ever the Sphinx, you continue to bedevil those who want to box you in. The best anyone can derive from this is that William Jennings Bryan was both of these things too.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.2
                                }
                            ]
                        },
                        {
                            "id": 3058472,
                            "description": "There are many political philosophers and politicians out there to borrow from. The Bolsheviks have weathered this storm well-certainly they have an idea or two to steal. Similarly so have the Italians. Whatever saves Americans from poverty is what I adhere to.",
                            "feedback": "Admitting you'd borrow ideas from Stalin and Mussolini does nothing to wave away charges that you are a socialist or worse. In times like this, however, many are willing to go for whatever works.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0075
                                }
                            ]
                        },
                        {
                            "id": 3058475,
                            "description": "In the last few years we have seen a total collapse in Americans' confidence in the free market system. I am a firm capitalist, who seeks only to save our system from its own excesses",
                            "feedback": "A new kind of capitalist perhaps, but nobody in recent years has commented on the successes of the free market. This is perhaps the best the people will get.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.7
                                }
                            ]
                        },
                        {
                            "id": 3058479,
                            "description": "I completely disavow radical causes such as socialism or communism, and believe anything and everything must be done to eliminate their place in America and on the global stage. My ideas are as classically American as anything else-it's the president who kneels to the altar of corporate socialism.",
                            "feedback": "A stern denial, one that alarms some on the Left in its ferocity. This is as close as you've ever gotten to campaigning to Hoover's right.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": -0.2
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 202,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.4
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1037,
                    "description": "Before your final visit, what issue would you like to focus on in the final few days of the campaign?\n",
                    "answers": [
                        {
                            "id": 5123,
                            "description": "I ask America to judge me by the enemies I have made. I am here to respond to the economic depression that has hit us all.",
                            "feedback": "This is a fantastic message to close on, given the focus of this issue.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.6
                                }
                            ]
                        },
                        {
                            "id": 5124,
                            "description": "The Prohibition issue has become a struggle for Republicans. I am calling for the repeal of the Volstead Act, to end the blight of crime on our cities.",
                            "feedback": "Prohibition is indeed far less popular than one could have imagined a few years ago.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": 0.8
                                }
                            ]
                        },
                        {
                            "id": 5125,
                            "description": "Large tariffs such as the Smoot-Hawley act have turned out economic situation into a disaster. I will ask Congress to promptly repeal such a tariff, so that trade can begin again and prices can be lowered.",
                            "feedback": "Promising to lower tariffs in a time like this can't be a bad position to take.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 104,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0075
                                }
                            ]
                        },
                        {
                            "id": 3058542,
                            "description": "I will continue my move away from more Jeffersonian \"small government\" principles of the Democratic Party, and continue to push us towards a party that responds to people's needs.",
                            "feedback": "Your campaign has been an incredibly ambitious one. Can it make it to the finish line?",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0075
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1035,
                    "description": "It's the final days. Hours left to go until history is made. You must make your final claim, choose a place to end this campaign. Where will you make your closing argument?",
                    "answers": [
                        {
                            "id": 3058211,
                            "description": "There's no place to go but home. Let's return to New York and make Madison Square Garden stomp the floor.",
                            "feedback": "The cries are deafening, as it seems the whole city arrives to watch you. You sit before them, looking at their haggard faces. Some are black, some are white, but all have spent four years without hope. These are your people.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.015
                                }
                            ]
                        },
                        {
                            "id": 3058213,
                            "description": "The Steel Belt is being strangled, and the workers suffer. Hoover thinks Pennsylvania is his country. Let's prove him wrong.",
                            "feedback": "You return to the White House to watch the results. Best of luck, Mr. President.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1037,
                                    "amount": 0.015
                                }
                            ]
                        },
                        {
                            "id": 3058220,
                            "description": "Hoover calls himself a proud son of Iowa, but nobody has been more hurt by his callous indifference than the farmers he grew up with. Let's tour the Farm Belt and show them the attention our President hasn't given them.",
                            "feedback": "Hungry faces stalk the plains, looking for a glimpse of you. It has been years since somebody in the White House spoke for them. In you, they look for hope.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1014,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1040,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1026,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1015,
                                    "amount": 0.03
                                }
                            ]
                        },
                        {
                            "id": 3058225,
                            "description": "New England is the longtime home of the Republican Party, yet even Vermont is struggling. I think Boston would be the perfect place to wrap up this election.",
                            "feedback": "When you speak at Harvard, you realize that you've brought more Irishmen to this hall than any school administrator ever had. They look up to you. Because of you, this will be their town.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1044,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1020,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1018,
                                    "amount": 0.015
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058067,
                    "description": "== CYOA ==",
                    "answers": [
                        {
                            "id": 3058144,
                            "description": "We are tied by the Neutrality Act, which is the law of the land. We will send whatever humanitarian aid we can, and attempt to ban arm sales to any nation aiding either side of the conflict. ",
                            "feedback": "This is the expected course to take here.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 101,
                                    "stateId": -1,
                                    "amount": 0.2
                                }
                            ]
                        },
                        {
                            "id": 3058148,
                            "description": "To allow the Nationalists to win would be a disaster for Europe and perhaps the Good Neighbor Policy. As President, I would hastily block arm sales to Germany and limit what American companies can sell.",
                            "feedback": "",
                            "answerEffects": []
                        },
                        {
                            "id": 3058149,
                            "description": "We are in no position to influence the events of Europe when our own house is not even in order. I do not support any kind of intervention.",
                            "feedback": "Regardless of the divided feelings of your party, if you're looking to win, staying with the mood of the public is key.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 101,
                                    "stateId": -1,
                                    "amount": -0.7
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058068,
                    "description": "From the floor of the convention hall, the scene is electric. This is not a gathering born of despair, but of the belief that the night will bring forth a leader, a vision, a path forward. Governor Roosevelt, the nation is waiting. What will you say to the people at this convention, to the party, and to America about why you should lead us into the future?",
                    "answers": [
                        {
                            "id": 3058127,
                            "description": "We are Americans, born of revolution, tempered by adversity, and driven always by the promise of a brighter future. I pledge to you a New Deal for the American people. We must try, and try again, until we succeed. And succeed we will.",
                            "feedback": "This is exactly what voters are looking to hear.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.8
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 3058443,
                            "description": "Farmers and workers, Northerners and Southerners. I promise you leadership that is both compassionate and prudent, steering our nation toward recovery with steady hands and a hopeful heart.",
                            "feedback": "This is exactly what voters are looking to hear.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.8
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 3058447,
                            "description": "To the farmer in Kansas, to the factory worker in Pittsburgh, to the teacher in a one-room schoolhouse in the Carolinas: I see you. I hear you. And I promise you this. Help is on the way. Together, we will write a new chapter in the story of this nation, a chapter of hope, of strength, and of triumph!",
                            "feedback": "This is exactly what voters are looking to hear.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.8
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 3058451,
                            "description": "No single man can shoulder the burdens we face alone. No single region, no single faction of our great party can claim the right to chart the course for all. Let us leave this hall tonight not as divided factions, but as a single party. ",
                            "feedback": "It's good to hit on party unity.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.8
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058546,
                    "description": "You've managed to reach a majority on the first ballot. Unfortunately, however, it looks like you might not make it to the 2/3rds required to win the nomination. Perhaps it was not to be...",
                    "answers": [
                        {
                            "id": 3058547,
                            "description": "Alas, I had hoped for the nomination. ",
                            "feedback": "Instead, it will go to Mr. Newton Baker, despite the decrying of Mr. Hearst. Perhaps this is for the best.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.04
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058550,
                    "description": "You've managed to reach a majority on the first ballot. Unfortunately, however, it looks like you might not make it to the 2/3rds required to win the nomination. Perhaps it was not to be...",
                    "answers": [
                        {
                            "id": 3058551,
                            "description": "Alas, I had hoped for the nomination. ",
                            "feedback": "Instead, it will go to Mr. Al Smith, with the convention weary and business startled by you.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1000,
                                    "amount": 0.4
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1003,
                                    "amount": 0.4
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1008,
                                    "amount": 0.2
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1009,
                                    "amount": 0.4
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1017,
                                    "amount": 0.4
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1023,
                                    "amount": 0.4
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1032,
                                    "amount": 0.2
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1039,
                                    "amount": 0.4
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1041,
                                    "amount": 0.2
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1042,
                                    "amount": 0.2
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1045,
                                    "amount": 0.2
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.03
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                }
            ]
        },

        {
            "playerId": 200,
            "questions": [
                {
                    "id": 1000,
                    "description": "After some instability across 1929, it appears that the New York Stock Exchange has begun to crash. Things are getting bad - last Thursday alone, the market lost over 11% of its value. The effects of such a crash may have global ramifications. What should be done, Mr. Hoover?",
                    "answers": [
                        {
                            "id": 5000,
                            "description": "We've seen this before in 1919. Confidence in the system is low - what we need is to continue to prove that our system is sound. I'll call business leaders to the White House to discuss ways to get us out of this slump.",
                            "feedback": "Wall Street bankers are already looking to restore confidence, but the effects of it appear to be waning - this is far more fundamental than past crashes.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.7
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.5
                                }
                            ]
                        },
                        {
                            "id": 5001,
                            "description": "Our financial foundations are far from sound. Speculation has been brought up stock prices to a ridiculous degree. To call for welfare would go against my principles, but we must get involved in the workings of the banking system to put in some types of guardrails to prevent mass failures.",
                            "feedback": "What happened on \"Black Thursday\" is unlikely to go away with a few regulations. It's an unprecedented crisis. But sending a clear message about the brokenness of the system may help stop some of the bleeding.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.2
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.3
                                }
                            ]
                        },
                        {
                            "id": 5002,
                            "description": "Well, darn. I don't want to have to do it, but maybe we should consider bailing out certain banks to prevent further spiraling. It'll be limited and carefully implemented, so as not to send a message of laziness to the country.",
                            "feedback": "This is bold, coming from you, and it does help to some degree. But there's a lot more that's going to need to be done to prevent this from continuing to spiral.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.4
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1007,
                    "description": "The fallout of the Wall Street crash has begun to rear its ugly head. Things have slowly gotten worse over the past half-year or so, but now many advisors warn you that bank runs and subsequent failures will continue to spiral nationally. What will you do?",
                    "answers": [
                        {
                            "id": 5016,
                            "description": "My God. All these lawmakers in my ears talking about cutting away our Gold Standard. We're not done for good, but we can follow in the footsteps of Britain - let's step away from it \"temporarily\". We're just taking short-term measures.",
                            "feedback": "A lot of advisors are unsure what effect this will have globally. But the American people are at least seeing you take action, especially as things are getting worse to some degree.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.25
                                }
                            ]
                        },
                        {
                            "id": 3058051,
                            "description": "Any collectivist solution on the matter of bank failures will only put us in a worse place. I'll call business leaders up to the White House again, to discuss ways to keep the banks across the country in a good spot.",
                            "feedback": "The calls for direct federal intervention grow louder. Instead, your attempts to have the private sector solve the problem seem to have little effect.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.425
                                }
                            ]
                        },
                        {
                            "id": 3058052,
                            "description": "I don't want to go into a solution... guns blazing. Let's form a commission, give it a few months, and see what the solution is here. We should avoid direct federal intervention unless absolutely necessary.",
                            "feedback": "As the commission begins its work, bank runs and subsequent failures begin to spring up nationally. The commission finds that some degree of federal involvement is going to be needed in order to solve this.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.35
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1008,
                    "description": "It's sitting there on your desk now. Brainstormed by Reed Smoot and Willis Hawley, the Tariff Act of 1930 seeks to both revitalize domestic business and stop the flow of American wealth out of the country. It'd be the greatest raising of tariffs since the controversial Tariff of Abominations back in 1828. The pen is in your hand. Will you sign it, or veto it?",
                    "answers": [
                        {
                            "id": 5020,
                            "description": "The blowback would be too hard. Sign it.",
                            "feedback": "Protectionism has long been a back-and-forth issue in America. But for some reason, you can tell it's different this time. Trade grinds to a halt, and the effects seem even worse than you could have imagined.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 104,
                                    "stateId": -1,
                                    "amount": -0.65
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.15
                                }
                            ]
                        },
                        {
                            "id": 5021,
                            "description": "Cutting off trade with the rest of the world would be the type of instability that could cause this slump to spiral further. Veto this thing. I don't care about the pressure from the rest of my party.",
                            "feedback": "Your allies in Congress are angry at you for taking such an unorthodox stance. But many economic columnists are grateful you refused to sign such a law into place.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 104,
                                    "stateId": -1,
                                    "amount": 0.35
                                }
                            ]
                        },
                        {
                            "id": 5022,
                            "description": "Veto it. But I will make it clear, I would like the agricultural aspects of the bill on my desk, in its own bill.",
                            "feedback": "Congress is enraged, but cobbles together a solution. Slight tariffs are raised, and while there's dissent from economists, it's not as bad as it could have become.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 104,
                                    "stateId": -1,
                                    "amount": -0.1
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.05
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1028,
                    "description": "When you were elected, you had sought to address the Farm Crisis of the 1920s - prices have been low, and so is demand. The Federal Farm Board was already established before the broader economic crisis began. Do you see any additional steps in your recovery plan?",
                    "answers": [
                        {
                            "id": 5093,
                            "description": "The Federal Farm Board's got a good idea - farmers are going to have to restrict their production on their own if they want to see prices raised. We've got far too many crops floating around to keep things sustainable.",
                            "feedback": "Farmers aren't going to listen to what you have to say, especially if you aren't giving them much in return. Volunteerism isn't going to do much work here.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 104,
                                    "stateId": -1,
                                    "amount": -0.5
                                }
                            ]
                        },
                        {
                            "id": 5094,
                            "description": "The Farm Board's proposing a lot. I don't agree with it all, but perhaps some regulations regarding overproduction can be put in place as a temporary measure.",
                            "feedback": "\"Temporary measures\" is becoming something of a slogan for your administration. Though it's hard to deny that farmers enjoy these measures, among other adjustments to help the medicine go down.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.2
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1005,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1011,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1014,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1015,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1022,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1024,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1025,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1026,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1027,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1033,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1035,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1036,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1040,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1043,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1046,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1049,
                                    "amount": 0.06
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1050,
                                    "amount": 0.06
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1014,
                    "description": "Special elections following the 1930 midterms have led to the Democratic Party capturing a majority in the House of Representatives, and essentially tying the United States Senate. Now, with an election year dawning, they have essentially forced your hand on negotiating a bipartisan bill to create a Lender of last resort to revitalize the economy. Do you want to get involved here?",
                    "answers": [
                        {
                            "id": 5040,
                            "description": "I will veto any collectivist effort by the United States Congress. This type of relief ought to be administered by local government and private businesses. Period.",
                            "feedback": "Congress overrides your veto with relative ease, in a rather sweeping and bipartisan manner. The agency itself is given a variety of powers to combat the depression, however.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.025
                                }
                            ]
                        },
                        {
                            "id": 5041,
                            "description": "Given how I'm the face of the Depression, I think it's best if I don't get too involved. I do want to sign the bill, however.",
                            "feedback": "The news writes about how you've signed into law a \"Reconstruction Finance Corporation\", given \"sweeping powers to revitalize the economy\". Voters are taking notes.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.3
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.02
                                }
                            ]
                        },
                        {
                            "id": 5042,
                            "description": "Getting bogged down in some veto battle would look bad on my part - let's negotiate with Garner, Watson, and Snell to get something good - or at least good-looking passed.",
                            "feedback": "With your veto pen prepared, Congress readies a watered-down version of the originally proposed bill. Business is happy, but Congress, and many Americans, are not. ",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.5
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1006,
                    "description": "Going into the election year, Vice President Charles Curtis is showing signs of wear, his health no longer as robust as it once was. While his experience and continuity lend stability to your administration, there are murmurs, both within the party and among the public, that a change on the ticket might invigorate the campaign and better align with the nation’s demands during these trying times. Will you replace your Vice President?",
                    "answers": [
                        {
                            "id": 5013,
                            "description": "Charles Curtis has been my steadfast partner in governance, and his years of service to the nation remain assets of immeasurable value. I have every confidence in his resolve and his ability to meet the challenges of another term.",
                            "feedback": "Most would expect you to retain your Vice President. He faces some opposition on the first ballot but is renominated.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1015,
                                    "amount": 0.03
                                }
                            ]
                        },
                        {
                            "id": 5014,
                            "description": "Hiram Bingham III of Connecticut is a man of remarkable vision and accomplishment, a figure whose career has demonstrated the heights of human endeavor and the depths of intellectual rigor.",
                            "feedback": "Bingham is an interesting fellow, and seems well equipped to campaign for the ticket in the fall.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1006,
                                    "amount": 0.03
                                }
                            ]
                        },
                        {
                            "id": 3058201,
                            "description": "In these uncertain times, the American people need men of such caliber, men who have faced adversity with unflinching resolve and emerged stronger for it. Such men include Lieutenant General James Harbord.",
                            "feedback": "Harbord could help you in the key swing state of New York, but has not held elected office yet.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.03
                                }
                            ]
                        },
                        {
                            "id": 3058204,
                            "description": "Hanford MacNider is a man of the soil and of service, and while it has been made plain that he desires this role with great earnestness, I see in that not mere ambition, but a readiness to shoulder the burdens of leadership.",
                            "feedback": "Harold MacNider's experience as an ambassador may help dissuade concerns of his lack of experience.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1014,
                                    "amount": 0.03
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1001,
                    "description": "Talks of a \"draft Coolidge\" movement at the Convention vanish as Joseph Scott delivers the speech of his political lifetime for your nomination. Joseph pats you on the shoulder as you step up to the podium, his grip firm, his eyes searching yours like he’s looking for something—anything—to hold onto. The lights are hot, the July air feels thick, and for a moment, the whole convention hall leans forward to the radios, waiting for you to speak - what will you say?",
                    "answers": [
                        {
                            "id": 5003,
                            "description": "The trials we face today are unlike any in our history, a storm that has swept across nations, leaving no corner of the world untouched. But through the Reconstruction Finance Corporation, we have shored up banks, stabilized industries, and preserved the backbone of our economy.",
                            "feedback": "This is a pretty good angle to focus on. The American people want proof stuff is getting done, though they have yet to fully feel it.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.3
                                }
                            ]
                        },
                        {
                            "id": 50030,
                            "description": "I have resisted calls for sweeping federal intervention not out of indifference, but out of a steadfast belief that such measures would erode the foundations of our democracy. The American recovery must ultimately come from the ingenuity of its workers, the resilience of its farmers, and the vision of its entrepreneurs.",
                            "feedback": "This will help you with rank-and-file Republicans, but the universe of those grows smaller and smaller by the day.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 3058207,
                            "description": "This administration has worked tirelessly to ease the burdens of international debt and to foster cooperation among nations. The moratorium on war debts was not a concession but a necessary act to restore confidence in the world economy. We must strive not only for our recovery but for the restoration of peace and prosperity among all nations.",
                            "feedback": "This is a rather internationalist tone, which is odd coming from a Republican President.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 101,
                                    "stateId": -1,
                                    "amount": 0.4
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1011,
                    "description": "The Lausanne Conference, which is poised to address the lingering specter of war reparations and the crushing weight of international debt, is about to begin. Gathered within the stately halls are the representatives of nations still reeling from economic collapse. The outcome will carry profound implications for both Europe and the United States. What will your strategy be?",
                    "answers": [
                        {
                            "id": 5030,
                            "description": "I have made it abundantly clear to those attending Lausanne that the United States expects meaningful results. Reparations, in their current form, are a dead weight on the economies of Europe and, by extension, the entire globe. A restructured system, grounded in fairness and fiscal responsibility, must emerge from this conference.",
                            "feedback": "European powers agree to significantly reduce reparations payments, tying them to achievable economic benchmarks. Newspapers praise the outcome, drawing comparisons to the Pax Romana. European economies begin to show signs of life, and the ripple effects reach American shores.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.05
                                }
                            ]
                        },
                        {
                            "id": 5031,
                            "description": "I must speak plainly. The reparations system is an anachronism. A relic of an era that cannot sustain the needs of today. No more dithering, no more delay. The United States demands a comprehensive restructuring of reparations, and if the nations gathered fail to rise to the occasion, the blame will lie squarely on those who chose self-interest over collective recovery.",
                            "feedback": "The conference dissolves as delegates are unable to reach a consensus. Reparations remain unchanged, with only minor concessions made to save face. Markets falter further as critics at home attack your approach, blaming your administration for antagonizing key allies.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.075
                                }
                            ]
                        },
                        {
                            "id": 5032,
                            "description": "The reparations question, while deeply tied to the global economy, is rooted in agreements forged among European powers. America’s role is not to dictate, but to observe, to encourage, and to provide support when the time comes. I have every faith that reason and cooperation will prevail",
                            "feedback": "The European nations make adjustments to the reparations system, enough to quiet dissent, but far too little to address the root causes of the crisis. The global economy remains fragile, with little improvement in European markets and stagnation spilling over to the United States.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.3
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
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
                    "id": 1009,
                    "description": "Marching through the slush, their boots soaked and their banners sodden, the Bonus Army comes forward. The men and women gathered outside are not strangers; they are those who fought and bled for this nation. They ask not for charity but for what they believe is owed: the bonus promised to them for their service, a payment now withheld in the name of economic prudence. How will you respond?",
                    "answers": [
                        {
                            "id": 5024,
                            "description": "The veterans of the Great War deserve our respect, and I will not refuse them an audience. I have instructed that representatives of the Bonus Army be brought to the White House for direct dialogue. I will meet with them not as a commander-in-chief addressing a supplicant army, but as a fellow citizen grateful for their service.",
                            "feedback": "The White House lawn is transformed into an unlikely stage of history, a meeting ground for the President and the representatives of the Bonus Army. The response is lackluster, but progress seems to be solid. For now, the crisis is averted.",
                            "answerEffects": []
                        },
                        {
                            "id": 5025,
                            "description": "In order to put an end to this rioting and defiance of civil authority, I have asked the Army under General MacArthur to assist the District authorities in restoring order. This decision was not made lightly, but governance requires the preservation of law and order above all else.",
                            "feedback": "Federal troops, under the command of General Douglas MacArthur, will eventually march towards the Bonus Army encampments, their bayonets gleaming in the midday sun.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.02
                                }
                            ]
                        },
                        {
                            "id": 5026,
                            "description": "These men served their country with honor, and they deserve more than the forceful hand of authority as a response to their grievances. They will remain here until they choose to leave of their own accord. But we are a nation of laws, and the law is clear: these bonuses are not due until 1945.",
                            "feedback": "The veterans dig in, transforming the outskirts of Washington into sprawling tent cities. Smoke rises from campfires, children run barefoot through muddy streets, and veterans sit in circles, recounting stories of hardship to the press.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1038,
                    "description": "Many of your advisors believe that in order to win, you'll need to shake off the notion that you're cold and indifferent to the suffering of Americans. The disconnect between the White House and the people that placed you in that office feels to grow stronger and stronger with each passing day. What can - or what will you do in this regard?",
                    "answers": [
                        {
                            "id": 5127,
                            "description": "We need to be honest here - things aren't good. If people can understand I recognize their pain, perhaps that will help people sympathize with me.",
                            "feedback": "It's a shift from your previous strategy, but it seems to be having a positive effect. People are looking for leadership. ",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.05
                                }
                            ]
                        },
                        {
                            "id": 5128,
                            "description": "To respond to such attacks would be unbecoming of a President. It's not worth any possible time or effort to play into such political talk.",
                            "feedback": "You've been accused of being \"mentally frozen in the past, unable to grasp the problems of his age,\nand determinedly sacrificing human welfare on the altar of an outmoded antistatism\". A response of some kind needs to be made.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 5129,
                            "description": "I have to prove to the everyday American that I am on their side. We need to improve my speaking style to be much more equipped to resonate with the people.",
                            "feedback": "It takes some training, but your speaking style and mannerisms seem to improve as time goes on. This won't change the economy, but conveying your message is an important first step.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 101,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.025
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1016,
                    "description": "Part of your strategy for fighting the struggling economy has been to emphasize the need for local and state government to get involved in combatting the depression. With local measures doing little to alleviate issues, do you wish to keep with this strategy?",
                    "answers": [
                        {
                            "id": 3058324,
                            "description": "Yes. Local authorities are far more equipped with the knowledge and understanding of what needs to be done in order to solve local issues. ",
                            "feedback": "Unfortunately, this policy isn't the most popular. People wish more action federally was taken.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 3058326,
                            "description": "To some degree, although I recognize that it's not working as intended. Thus I will ask Congress to pass a spending bill that will provide local governments with some extra funds to solve certain issues.",
                            "feedback": "Congressman are miffed over being called out of recess, but a bill is eventually negotiated, and you sign it to mild fanfare. At least it's something.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.6
                                }
                            ]
                        },
                        {
                            "id": 3058332,
                            "description": "This strategy is not working the way I had wished it would. I will take some temporary measures on an Executive level to help solve specific local problems. ",
                            "feedback": "Whether it's funding a bridge or a dam, stuff is getting done. People feel it on a local level. You recoil as you violate your principles.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.3
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0125
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1021,
                    "description": "Prohibition of alcohol, once a bipartisan and broadly popular effort, has become far less popular over the years, and many believe that the Republican path to victory this year shall require endorsing repeal to the 18th amendment. Do you have any thoughts on the matter?",
                    "answers": [
                        {
                            "id": 5067,
                            "description": "Not particularly. I will respect whatever decision the convention, and the states make on this matter.",
                            "feedback": "In this day and age, there are \"drys\" and there are \"wets\". Trying to find a middle ground is not a good strategy.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 202,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.05
                                }
                            ]
                        },
                        {
                            "id": 5068,
                            "description": "Prohibition has helped keep our nation morally sound. I do not believe it would be wise for the Republican Party, or Congress to move towards its repeal.",
                            "feedback": "America is certainly not a dry nation anymore, and there are definitely wet Republicans teetering towards Roosevelt such as Pauline Sabin. But you are being consistent here, and that has to mean something.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": -0.6
                                }
                            ]
                        },
                        {
                            "id": 5069,
                            "description": "I believe that this issue is best left in the hands of each state. I would support a constitutional amendment providing the power to regulate such drinks to the states. ",
                            "feedback": "This is a change in course from your historical stance on the matter. But it's hard to pretend prohibition is popular nowadays.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": 0.4
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
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
                    "id": 1023,
                    "description": "Since your inauguration, the Republican National Committee has been in a hit of a rut. Much of the infrastructure was turned over to the White House, assuming press conferences and administration would remove the need for a strong party machine. Senator Fess of Ohio has remained as chairman since 1930 - do you wish to consider dropping him and appointing someone else ahead of the election? ",
                    "answers": [
                        {
                            "id": 5075,
                            "description": "I stand behind Chairman Fess, and I am proud of my decision to appoint him to help us weather the storm of the midterms.",
                            "feedback": "Fess' weak record and dry position on prohibition makes him not a great leader for the party machinery during this period.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": -0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.05
                                }
                            ]
                        },
                        {
                            "id": 5076,
                            "description": "Fess has got to go - I will drop him from the position promptly ahead of the campaign. In his place, I will appoint Mr. Everett Sanders of Indiana. His ties to Coolidge will help me with those who appreciate the former President.",
                            "feedback": "Sanders' ties with Coolidge is a major asset to his nomination, and but it's not expected he will be able to put together an organization in time for the campaign.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.7
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                }
                            ]
                        },
                        {
                            "id": 5077,
                            "description": "Fess has got to go - I will drop him from the position promptly ahead of the campaign. In his place, I will appoint Hubert Work of Colorado. As a former chair, and an ally during my bid four years ago, I trust his capability to manage the campaign effectively.",
                            "feedback": "Work was a good chairman, but \"good\" may not be enough to turn this campaign around.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1020,
                    "description": "After a dramatic and energetic convention in Chicago, the Democratic Party has nominated Governor Franklin Roosevelt of New York, who triumphed over Al Smith. Roosevelt's nomination is bold - promising progressive policy spending to revitalize the economy - and he makes no effort to avoid attacking your agenda. How will you respond to Roosevelt's candidacy?",
                    "answers": [
                        {
                            "id": 5063,
                            "description": "If Roosevelt is going to sweep the progressive vote, we may as well appeal to the conservative nature of America. Prosperity is just around the corner - we need to be stable and steady.",
                            "feedback": "It's hard to believe this when the economy has been in the gutter for around three years now. ",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": -0.7
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.043
                                }
                            ]
                        },
                        {
                            "id": 5064,
                            "description": "Roosevelt makes big promises, but each one comes with a price tag. I have carefully proposed reform to improve the foundation of our economy, while Roosevelt believes he can spend other people's money to solve their problems.",
                            "feedback": "Making voters question Roosevelt's promises is a good way to limit his appeal.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 5065,
                            "description": "Roosevelt's ties to Smith still linger. My time in public service has been spent fighting for the workers and the farmers to ensure they can achieve prosperity. Roosevelt has been fighting for himself.",
                            "feedback": "It's difficult to tie Roosevelt to Smith when the two had a very public falling-out. Plus, Smith being a wet would probably benefit him in this political climate.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": -0.7
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.03
                                }
                            ]
                        },
                        {
                            "id": 5066,
                            "description": "Roosevelt isn't just a typical progressive - the laws he is proposing are sweeping in nature. It's rather scary and socialist to some degree. ",
                            "feedback": "There isn't much of a red scare in this era. People view Roosevelt as genuine. You'll need to find another route of attack.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1018,
                                    "amount": 0.08
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1022,
                    "description": "After a period of negotiations and a shootout with Washington police, it is time for you to give the order for the Bonus Army encampment to be dispersed. The military believes they can resolve this peacefully.",
                    "answers": [
                        {
                            "id": 5071,
                            "description": "Do what needs to be done.",
                            "feedback": "It doesn't take a genius to realize that the scene looks bad. Cavalry. Tear gas. Bayonets. Tools directed towards the enemy that are instead fixed straight at men who risked their lives for the country.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.025
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.025
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1030,
                    "description": "In 1928, the campaign became quite dirty with discrete anti-Catholic attacks benefitting your campaign in the South - allowing you to make great gains across that region. Would a more direct implementation of this strategy be something you're interested in doing this campaign?",
                    "answers": [
                        {
                            "id": 3058273,
                            "description": "Absolutely not. We need the black voters up north to vote for me if I want to win states like New York and Illinois. ",
                            "feedback": "It might not be a bad idea to let cultural issues take a back seat during this campaign.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0125
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1012,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1000,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1003,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1008,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1009,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1017,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1023,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1032,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1035,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1039,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1041,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1042,
                                    "amount": -0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1045,
                                    "amount": -0.03
                                }
                            ]
                        },
                        {
                            "id": 3058274,
                            "description": "Perhaps to some degree. It wouldn't hurt to try to contest the South at least, though I don't want to get my own hands dirty.",
                            "feedback": "Black federal appointments slow down. You take a stop or two to the south. They like what you're selling - though you haven't addressed the economic elephant in the room.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1000,
                                    "amount": 0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1003,
                                    "amount": 0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1008,
                                    "amount": 0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1009,
                                    "amount": 0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1017,
                                    "amount": 0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1023,
                                    "amount": 0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1032,
                                    "amount": 0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1035,
                                    "amount": 0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1039,
                                    "amount": 0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1041,
                                    "amount": 0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1042,
                                    "amount": 0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1045,
                                    "amount": 0.04
                                }
                            ]
                        },
                        {
                            "id": 3058275,
                            "description": "Lily-whitism is the way forward to truly allow the Republican Party to compete in the south. I will follow through with my plan of reforming leadership in the south to do just this.",
                            "feedback": "Black federal appointments slow down. You purge black southern Republican leaders from party offices. You take a stop or two to the south. They like what you're selling - though you haven't addressed the economic elephant in the room.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1000,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1003,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1008,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1009,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1017,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1023,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1032,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1035,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1039,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1041,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1042,
                                    "amount": 0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1045,
                                    "amount": 0.075
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1029,
                    "description": "Some in Congress are suggesting a further series of bank bailouts in an attempt to further revive the economy. Conservatives worry that this will be a costly, bloated bill, while progressives balk at the idea of bailing out large banks. Will you toe the line here? What kind of bailout should be done?",
                    "answers": [
                        {
                            "id": 5097,
                            "description": "None. Do we really trust big corporations with all this money? We need to provide direct relief to the American people, and soon.",
                            "feedback": "This is... unorthodox of you, to say the least. Americans like what they hear. Your allies, on the other hand, most certainly do not.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.8
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.8
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0075
                                }
                            ]
                        },
                        {
                            "id": 5098,
                            "description": "I don't know how much money we can expect to spend during a depression. Bailouts seem costly and don't address the underlying problem of confidence in the banking system.",
                            "feedback": "This is an expected, and conservative answer. Progressives are disappointed. ",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.6
                                }
                            ]
                        },
                        {
                            "id": 5099,
                            "description": "Fine. I will sign whatever bill Congress puts forth, within reason. At the very least, I need the appearance of taking action.",
                            "feedback": "You sit at your desk, signing the bill, defeated. Your own party doesn't seem to listen to you sometimes.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1032,
                    "description": "Many of your closest advisors are wondering if you will personally campaign this year. Given the troubling economic situation, some believe that personally campaigning will help you appear less out of touch with the public. Is this something you wish to do?",
                    "answers": [
                        {
                            "id": 5107,
                            "description": "If I don't make such a bold move, who knows what the Democratic Party will say about me on the campaign trail? I will prepare such a schedule.",
                            "feedback": "This is a break from the standard tradition, but perhaps that's not a bad thing.",
                            "answerEffects": []
                        },
                        {
                            "id": 5108,
                            "description": "I am the President of the United States. I seek to lead, not make excuses. I will leave the campaigning to surrogates, as is tradition.",
                            "feedback": "This is the expected answer from a sitting President. Even Cleveland didn't campaign when he was in trouble.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1025,
                    "description": "Roosevelt has repeatedly called for a progressive economic agenda that he calls a \"New Deal\" - promising relief, recovery, and reform. Do you consider such an agenda communist or socialist?",
                    "answers": [
                        {
                            "id": 5083,
                            "description": "Such a broad and statist economic agenda sounds incredibly collectivist and socialist in nature. Ideas such as a national minimum wage sound absurd.",
                            "feedback": "This will help keep conservatives in line, but many look to the New Deal and see hope.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": -0.6
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 5084,
                            "description": "I have my disagreements with Mr. Roosevelt, but I wouldn't consider the New Deal a socialist plot - I do agree with some of the goals. I believe we can respectfully continue a policy debate.",
                            "feedback": "Being too hostile to the New Deal may be close to political suicide at this point.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.7
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.3
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1026,
                    "description": "Some good news: advisors have spotted a surplus in campaign funding. Is there a specific state you'd like to allocate this money towards and also visit?",
                    "answers": [
                        {
                            "id": 5086,
                            "description": "New York alone is 8% of the electoral college. Of course, I will put funds in and visit the state.",
                            "feedback": "A common pattern while campaigning seems to be you being met with eggs, tomatoes, and other forms of heckling. New York is no exception.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.035
                                }
                            ]
                        },
                        {
                            "id": 3058253,
                            "description": "The Republican machine in Illinois seems to be crumbling. I think we need to make a push to secure the state's electoral votes.",
                            "feedback": "A common pattern while campaigning seems to be you being met with eggs, tomatoes, and other forms of heckling. Illinois is no exception.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1012,
                                    "amount": 0.035
                                }
                            ]
                        },
                        {
                            "id": 3058256,
                            "description": "Pennsylvania is a Republican stronghold, and we need to ensure that all of our states are accounted for. Let's make an effort to win the state.",
                            "feedback": "A common pattern while campaigning seems to be you being met with eggs, tomatoes, and other forms of heckling. Pennsylvania is no exception, though it does feel less hostile to you.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1037,
                                    "amount": 0.035
                                }
                            ]
                        },
                        {
                            "id": 3058259,
                            "description": "I think we should blanket these funds nationally. Giving Republicans more airtime seems like a good idea.",
                            "feedback": "A common pattern while campaigning seems to be you being met with eggs, tomatoes, and other forms of heckling. Forgoing campaigning for a bit will save you from the embarrassment.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0125
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1033,
                    "description": "The Emergency Relief and Construction Act was enacted a few months ago and has given the Executive plenty of money to spend on public works and other reliefs. Many in your administration have some ideas on how to allocate these funds. What do you wish to prioritize?",
                    "answers": [
                        {
                            "id": 5111,
                            "description": "They've been building these shanty towns and calling them \"Hoovervilles\". It's terrible - and it's terrible for my image. We need to invest big time in housing, clean up our streets, and shelter people in need.",
                            "feedback": "Many are eager to see more spent on housing in America and are grateful for such a move. Fiscal conservatives are annoyed at how much you're spending.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.65
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0125
                                }
                            ]
                        },
                        {
                            "id": 5112,
                            "description": "The best thing to do is spread the money equally. We need to spend this money investing in roads and other projects. Railroads especially are an industry we need to restabilize, and quickly.",
                            "feedback": "Railroads are an important industry, that's for certain.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.6
                                }
                            ]
                        },
                        {
                            "id": 51120,
                            "description": "The naval yard in Brooklyn is looking for an expansion - not just maintenance. Why don't we push more funding into it? We'll be needing the Empire State, after all.",
                            "feedback": "This is clearly favoritism and political in nature, but it seems the people of Brooklyn don't fully notice.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.006
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.03
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1034,
                    "description": "One of the political struggles with Roosevelt is that he is popular. Very popular. In many ways, it reminds you of yourself back in '28 - a celebrity. \"Happy Days Are Here Again\" plays across the country. Some advisors believe you need to drag this campaign through the mud. What will you do?",
                    "answers": [
                        {
                            "id": 5114,
                            "description": "We have to find some way to make people question his ability to serve. I wished to not stoop to this level - but his medical condition has me worried. Will he make it all four years?",
                            "feedback": "Advisors shoot this down with little hesitation. That's taking it a step too far.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 5115,
                            "description": "We'll continue to hit on the socialism attack. It needs to be understood that Mr. Roosevelt's policies are far closer to bolshevik Russia than patriotic America.",
                            "feedback": "This is a good way to excite conservative voters, but the New Deal seems fairly popular with voters...",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.7
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 5116,
                            "description": "Roosevelt's got some good intentions... but how are we going to pay for anything he's proposing? Tax increases during a depression sound absurd, and no matter my faults, I don't seek to raise taxes.",
                            "feedback": "This is a good attack, but you literally did raise taxes this year.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.2
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.007
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1036,
                    "description": "It's becoming apparent that more and more Republicans seem to be jumping ship. First, it was Norris of Nebraska. Then it was La Follette Jr. But now, folks like Hiram Johnson seem to be bucking the party line on the election - with Johnson and Norris giving endorsements to Roosevelt as Borah remains mum. What will you do?",
                    "answers": [
                        {
                            "id": 5121,
                            "description": "Call up Borah. Focus on getting rank-and-file Republicans in line. Anything we can do. What can we do?",
                            "feedback": "Not much, unfortunately.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1000,
                                    "amount": 0
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1037,
                    "description": "Despite everything over the last four years, the damn economy still seems to be stumbling. People aren't feeling that things have gotten better, and in plenty of regards, they haven't. What will your final message on the economy be?",
                    "answers": [
                        {
                            "id": 5123,
                            "description": "In many ways, we are in wartime. War against enemies such as poverty and unemployment. These battles will take time, but I implore the people to recognize that it is unwise to swap horses midstream.",
                            "feedback": "It's good to make people feel like you're taking action on things, at the very least.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.7
                                }
                            ]
                        },
                        {
                            "id": 5124,
                            "description": "I have made my share of mistakes over this economic crisis. But I am steadfastly focused on solving the problems that the country faces, and I ask for four more years to continue my reforms.",
                            "feedback": "Back in 1928, you were a quite beloved figure - almost a celebrity. People <i>want</i> to like you.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.8
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 5125,
                            "description": "The Democratic platform this year borders on socialism - to allow any sort of \"New Deal\" into law would allow for socialist, bolshevik influence into our nation.",
                            "feedback": "Unfortunately, attacks like these are hard to land after four years of Republicanism.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": -0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 1035,
                    "description": "The campaign has begun to wrap up. It's felt like it's been four years, and it has been in many aspects. Victory is uncertain, and what you'll do if you win is also a question. Where will you spend your last campaign stop?",
                    "answers": [
                        {
                            "id": 3058211,
                            "description": "New York is key to victory for the Republican ticket. I don't know how we'll win without it.",
                            "feedback": "You return to the White House to watch the results. Best of luck, Mr. President.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.03
                                }
                            ]
                        },
                        {
                            "id": 3058213,
                            "description": "The industrial Midwest is vital to our chances. If Roosevelt can make gains within this region, we don't have a shot at winning. To Michigan and Ohio we shall go!",
                            "feedback": "You return to the White House to watch the results. Best of luck, Mr. President.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1021,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1034,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1013,
                                    "amount": 0.03
                                }
                            ]
                        },
                        {
                            "id": 3058220,
                            "description": "The west and plains seem very critical for my chance of victory. I will visit my home state of California, before barnstorming the plains.",
                            "feedback": "You return to the White House to watch the results. Best of luck, Mr. President.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1004,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1005,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1026,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1015,
                                    "amount": 0.03
                                }
                            ]
                        },
                        {
                            "id": 3058225,
                            "description": "As Missouri goes, so goes the nation. We'll travel through Illinois, Iowa, and Missouri to wrap up the campaign.",
                            "feedback": "You return to the White House to watch the results. Best of luck, Mr. President.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1012,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1024,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1014,
                                    "amount": 0.03
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058067,
                    "description": "== CYOA ==",
                    "answers": [
                        {
                            "id": 3058144,
                            "description": "We are tied by the Neutrality Act, which is the law of the land. We will send whatever humanitarian aid we can, and attempt to ban arm sales to any nation aiding either side of the conflict. ",
                            "feedback": "This is the expected course to take here.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 101,
                                    "stateId": -1,
                                    "amount": 0.2
                                }
                            ]
                        },
                        {
                            "id": 3058148,
                            "description": "To allow the Nationalists to win would be a disaster for Europe and perhaps the Good Neighbor Policy. As President, I would hastily block arm sales to Germany and limit what American companies can sell.",
                            "feedback": "",
                            "answerEffects": []
                        },
                        {
                            "id": 3058149,
                            "description": "We are in no position to influence the events of Europe when our own house is not even in order. I do not support any kind of intervention.",
                            "feedback": "Regardless of the divided feelings of your party, if you're looking to win, staying with the mood of the public is key.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 101,
                                    "stateId": -1,
                                    "amount": -0.7
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058068,
                    "description": "Some very good news: for one reason or another, it appears that the Bonus Army Marchers have begun to return home. Whether it's because of a brighter economic outlook, or good negotiations, they group has decided to take their fight elsewhere.",
                    "answers": [
                        {
                            "id": 3058127,
                            "description": "Christ. Thank God.",
                            "feedback": "This could have ended very poorly for you. The encampment was emblematic of the mood of the country, after all.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 101,
                                    "stateId": -1,
                                    "amount": -0.8
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.025
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058091,
                    "description": "Some not so great news: It appears that negotiations to remove the Bonus Army have stalled. While some have departed, plenty of them still remain. The encampment will remain a stain on your administration and reputation for as long as they stay their.",
                    "answers": [
                        {
                            "id": 3058137,
                            "description": "This is unfortunate. But we are in no position to fix bayonets towards our fellow Americans.",
                            "feedback": "Perhaps it is best to keep the situation stable, rather than engage in any risky moves.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058092,
                    "description": "With storm clouds abroad and the economy at home alight, the Democrats have, in a shock, nominated former Secretary of War Newton D. Baker to be their next nominee. Furious over the Lausanne Conference's collapse, Secretary Baker assails your record, claiming the Depression is the product of your policies making mankind a slave to machinery and isolated from the world abroad. How will you approach Secretary Baker's candidacy?",
                    "answers": [
                        {
                            "id": 3058152,
                            "description": "When last Secretary Baker held public office, he and President Wilson had our children dragged into conflict overseas, our sons killed at the hands of the Hun. Still, Baker praises the former President by name-and we all remember Wilson's economic record. ",
                            "feedback": "While President Wilson left office with few friends in the public, the current situation is so dire it is impossible to not look back on his time in office with fondness. Baker direly warns that the Depression will only worsen unless we remember Woodrow's wisdom.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.5
                                }
                            ]
                        },
                        {
                            "id": 3058155,
                            "description": "Secretary Baker is a stodgy intellectual, incapable of relating to any man's struggles. While we have been hard at work digging ourselves out of this current calamity, Baker has secluded himself in an Ivory Tower. He is out of touch with the common man, and unfit to solve his struggles.",
                            "feedback": "Baker is a diminutive man, almost professorlike in demeanor, constantly quoting Latin and speaking of Shakespeare. His invocation on the stump that you have made a slave of mankind does leave voters scratching their heads.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 3058157,
                            "description": "The Secretary has been my friend for some time, but I must admit he has changed as of late. At one time he was a tireless advocate of antitrust-now he takes money from the railroads to defend them in court. What does it say about a man that he can sell his ideals so quickly?",
                            "feedback": "Baker defends himself, claiming that his views on public policy have never changed. The public is split-more engaged members of society are concerned about his integrity, while the rest are simply jealous he has a steady job.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0125
                                }
                            ]
                        },
                        {
                            "id": 3058337,
                            "description": "Secretary Baker speaks of leading America through fire, but he simply doesn't have what it takes to do so. He is a known pacifist, he loathes fighting. This proves he is nothing but bluster.",
                            "feedback": "Baker responds coolly. \"I love peace so much I am willing to fight for it,\" he claims. Americans swoon at his quiet bravado, even if they fear conflict abroad.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 101,
                                    "stateId": -1,
                                    "amount": -0.7
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058093,
                    "description": "Baker of course deplores your handling of the economy, but he is infuriated by your handling of foreign affairs. \"Dulce bellum inexpertis!\" he cries, saying you are unprepared for any storm clouds brewing in Europe, willing to let the world burn while you fiddle away. He clearly wants to talk about internationalism-what do you have to say to him?",
                    "answers": [
                        {
                            "id": 3058161,
                            "description": "Recall what happened last time Baker was in government? He sent our sons to die abroad in Europe. When he warns of conflict abroad, know that he has already shown us his solution to Europe's squabbles on the field of Flanders",
                            "feedback": "A biting critique. Nobody is interested in a world war at a time like this. Baker contests your argument, saying he is a pacifist, exclaiming, \"Bella, horrida Bella!\" but nobody speaks Latin anymore.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0075
                                }
                            ]
                        },
                        {
                            "id": 3058164,
                            "description": "It shocks me to my core that this is Secretary Baker's priority at a time like this. People need jobs, not a battle abroad!",
                            "feedback": "Baker shakes his head, saying that the President should be able to do more than two things at once. Most, however, concede you have a point. Europe's affairs are none of America's concern right now it seems.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": 0.2
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0085
                                }
                            ]
                        },
                        {
                            "id": 3058167,
                            "description": "Secretary Baker seems more concerned with the opinions of Neville Chamberlain and Paul von Hindenburg than with governing. I have been the one developing a relationship with the Europeans and managing crises abroad. He is too out of touch with modern needs to do the same.",
                            "feedback": "Baker laughs at this idea. Your handling of Lausanne is not unremembered, and Americans of all stripes know your response as a failure.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 104,
                                    "stateId": -1,
                                    "amount": -0.02
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                }
                            ]
                        },
                        {
                            "id": 3058344,
                            "description": "At a time like this, nobody cares what Baker has to say about Albert Lebrun. What they do care about are his radical ideas, his belief that government should control the means of production.",
                            "feedback": "Baker laughs this off. He says that Republicans would call Andrew Jackson a Socialist if it suited their needs, if only to hide your own Socialist proclivities. It will be difficult for you to attack Baker's economics without specifics.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0095
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058094,
                    "description": "Newton Baker continues to assail your handling of the economy. He quotes foreign born economists with aristocratic names as evidence of your misdeeds, as more reasons to eject you from the White House. He has many ideas-which one shall be the thread we pull upon?",
                    "answers": [
                        {
                            "id": 3058096,
                            "description": "Have you ever heard of Georgism? It is the strange economic credo that the Secretary has knelt at the altar of. That the Government could levy a tax on every piece of land in the United States would only expand the government into an overreaching octopus.",
                            "feedback": "Baker vigorously defends the old economist, certain that the land value tax is the solution to all America's woes. To be frank, it all seems a little arcane.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 3058097,
                            "description": "Imagine the jobs that we would lose to British and German industry if not for how we protect our factories? Our tariffs are the final line of defense against complete economic implosion. Secretary Baker seeks to dismantle them.",
                            "feedback": "For the first time in decades, the cult of the tariff wavers. Tariffs have done nothing to improve the Depression, and the people are furious. Baker's policy sounds like just the right panacea.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 104,
                                    "stateId": -1,
                                    "amount": -0.4
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0125
                                }
                            ]
                        },
                        {
                            "id": 3058348,
                            "description": "If one reads Baker's platform, one would realize it is the most socialist platform in the history of the United States. Any investigation of his beliefs reveals that he is little more than a neo-Bolshevik, practically an ally of Joseph Stalin.",
                            "feedback": "Baker laughs this off, purely amused by the comparison. Every reader of the daily papers knows Baker is no radical, a point he underscores when he jokes you once called Grover Cleveland a reader of Daniel de Leon.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": -0.4
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                }
                            ]
                        },
                        {
                            "id": 3058352,
                            "description": "If one wants to understand Baker's economics, look at how he ran Cleveland. He centralized control in the mayor's office, and put municipal services under his control under the guise of some strange credo he calls civitism. Does that sound like a qualified man for the Presidency?",
                            "feedback": "Baker certainly sounds radical, but at this point, radical solutions may be what's necessary for victory. Your attacks fall on deaf ears.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": -0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058095,
                    "description": "With the economy healing, the Democrats turn toward an unconventional nominee. Owen D. Young, Chairman of General Electric and settler of Germany's repayment plan, has taken the stand, pledging to make America safe for business again. How will you approach this most unusual nominee?",
                    "answers": [
                        {
                            "id": 3058112,
                            "description": "There is no La Follette this time, but it's clear that the old liberals would never go for a titan of industry such as him. It is clear my heart is far warmer.",
                            "feedback": "Young has selected Senator Thomas Gore as his running mate, in an attempt to reel in dissatisfied progressives. Still, it is a hard sell for many an idealistic young liberal to vote for a cold hearted robber baron.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.7
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0125
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.03
                                }
                            ]
                        },
                        {
                            "id": 3058113,
                            "description": "Owen Young is simply unqualified for the presidency. He's admitted it himself! Every endeavor he has begun has crumbled, and now he seeks the Oval Office. How foolish it would be to elevate him to the presidency.",
                            "feedback": "Young's background is unconventional, certainly, but in times like this an unconventional man may be necessary. Young has made a lot of money-the people hope he will do the same for them.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 101,
                                    "stateId": -1,
                                    "amount": -0.7
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.7
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 103,
                                    "stateId": -1,
                                    "amount": -0.7
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.005
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1031,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 3058359,
                            "description": "Young's demeanor is quite simply dictatorial. On every level he seeks, in his own words, \"centralized control.\" To elect him would be to elect our very own Mussolini",
                            "feedback": "Young is cold, austere, his eyes piercing. He stands tall over the Hoovervilles and the slums. The people pray he can bring them up with him.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 3058363,
                            "description": "We have acted vigorously to save our economy and stop a complete and total breakdown of the United States' economy. Young seeks to turn back all of that. Young, it seems, is the true puppet of big business.",
                            "feedback": "Young rolls in money, hitting you at every turn. He claims that you seek to strangle the US with your socialistic endeavors, killing business and spiking unemployment. Voters begin to wonder why he breaks bread with those banks that caused this crisis.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.4
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.0245
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058237,
                    "description": "Young postures as a demigod of industry, a man who has tamed the primal forces of capitalism itself. He tells America that he is not running for president for his own sake, but for theirs, descending from the heavens for their economic salvation. You must pierce the myth he has formed around himself. How?",
                    "answers": [
                        {
                            "id": 3058367,
                            "description": "Any thinking man can see that Owen Young does not practice what he preaches. He runs an open shop, driving labor out of his shops. How could they support him?",
                            "feedback": "Unions are skeptical of supporting you and the Republicans, but when you lay it out, Young is simply noxious to their interests. General Electric employees have little of substance to say of their boss to sway them with.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0175
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 202,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.2
                                }
                            ]
                        },
                        {
                            "id": 3058373,
                            "description": "Owen Young is a mastermind of horrible proportions, scheming with the corporate lobbies to control every channel of public opinion with their millions. Even allies of his like Senator Walsh have revealed his schemes",
                            "feedback": "You recirculate Senator Walsh's inquiries into Young's financing of newspapers and college textbooks to sway public opinion on their side. It gives longtime liberals pause as they read of Young's plotting",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 100,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 202,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.15
                                }
                            ]
                        },
                        {
                            "id": 3058377,
                            "description": "Mr. Young is simply unprepared to hold higher office. He has no knowledge of the process of governing, and seems to believe he can rule by decree. We will be just as shocked as he is by how ineffectual he'll be if he wins.",
                            "feedback": "Americans yearn for a dictator, for someone to ride in on a horse and save them from economic discontent. If Young can make the trains run on time, fine by them.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.3
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.015
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 202,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.1
                                }
                            ]
                        },
                        {
                            "id": 3058382,
                            "description": "Think of Young's actual record of public affairs. The Young repayment plan is cracking at the seams, incapable of servicing German debt. If he were to take that attitude to the Treasury, the results could be disastrous.",
                            "feedback": "Young takes umbrage at this, saying that the Young Plan's failure is entirely on your head. You have been President for the past four years-he's been busy with other things.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 101,
                                    "stateId": -1,
                                    "amount": 0.4
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058238,
                    "description": "Young continues his anti-establishment crusade. He decries the \"blatant pronouncements\" of politicians, and says that the nation's crises could be solved by a \"holiday of parliaments.\" It is clear he seeks to take DC by storm. How will you survive his blows?",
                    "answers": [
                        {
                            "id": 3058368,
                            "description": "I fear that some old Coolidge men could fall prey to Young's temptations. Let us remind them that he is still, at heart, a progressive who lacks respect for the free market.",
                            "feedback": "Many Conservatives have been enchanted by Young's loathing for politicians. A reminder of his Democrat-ish economics should help remind them where their best interests lie.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.56
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0125
                                }
                            ]
                        },
                        {
                            "id": 3058392,
                            "description": "Nor am I a tool of special interests as far too many men in DC are. It is clear that we have needed change in our capitol, and I have done all I can to best the special interests that now back one Owen Young.",
                            "feedback": "Your pleading falls flat. You are no longer an outsider-you have been in government for over a decade. Young has no trouble turning you into an emblem of the system",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.025
                                }
                            ]
                        },
                        {
                            "id": 3058395,
                            "description": "This is exactly the kind of whining you would expect from a man who has no experience getting anything in government done. See how his ideals will crumble in the face of reality.",
                            "feedback": "This sounds like more of a confession than an attack.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.03
                                }
                            ]
                        },
                        {
                            "id": 3058398,
                            "description": "I am shocked that any good progressive would stand for such a thing. I understand frustration, but this proposal would almost certainly drastically reduce the efficiency of government in a time it's most needed.",
                            "feedback": "Many progressives just cannot quite stomach Young's political style. He can talk about ensuring companies pay \"a cultural wage,\" but he cannot escape his image as a pawn of capital.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 202,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.2
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 201,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058240,
                    "description": "Despite the disagreements, it appears most of the Republican Party is behind you - or many of them are far more muted in their praises of the progressive Democratic platform than anticipated. Your advisors seem grateful, and so should you.",
                    "answers": [
                        {
                            "id": 3058241,
                            "description": "Perfect.",
                            "feedback": "You will need any gain you can get.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1011,
                                    "amount": 0.05
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 3058245,
                    "description": "It's becoming apparent that some Republicans seek to betray the cause. Norris of Nebraska and La Follette Jr. seem to be the two biggest names to buck the line and support the Democrats - just as they backed Smith in '28. Their high-profile exoduses have led to others to join them. What will you do?",
                    "answers": [
                        {
                            "id": 3058246,
                            "description": "Call up Borah. Focus on getting rank-and-file Republicans in line. Anything we can do. ",
                            "feedback": "You're able to wrangle up an endorsement from Borah, but that will likely be all. ",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 102,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 200,
                                    "issueId": -1,
                                    "stateId": 1011,
                                    "amount": 0.04
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                }
            ]
        }
    ],
    "theme": {
        "backgroundImageUrl": "",
        "headerImageUrl": "./img/genericBanner.png",
        "backgroundColor": "#FFFFFF",
        "primaryGameWindowColor": "#FFFFFF",
        "secondaryGameWindowColor": "#F5F5F5",
        "bottomBannerBackgroundColor": "#FFFFFF",
        "bottomBannerTextColor": "#000000",
        "primaryGameWindowTextColor": "#000000",
        "secondaryGameWindowTextColor": "#000000",
        "advisorImage": "https://i.imgur.com/Io0dZ5g.png",
        "quote" : ""
    },
    "hasStateVisits": true,
    "scenarioName": "1932: Happy Days Are Here Again!",
    "scenarioDescription": "<p>Herbert Hoover was swept into office in 1928, pledging to continue the prosperity of the 1920s. Unfortunately for him, however, his time in office has not been an easy one - with financial troubles spreading globally and an unprecedented economic crash hitting every country. Meanwhile, Roosevelt of New York seeks to use the economy to his advantage and has promised a ''New Deal.''</p><ul><li>Roosevelt has handled reform in New York rather well, but must convince a national stage that his policies are the solutions.</li><li>Hoover must attempt to mount some form of comeback against Roosevelt or face a wipeout.</li></ul>",
    "scenarioImageUrl": "https://itsastronomical.com/assets/1932/1932.png",
    "credits": "ItsAstronomical"
}