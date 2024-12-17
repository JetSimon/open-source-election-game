import ScenarioModel from "../models/ScenarioModel";

const testScenario: ScenarioModel = {
    "candidates": [
        {
            "id": 131,
            "firstName": "James K.",
            "lastName": "Polk",
            "party": "Democrat",
            "homeState": "Tennessee",
            "color": "#0000FF",
            "runningMate": false,
            "isPlayable": true,
            "issueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.5,
                    "weight": 1
                },
                {
                    "issueId": 48,
                    "issueScore": -0.25,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0.5,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": -0.3,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.55,
                    "weight": 1
                }
            ]
        },
        {
            "id": 132,
            "firstName": "Henry",
            "lastName": "Clay",
            "party": "Whig",
            "homeState": "Kentucky",
            "color": "#F0C862",
            "runningMate": false,
            "isPlayable": true,
            "issueScores": [
                {
                    "issueId": 47,
                    "issueScore": 0.2,
                    "weight": 1
                },
                {
                    "issueId": 48,
                    "issueScore": 0.5,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": -0.15,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": 0.6,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0,
                    "weight": 1
                }
            ]
        },
        {
            "id": 133,
            "firstName": "James",
            "lastName": "Birney",
            "party": "Liberty",
            "homeState": "Michigan",
            "color": "#FFFF00",
            "runningMate": false,
            "isPlayable": false,
            "issueScores": [
                {
                    "issueId": 47,
                    "issueScore": 0.75,
                    "weight": 1
                },
                {
                    "issueId": 48,
                    "issueScore": 0.5,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": 0.5,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0.75,
                    "weight": 1
                }
            ]
        },
        {
            "id": 134,
            "firstName": "John",
            "lastName": "Tyler",
            "party": "Independent",
            "homeState": "Virginia",
            "color": "#00C100",
            "runningMate": false,
            "isPlayable": false,
            "issueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.65,
                    "weight": 1
                },
                {
                    "issueId": 48,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0.5,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": -0.5,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.6,
                    "weight": 1
                }
            ]
        },
        {
            "id": 135,
            "firstName": "George",
            "lastName": "Dallas",
            "party": "Democrat",
            "homeState": "Pennsylvania",
            "color": "#0000FF",
            "runningMate": true,
            "isPlayable": false,
            "issueScores": []
        },
        {
            "id": 136,
            "firstName": "Levi",
            "lastName": "Woodbury",
            "party": "Democrat",
            "homeState": "New Hampshire",
            "color": "#0000FF",
            "runningMate": true,
            "isPlayable": false,
            "issueScores": []
        },
        {
            "id": 137,
            "firstName": "Theodore",
            "lastName": "Frelinghuysen",
            "party": "Whig",
            "homeState": "New Jersey",
            "color": "#F0C862",
            "runningMate": true,
            "isPlayable": false,
            "issueScores": []
        },
        {
            "id": 138,
            "firstName": "John",
            "lastName": "Sergeant",
            "party": "Whig",
            "homeState": "Pennsylvania",
            "color": "#F0C862",
            "runningMate": true,
            "isPlayable": false,
            "issueScores": []
        },
        {
            "id": 139,
            "firstName": "Millard",
            "lastName": "Fillmore",
            "party": "Whig",
            "homeState": "New York",
            "color": "#F0C862",
            "runningMate": true,
            "isPlayable": false,
            "issueScores": []
        },
        {
            "id": 140,
            "firstName": "Thomas",
            "lastName": "Morris",
            "party": "Liberty",
            "homeState": "Ohio",
            "color": "#FFFF00",
            "runningMate": false,
            "isPlayable": false,
            "issueScores": []
        },
        {
            "id": 141,
            "firstName": "John C.",
            "lastName": "Calhoun",
            "party": "Independent",
            "homeState": "South Carolina",
            "color": "#00C100",
            "runningMate": false,
            "isPlayable": false,
            "issueScores": []
        }
    ],
    "states": [
        {
            "id": 382,
            "name": "Alabama",
            "abbr": "AL",
            "electoralVotes": 9,
            "popularVotes": 63403,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.6,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.6,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0,
                    "weight": 0.1
                },
                {
                    "issueId": 50,
                    "issueScore": -0.45,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.6,
                    "weight": 1
                }
            ]
        },
        {
            "id": 383,
            "name": "Arkansas",
            "abbr": "AR",
            "electoralVotes": 3,
            "popularVotes": 15150,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.6,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.6,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0,
                    "weight": 0.1
                },
                {
                    "issueId": 50,
                    "issueScore": -0.45,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.6,
                    "weight": 1
                }
            ]
        },
        {
            "id": 384,
            "name": "Connecticut",
            "abbr": "CT",
            "electoralVotes": 6,
            "popularVotes": 64616,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": 0.35,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": 0.4,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": -0.33,
                    "weight": 0.1
                },
                {
                    "issueId": 50,
                    "issueScore": 0.5,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0.5,
                    "weight": 1
                }
            ]
        },
        {
            "id": 385,
            "name": "Delaware",
            "abbr": "DE",
            "electoralVotes": 3,
            "popularVotes": 12247,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.075,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.3,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": -0.33,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": -0.15,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.45,
                    "weight": 1
                }
            ]
        },
        {
            "id": 386,
            "name": "Georgia",
            "abbr": "GA",
            "electoralVotes": 10,
            "popularVotes": 86247,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.075,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.3,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0,
                    "weight": 0.1
                },
                {
                    "issueId": 50,
                    "issueScore": 0.05,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.6,
                    "weight": 1
                }
            ]
        },
        {
            "id": 387,
            "name": "Illinois",
            "abbr": "IL",
            "electoralVotes": 9,
            "popularVotes": 109057,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.6,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.6,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0.35,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": 0.25,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0.25,
                    "weight": 1
                }
            ]
        },
        {
            "id": 388,
            "name": "Indiana",
            "abbr": "IN",
            "electoralVotes": 12,
            "popularVotes": 140154,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.45,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.35,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0.25,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": 0.25,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0.25,
                    "weight": 1
                }
            ]
        },
        {
            "id": 389,
            "name": "Kentucky",
            "abbr": "KY",
            "electoralVotes": 12,
            "popularVotes": 113237,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.1,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": 0.3,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0.35,
                    "weight": 0.25
                },
                {
                    "issueId": 50,
                    "issueScore": 0.25,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.45,
                    "weight": 1
                }
            ]
        },
        {
            "id": 390,
            "name": "Louisiana",
            "abbr": "LA",
            "electoralVotes": 6,
            "popularVotes": 26865,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.075,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.55,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0,
                    "weight": 0.1
                },
                {
                    "issueId": 50,
                    "issueScore": 0.4,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.6,
                    "weight": 1
                }
            ]
        },
        {
            "id": 391,
            "name": "Maine",
            "abbr": "ME",
            "electoralVotes": 9,
            "popularVotes": 84933,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": 0.35,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.333,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": -0.333,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0.5,
                    "weight": 1
                }
            ]
        },
        {
            "id": 392,
            "name": "Maryland",
            "abbr": "MD",
            "electoralVotes": 8,
            "popularVotes": 68690,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.075,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.3,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": -0.33,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": -0.05,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.45,
                    "weight": 1
                }
            ]
        },
        {
            "id": 393,
            "name": "Massachusetts",
            "abbr": "MA",
            "electoralVotes": 12,
            "popularVotes": 132037,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": 0.35,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": 0.625,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": -0.33,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": 0.625,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0.5,
                    "weight": 1
                }
            ]
        },
        {
            "id": 394,
            "name": "Michigan",
            "abbr": "MI",
            "electoralVotes": 5,
            "popularVotes": 55751,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.3,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.35,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0.35,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": -0.2,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0.5,
                    "weight": 1
                }
            ]
        },
        {
            "id": 395,
            "name": "Mississippi",
            "abbr": "MS",
            "electoralVotes": 6,
            "popularVotes": 45004,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.6,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.6,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0,
                    "weight": 0.1
                },
                {
                    "issueId": 50,
                    "issueScore": -0.5,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.6,
                    "weight": 1
                }
            ]
        },
        {
            "id": 396,
            "name": "Missouri",
            "abbr": "MO",
            "electoralVotes": 7,
            "popularVotes": 72522,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.6,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.6,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0.35,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.45,
                    "weight": 1
                }
            ]
        },
        {
            "id": 397,
            "name": "New Hampshire",
            "abbr": "NH",
            "electoralVotes": 6,
            "popularVotes": 49187,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": 0.25,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.333,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": -0.333,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0.5,
                    "weight": 1
                }
            ]
        },
        {
            "id": 398,
            "name": "New Jersey",
            "abbr": "NJ",
            "electoralVotes": 7,
            "popularVotes": 75944,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": 0,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.1,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0.45,
                    "weight": 1.5
                },
                {
                    "issueId": 50,
                    "issueScore": 0.05,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0.25,
                    "weight": 1
                }
            ]
        },
        {
            "id": 399,
            "name": "New York",
            "abbr": "NY",
            "electoralVotes": 36,
            "popularVotes": 485882,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.05,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": 0.25,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0.55,
                    "weight": 1.5
                },
                {
                    "issueId": 50,
                    "issueScore": 0.5,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0.125,
                    "weight": 1
                }
            ]
        },
        {
            "id": 400,
            "name": "North Carolina",
            "abbr": "NC",
            "electoralVotes": 11,
            "popularVotes": 82521,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.075,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.05,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0.35,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": -0.05,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.6,
                    "weight": 1
                }
            ]
        },
        {
            "id": 401,
            "name": "Ohio",
            "abbr": "OH",
            "electoralVotes": 23,
            "popularVotes": 312224,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": 0,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": 0.1,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0.2,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": 0.33,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0.25,
                    "weight": 1
                }
            ]
        },
        {
            "id": 402,
            "name": "Pennsylvania",
            "abbr": "PA",
            "electoralVotes": 26,
            "popularVotes": 331572,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.05,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": 0.2,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0.55,
                    "weight": 1.5
                },
                {
                    "issueId": 50,
                    "issueScore": 0.4,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0.125,
                    "weight": 1
                }
            ]
        },
        {
            "id": 403,
            "name": "Rhode Island",
            "abbr": "RI",
            "electoralVotes": 4,
            "popularVotes": 12296,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": 0.35,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": 0.45,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": -0.33,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": 0.45,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0.5,
                    "weight": 1
                }
            ]
        },
        {
            "id": 404,
            "name": "South Carolina",
            "abbr": "SC",
            "electoralVotes": 9,
            "popularVotes": 5,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.6,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.6,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0,
                    "weight": 0.1
                },
                {
                    "issueId": 50,
                    "issueScore": -0.6,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.6,
                    "weight": 1
                }
            ]
        },
        {
            "id": 405,
            "name": "Tennessee",
            "abbr": "TN",
            "electoralVotes": 13,
            "popularVotes": 119957,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.075,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.05,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0,
                    "weight": 0.1
                },
                {
                    "issueId": 50,
                    "issueScore": -0.05,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.45,
                    "weight": 1
                }
            ]
        },
        {
            "id": 406,
            "name": "Vermont",
            "abbr": "VT",
            "electoralVotes": 6,
            "popularVotes": 48829,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": 0.35,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": -0.33,
                    "weight": 1
                },
                {
                    "issueId": 50,
                    "issueScore": 0,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": 0.5,
                    "weight": 1
                }
            ]
        },
        {
            "id": 407,
            "name": "Virginia",
            "abbr": "VA",
            "electoralVotes": 17,
            "popularVotes": 95539,
            "baseIssueScores": [
                {
                    "issueId": 47,
                    "issueScore": -0.45,
                    "weight": 1.5
                },
                {
                    "issueId": 48,
                    "issueScore": -0.35,
                    "weight": 1
                },
                {
                    "issueId": 49,
                    "issueScore": 0,
                    "weight": 0.1
                },
                {
                    "issueId": 50,
                    "issueScore": -0.2,
                    "weight": 1
                },
                {
                    "issueId": 51,
                    "issueScore": -0.45,
                    "weight": 1
                }
            ]
        }
    ],
    "issues": [
        {
            "id": 47,
            "name": "Annexation",
            "description": "'",
            "stances": [
                "Supports",
                "Supports",
                "Supports",
                "Moderate",
                "Opposes",
                "Opposes",
                "Opposes"
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
            "id": 48,
            "name": "Tariffs",
            "description": "'",
            "stances": [
                "Opposes",
                "Opposes",
                "Opposes",
                "Moderate",
                "Supports",
                "Supports",
                "Supports"
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
            "id": 49,
            "name": "Immigration",
            "description": "'",
            "stances": [
                "Nativist",
                "Nativist",
                "Indifferent",
                "Indifferent",
                "Indifferent",
                "Indifferent",
                "Indifferent"
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
            "id": 50,
            "name": "Internal Improvements",
            "description": "'",
            "stances": [
                "Opposes",
                "Opposes",
                "Opposes",
                "Moderate",
                "Supports",
                "Supports",
                "Supports"
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
            "id": 51,
            "name": "Slavery",
            "description": "'",
            "stances": [
                "Supports",
                "Supports",
                "Supports",
                "Moderate",
                "Moderate",
                "No Expansion",
                "Abolitionist"
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
            "questions": [
                {
                    "id": 623,
                    "description": "Martin Van Buren, Democrat and President until 1841, will be making a tour of the country to visit various friends and political figures. Will you extend the invitation for him to stay at your estate for a few days?",
                    "answers": [
                        {
                            "id": 4154,
                            "description": "It might be best if I don't appear overly friendly to leading Democrats. Especially one as unpopular as Van Buren.",
                            "feedback": "Word makes its way to New York that you had Martin Van Buren in your own hometown and did not extend an invitation to him.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 399,
                                    "amount": -0.008
                                }
                            ]
                        },
                        {
                            "id": 4155,
                            "description": "This would be a strictly personal invite. We are friends. And besides, it might blunt some opposition to my candidacy from New York.",
                            "feedback": "Word makes its way to New York that you and Martin Van Buren were able to put political differences aside and enjoy a few days of warm, personal companionship.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0025
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 399,
                                    "amount": 0.005
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 624,
                    "description": "What points will emphasize in your acceptance letter, as you accept the Whig nomination for President?",
                    "answers": [
                        {
                            "id": 4156,
                            "description": "I stand opposed to any annexation of Texas. It will reopen settled questions and distract our nation from its important political issues, such as economic development.",
                            "feedback": "By coming out so forcefully, you are gambling that the Northern wing of the party can hand you a victory this fall. Meanwhile the Democrats are making hay with this issue.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.115
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 133,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 382,
                                    "amount": -0.08
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 383,
                                    "amount": -0.08
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 384,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 385,
                                    "amount": -0.125
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 386,
                                    "amount": -0.08
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 387,
                                    "amount": -0.08
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 388,
                                    "amount": -0.15
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 389,
                                    "amount": -0.085
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 390,
                                    "amount": -0.095
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 391,
                                    "amount": -0.045
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 392,
                                    "amount": -0.15
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 394,
                                    "amount": 0.035
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 395,
                                    "amount": -0.08
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": -0.08
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 397,
                                    "amount": -0.045
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 398,
                                    "amount": -0.035
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 399,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 400,
                                    "amount": -0.2
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 401,
                                    "amount": -0.045
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 402,
                                    "amount": 0.025
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 405,
                                    "amount": -0.175
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": -0.01
                                }
                            ]
                        },
                        {
                            "id": 4157,
                            "description": "I support the annexation of Texas, so long as the admission of that state is paired with the admission of a free state. I will briefly mention that my positions on other issues are well-known and remain the same.",
                            "feedback": "By coming out so forcefully, you are gambling that the Southern wing of the party can hand you a victory this fall. Meanwhile the Democrats are making hay with this issue.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.075
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 133,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 1.1
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 384,
                                    "amount": -0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 385,
                                    "amount": -0.035
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 389,
                                    "amount": -0.035
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 391,
                                    "amount": -0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 392,
                                    "amount": -0.035
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 393,
                                    "amount": -0.11
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 394,
                                    "amount": -0.075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 397,
                                    "amount": -0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 398,
                                    "amount": -0.095
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 399,
                                    "amount": -0.085
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 401,
                                    "amount": -0.07
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 402,
                                    "amount": -0.055
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 403,
                                    "amount": -0.11
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 406,
                                    "amount": -0.11
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": -0.035
                                }
                            ]
                        },
                        {
                            "id": 4158,
                            "description": "I will avoid any mention of Texas. The main focus of my acceptance will be an elucidation of my economic principles, including a national bank, a tariff, and internal improvemnets.",
                            "feedback": "The worst of all worlds is to equivocate on such a central issue of the times. People of all persuasions doubt your motives, while the Democrats are making hay with this issue.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.115
                                }
                            ]
                        },
                        {
                            "id": 4159,
                            "description": "I will strike a middle ground on the Texas question, supporting annexation so long as it doesn't lead to war with Mexico, or to significant opposition from any section of the country.",
                            "feedback": "The worst of all worlds is to equivocate on such a central issue of the times. People of all persuasions doubt your motives, while the Democrats are making hay with this issue.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.1233
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 133,
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
                    "id": 625,
                    "description": "What position will you take on the Texas annexation issue?",
                    "answers": [
                        {
                            "id": 4160,
                            "description": "This discussion has grown tiresome, but let me restate that I support the annexation of Texas.",
                            "feedback": "This is unfortunately one of those issues where, no matter how many times you repeat yourself, people will continue to press you.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.01
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 134,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -50
                                }
                            ]
                        },
                        {
                            "id": 4161,
                            "description": "This discussion has grown tiresome, but I will continue to advocate for a moderate solution on this issue.",
                            "feedback": "This is unfortunately one of those issues where, no matter how many times you repeat yourself, people will continue to press you.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.015
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 134,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -50
                                }
                            ]
                        },
                        {
                            "id": 4162,
                            "description": "This discussion has grown tiresome, but let me restate that I oppose the annexation of Texas.",
                            "feedback": "This is unfortunately one of those issues where, no matter how many times you repeat yourself, people will continue to press you.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.015
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 134,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -50
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 639,
                    "description": "Do you support an Amendment that would limit the President to a single term in office?",
                    "answers": [
                        {
                            "id": 4199,
                            "description": "This is a necessary step against the overreach and abuse of power of the Executive branch.",
                            "feedback": "The problem is, this idea was clearly targeted at Andrew Jackson, and Democrats in general. You're really taking the Whig position here.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                }
                            ]
                        },
                        {
                            "id": 4200,
                            "description": "I don't support an Amendment on this issue, but I will personally promise not to run for reelection.",
                            "feedback": "This is a good way to finesse this issue. It has the added advantage, since you were a dark horse candidate, of uniting the factions of your party.",
                            "answerEffects": []
                        },
                        {
                            "id": 4201,
                            "description": "I don't think that this is a necessary step, at this time.",
                            "feedback": "This is the party line, but after a bitter nomination fight, some are disappointed that your success would preempt their 1848 campaigns.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
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
                    "id": 638,
                    "description": "What is your current position on the banking system?",
                    "answers": [
                        {
                            "id": 4195,
                            "description": "I stand for a national bank, broadly similar to the late Second Bank of the United States.",
                            "feedback": "Are you out of your mind? A national bank is anathema to the Democratic Party.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 50,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.045
                                }
                            ]
                        },
                        {
                            "id": 4196,
                            "description": "I stand for a national bank or an independent Treasury -- whichever can gain the most support. I would require any national bank to maintain a branch in every state.",
                            "feedback": "Are you out of your mind? A national bank is anathema to the Democratic Party.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 50,
                                    "stateId": -1,
                                    "amount": 0.3
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.03
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.005
                                }
                            ]
                        },
                        {
                            "id": 4197,
                            "description": "I will never support a national bank, but I do advocate an independent Treasury, so that federal funds won't be tied up in local speculations.",
                            "feedback": "The independent Treasury idea has broad support in the party, and also shows that Democrats are trying to do something after the 1837 crisis.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.025
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.005
                                }
                            ]
                        },
                        {
                            "id": 4198,
                            "description": "I support our current free banking system, and I see no need for the Treasury to insulate its operations from the state-chartered banks.",
                            "feedback": "There's nothing wrong with defending the current system, which is the Democratic system in large part.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 50,
                                    "stateId": -1,
                                    "amount": -0.55
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
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
                    "id": 626,
                    "description": "The background of your running mate, Theodore Frelinghuysen, has caused much distress among the Catholics of this country? Will you make any statements on this issue?",
                    "answers": [
                        {
                            "id": 4163,
                            "description": "We need to address these concerns and state categorically that the Whigs support our current naturalization laws and do not stand for nativism.",
                            "feedback": "At the national level, this is probably your best position. In certain locales the nativist sentiment does appear to be rising, however.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 49,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 382,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 383,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 386,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 387,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 390,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 395,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": -0.007
                                }
                            ]
                        },
                        {
                            "id": 4164,
                            "description": "Let's not make any statements on this issue. There are too many people on both sides of it who might take offense.",
                            "feedback": "",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 382,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 383,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 386,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 387,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 390,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 395,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": -0.007
                                }
                            ]
                        },
                        {
                            "id": 4165,
                            "description": "Of course we denounce rioting and lawlessness, but we do support some attempt to change our naturalization laws.",
                            "feedback": "Nativism appears to be on the rise, but you are probably better off, on the whole, taking a more moderate tack.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 49,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 382,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 383,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 386,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 387,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 390,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 395,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": -0.007
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 636,
                    "description": "What should your party's position be on the Tariff of 1842, which increased tariffs?",
                    "answers": [
                        {
                            "id": 4188,
                            "description": "We stand steadfast in support of this tariff. It is one of the few positive accomplishments of Mr. Tyler's so-called Presidency.",
                            "feedback": "This puts you outside of the party mainstream, to say the least. Hopefully it will help in a couple of the Northern states.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 48,
                                    "stateId": -1,
                                    "amount": 0.55
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 382,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 383,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 386,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 390,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 395,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": 0.015
                                }
                            ]
                        },
                        {
                            "id": 4189,
                            "description": "The primary purpose of our tariffs should be revenue. But should a small amount of protection <em>incidentally</em> occur from our tariff policy, that is acceptable.",
                            "feedback": "This answer satisfies the Southern wing of the party while providing some concession to Northern Democrats in states like New York.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.005
                                }
                            ]
                        },
                        {
                            "id": 4190,
                            "description": "We should avoid taking a strong position on this tariff. There are men in our party who stand on both sides of the issue.",
                            "feedback": "While true, people are getting the idea that you are dancing around a hot issue.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.03
                                }
                            ]
                        },
                        {
                            "id": 4191,
                            "description": "We must rescind this tariff and replace it with something much lower. I support free trade and low tariffs.",
                            "feedback": "This is certainly the party line on the tariff issue.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 48,
                                    "stateId": -1,
                                    "amount": -0.55
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.045
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 384,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 398,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 399,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 402,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 403,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 393,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 391,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 397,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 406,
                                    "amount": 0.01
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 637,
                    "description": "Do you believe that some revenue should be set aside from our tariffs to finance internal improvements, such as canals and roads?",
                    "answers": [
                        {
                            "id": 4192,
                            "description": "This is one of the key objectives of our current tariff policy, and I would support a strong infrastructure program as President.",
                            "feedback": "Support for a federal infrastructure program is quite limited within your party.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 48,
                                    "stateId": -1,
                                    "amount": 0.55
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 50,
                                    "stateId": -1,
                                    "amount": 0.55
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.035
                                }
                            ]
                        },
                        {
                            "id": 4193,
                            "description": "Only a very limited amount, for the most compelling projects. Otherwise the tariff should be for revenue purposes only.",
                            "feedback": "This answer satisfies the Southern wing of the party while providing some concession to Northern Democrats in states like New York.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.015
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.005
                                }
                            ]
                        },
                        {
                            "id": 4194,
                            "description": "I don't believe that it is constitutional or advisable for the federal government to undertake an internal improvements program.",
                            "feedback": "This is certainly the party line on the tariff issue.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.005
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 382,
                                    "amount": -0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 383,
                                    "amount": -0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 386,
                                    "amount": -0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 390,
                                    "amount": -0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 395,
                                    "amount": -0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": -0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": -0.015
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 635,
                    "description": "Is there something you can do to give the Southern Whigs political cover from the incessant attacks that they are in league with an anti-slavery party?",
                    "answers": [
                        {
                            "id": 4186,
                            "description": "I am as much in favor of the annexation of Texas as Mr. Polk is. To insinuate otherwise is nothing but dishonesty writ large.",
                            "feedback": "This position is broadly popular, but will it cost you in some regions?",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 47,
                                    "stateId": -1,
                                    "amount": -0.45
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 51,
                                    "stateId": -1,
                                    "amount": -0.2
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.005
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 133,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.3
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 382,
                                    "amount": 0.008
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 383,
                                    "amount": 0.008
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 386,
                                    "amount": 0.008
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 387,
                                    "amount": 0.008
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 390,
                                    "amount": 0.008
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 395,
                                    "amount": 0.008
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": 0.008
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": 0.008
                                }
                            ]
                        },
                        {
                            "id": 4187,
                            "description": "I am opposed to radicalism from any region, and that includes anti-slavery radicalism. The Whig Party is a national party with a national program that will benefit all regions equally.",
                            "feedback": "This is a good point to emphasize, especially if you don't support the Texas annexation.",
                            "answerEffects": []
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 628,
                    "description": "There have recently been riots and armed clashes between nativists and Irish immigrants in Philadelphia and elsewhere. Do you have any plans to condemn the Irish violence in these episodes?",
                    "answers": [
                        {
                            "id": 4168,
                            "description": "We should condemn the apparent lawlessness of the Irish arrivals, and ask whether we ought to reconsider our generous naturalization policies.",
                            "feedback": "This invigorates a certain wing of the party, but it could also cost you in certain states.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 49,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.005
                                }
                            ]
                        },
                        {
                            "id": 4169,
                            "description": "It's best if we avoid making any statements on this issue.",
                            "feedback": "",
                            "answerEffects": []
                        },
                        {
                            "id": 4170,
                            "description": "After a few days have passed and tempers have cooled, let us reemphasize our support for current naturalization laws.",
                            "feedback": "This could cost you some nativist support, but that wing is hopefully concentrated in states that aren't close.",
                            "answerEffects": []
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 634,
                    "description": "Does it make sense to attack Northern Democrats as enablers and fellow travelers of the Southern slavery expansion?",
                    "answers": [
                        {
                            "id": 4184,
                            "description": "My opposition to the annexation of Texas is known, but we could more explicitly tie that maneuver to the expansion of slavery.",
                            "feedback": "",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 47,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 51,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.001
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 133,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.1
                                }
                            ]
                        },
                        {
                            "id": 4185,
                            "description": "We should attack the Northern Democrats on their opposition to, or flip-flopping on, the issues of tariffs and internal improvements. They are on soft ground in that debate.",
                            "feedback": "This is probably your best stance vis a vis the Northern wing of the Democratic Party.",
                            "answerEffects": []
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 632,
                    "description": "Do you still support the idea that the federal government should purchase the telegraph patent and manage the technology?",
                    "answers": [
                        {
                            "id": 4180,
                            "description": "I absolutely believe that the development of telegraph lines should take its place alongside canals, harbors, and railroads as a national prerogative.",
                            "feedback": "This seems like a bit of an eccentric position to many people.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 50,
                                    "stateId": -1,
                                    "amount": 0.75
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.005
                                }
                            ]
                        },
                        {
                            "id": 4181,
                            "description": "I've supported internal improvements throughout my career, but telegraph lines are a different thing. I trust that private individuals can build these.",
                            "feedback": "There's nothing wrong with this response.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 50,
                                    "stateId": -1,
                                    "amount": 0.3
                                }
                            ]
                        },
                        {
                            "id": 4182,
                            "description": "Let's not make any divisive statements on this issue. The public is hardly clamoring for my opinion in any case.",
                            "feedback": "There's nothing wrong with this response.",
                            "answerEffects": []
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 631,
                    "description": "Do you plan to make any attacks against the Liberty Party, a radical abolitionist group that is fielding a third party candidate?",
                    "answers": [
                        {
                            "id": 4177,
                            "description": "Any attacks we make will only publicize this group more. Let's stick to our own campaign in this case.",
                            "feedback": "",
                            "answerEffects": []
                        },
                        {
                            "id": 4178,
                            "description": "Thomas Birney is a stooge of the Democrats, attempting to agitate emotions and divide our party. People ought to feel free to vote for him if they want to hand this election to James K. Polk.",
                            "feedback": "",
                            "answerEffects": []
                        },
                        {
                            "id": 4179,
                            "description": "I am steadfast against the annexation of Texas and the expansion of slavery. I believe that Birney's followers should be made aware of this point.",
                            "feedback": "",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 47,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 51,
                                    "stateId": -1,
                                    "amount": 0.5
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 633,
                    "description": "Was there really a bargain (a “Corrupt Bargain” to many) between yourself and John Quincy Adams which elevated him to the Presidency in 1825?",
                    "answers": [
                        {
                            "id": 4183,
                            "description": "I don't know how many times a man can deny an unjust allegation before fatigue sets in.",
                            "feedback": "Sadly, some attacks never lose their luster.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
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
                    "id": 629,
                    "description": "Cassius Clay, your cousin, has published a letter stating you are in accord with the abolitionist movement. How will you respond to this?",
                    "answers": [
                        {
                            "id": 4171,
                            "description": "We must put out a letter, clarifying that we only support abolition if slaveholders can be fairly compensated, with reasonable notice, and if freed slaves can be recolonized to Africa.",
                            "feedback": "This will obviously be a more popular position in certain regions.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.005
                                }
                            ]
                        },
                        {
                            "id": 4172,
                            "description": "We must attack Cassius Clay's statements at once, for the dishonest falsehoods that they are. I am in no way an abolitionist in this debate.",
                            "feedback": "This will obviously be a more popular position in certain regions.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 51,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 133,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.4
                                }
                            ]
                        },
                        {
                            "id": 4173,
                            "description": "I'm not going to dignify this letter with a response.",
                            "feedback": "Silence is the worst of all choices here.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.015
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 133,
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
                    "id": 630,
                    "description": "There are a number of attacks which focus on your fondness for horse-racing, drinking, gambling, female conversation, and the like. Do you have a response to this?",
                    "answers": [
                        {
                            "id": 4174,
                            "description": "There are a lot of places in America where men like that kind of thing. We will win the Yankee Puritan vote in any case.",
                            "feedback": "Talk of personal foibles is probably just sound and fury in this election.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 382,
                                    "amount": 0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 383,
                                    "amount": 0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 386,
                                    "amount": 0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 387,
                                    "amount": 0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 390,
                                    "amount": 0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 395,
                                    "amount": 0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": 0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": 0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 384,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 391,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 393,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 397,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 403,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 406,
                                    "amount": -0.007
                                }
                            ]
                        },
                        {
                            "id": 4175,
                            "description": "I've undertaken the amusements of our times, perhaps a little more than most, but it has never had any bearing on the work I have done.",
                            "feedback": "Talk of personal foibles is probably just sound and fury in this election.",
                            "answerEffects": []
                        },
                        {
                            "id": 4176,
                            "description": "In anticipation of this attack, I've actually made some effort in the past year or so to scale back my amusements. I don't believe it is ever too late for a man to change their conduct.",
                            "feedback": "Talk of personal foibles is probably just sound and fury in this election.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 382,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 383,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 386,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 387,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 390,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 395,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 384,
                                    "amount": 0.005
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 391,
                                    "amount": 0.005
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 393,
                                    "amount": 0.005
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 397,
                                    "amount": 0.005
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 403,
                                    "amount": 0.005
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 406,
                                    "amount": 0.005
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 644,
                    "description": "Do you support any changes to our current naturalization laws?",
                    "answers": [
                        {
                            "id": 4213,
                            "description": "I support our current naturalization laws as they stand.",
                            "feedback": "This is probably the best stance to take, particularly if you care to win a state like New York or Pennsylvania.",
                            "answerEffects": []
                        },
                        {
                            "id": 4214,
                            "description": "Only some very minor changes, like increasing the waiting period before new citizens may vote.",
                            "feedback": "",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 49,
                                    "stateId": -1,
                                    "amount": 0
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
                            "id": 4215,
                            "description": "Our current laws are in need of great revision, in light of the troubles we have had with recent immigrants.",
                            "feedback": "Immigration restriction is more of a Whig position, and it does you little good to advocate for it.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 49,
                                    "stateId": -1,
                                    "amount": -0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.015
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 649,
                    "description": "What is your position on the Oregon boundary question?",
                    "answers": [
                        {
                            "id": 4228,
                            "description": "We need to be just as aggressive on this issue as we are anywhere else. “Fifty-four Forty or Fight!”",
                            "feedback": "This is a rallying cry that can certainly help your party in the North and West.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.0025
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.005
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 384,
                                    "amount": 0.0075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 385,
                                    "amount": 0.0075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 387,
                                    "amount": 0.0075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 388,
                                    "amount": 0.0075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 391,
                                    "amount": 0.0075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 393,
                                    "amount": 0.0075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 394,
                                    "amount": 0.0075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 397,
                                    "amount": 0.0075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 398,
                                    "amount": 0.0075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 399,
                                    "amount": 0.0075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 401,
                                    "amount": 0.0075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 402,
                                    "amount": 0.0075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 403,
                                    "amount": 0.0075
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 406,
                                    "amount": 0.0075
                                }
                            ]
                        },
                        {
                            "id": 4229,
                            "description": "We need to negotiate a permanent agreement with Great Britain that grants some of all of the Oregon Territory to the United States.",
                            "feedback": "There's no reason to equivocate on the Oregon issue. People want aggressive action there.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 384,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 385,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 387,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 388,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 391,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 393,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 394,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 397,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 398,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 399,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 401,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 402,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 403,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 406,
                                    "amount": 0.02
                                }
                            ]
                        },
                        {
                            "id": 4230,
                            "description": "I would support any agreement, as long as the United States keeps the land that is south and east of the Colombia River.",
                            "feedback": "There's no reason to equivocate on the Oregon issue. People want aggressive action there.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 384,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 385,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 387,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 388,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 391,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 393,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 394,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 397,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 398,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 399,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 401,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 402,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 403,
                                    "amount": 0.02
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 406,
                                    "amount": 0.02
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 641,
                    "description": "Aside from the issue of Texas, do you support the expansion of the United States in general? Into Oregon, other parts of Mexico, Cuba, etc.?",
                    "answers": [
                        {
                            "id": 4205,
                            "description": "I am against the annexation of Texas. And just to show that this does derive from sectional prejudice, I am also against expansion into Oregon or other regions.",
                            "feedback": "People are wondering if they are reading your words correctly. Annexation was supposed to be the primary issue of your campaign.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 47,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.001
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 133,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.1
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 382,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 383,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 386,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 390,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 395,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": 0.015
                                }
                            ]
                        },
                        {
                            "id": 4206,
                            "description": "I believe that the United States, in line with the “Manifest Destiny” ideal, should expand wherever feasible.",
                            "feedback": "",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.005
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 133,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.2
                                }
                            ]
                        },
                        {
                            "id": 4237,
                            "description": "Oregon is a different issue than that of Texas. In Oregon we have an existing, legitimate claim.",
                            "feedback": "This is a strange aside to take, but one that is unlikely to make much of an impression.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 384,
                                    "amount": 0.004
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 385,
                                    "amount": 0.004
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 387,
                                    "amount": 0.004
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 388,
                                    "amount": 0.004
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 391,
                                    "amount": 0.004
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 393,
                                    "amount": 0.004
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 394,
                                    "amount": 0.004
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 397,
                                    "amount": 0.004
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 398,
                                    "amount": 0.004
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 399,
                                    "amount": 0.004
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 401,
                                    "amount": 0.004
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 402,
                                    "amount": 0.004
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 403,
                                    "amount": 0.004
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 406,
                                    "amount": 0.004
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 645,
                    "description": "Do you support any effort to establish a unified, national currency?",
                    "answers": [
                        {
                            "id": 4216,
                            "description": "I support a national bank, and one clear argument for the bank is the total chaos we've had with our currency since 1837.",
                            "feedback": "A national bank is anathema to most Democrats.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 50,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.035
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 382,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 383,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 386,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 390,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 395,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 387,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 388,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 394,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 401,
                                    "amount": 0.015
                                }
                            ]
                        },
                        {
                            "id": 4217,
                            "description": "Only if we could establish one without chartering a new national bank.",
                            "feedback": "What's wrong with a national bank? Your supporters are concerned by this statement.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 50,
                                    "stateId": -1,
                                    "amount": 0.2
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.005
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.015
                                }
                            ]
                        },
                        {
                            "id": 4218,
                            "description": "I support an independent Treasury, but not one that would disseminate a national currency.",
                            "feedback": "There's nothing wrong with taking this position.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                }
                            ]
                        },
                        {
                            "id": 4219,
                            "description": "Our current system is more democratic than any alternative that could be devised. Let the private banks issue currency in line with their own strength and prosperity.",
                            "feedback": "There's nothing wrong with taking this position.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 50,
                                    "stateId": -1,
                                    "amount": -0.55
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
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
                    "id": 648,
                    "description": "Regardless of your personal feelings, would you sign an act which established an independent Treasury for the government's funds?",
                    "answers": [
                        {
                            "id": 4224,
                            "description": "The independent Treasury is a halfway measure, designed to cover for the disaster that was the war against the Second Bank of the United States.",
                            "feedback": "What is the idea behind this outburst? The Bank War was, perhaps, Andrew Jackson's central initiative as President.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 50,
                                    "stateId": -1,
                                    "amount": 0.6
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.03
                                }
                            ]
                        },
                        {
                            "id": 4225,
                            "description": "I would prefer a national bank, but I would be willing to sign a bill which created an independent Treasury.",
                            "feedback": "A national bank is anathema to most Democrats.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 50,
                                    "stateId": -1,
                                    "amount": 0.3
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.025
                                }
                            ]
                        },
                        {
                            "id": 4226,
                            "description": "The creation of an independent Treasury will be one of the key initiatives of my Presidency.",
                            "feedback": "This is a good position to run a campaign on.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                }
                            ]
                        },
                        {
                            "id": 4227,
                            "description": "I support our current banking system, and would not support any ill-conceived attempts to centralize our finances.",
                            "feedback": "There's nothing wrong with taking this position.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 50,
                                    "stateId": -1,
                                    "amount": -0.55
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
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
                    "id": 646,
                    "description": "Do you agree with Robert Walker's letter, arguing that that slavery issue will be diluted by national expansion?",
                    "answers": [
                        {
                            "id": 4220,
                            "description": "I believe this letter to be disingenuous at best. Further expansion will reopen the debate on slavery rather than suppress it.",
                            "feedback": "Better to just ignore this letter.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 47,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 51,
                                    "stateId": -1,
                                    "amount": 0.2
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.01
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.002
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 133,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.15
                                }
                            ]
                        },
                        {
                            "id": 4221,
                            "description": "We won't address Mr. Walker's letter directly, but we are in favor of annexation.",
                            "feedback": "Probably best to ignore this letter.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 133,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.1
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 643,
                    "description": "Do you have any statement to make on John Calhoun's “Packenham Letter”, stating slavery to be a positive blessing, and justifying the annexation of Texas as a pro-slavery move?",
                    "answers": [
                        {
                            "id": 4210,
                            "description": "I would not go to the lengths of John Calhoun, but Texas would certainly help expand the market for slavery in our country.",
                            "feedback": "It's a difficult issue to address, but putting yourself in sympathy with John Calhoun is certainly not the right way to do it.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 51,
                                    "stateId": -1,
                                    "amount": -0.75
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.05
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 133,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.4
                                }
                            ]
                        },
                        {
                            "id": 4211,
                            "description": "We will frame Texas as an issue of national pride and national expansion. I rebuke the idea of Calhoun that this is purely a Southern enterprise.",
                            "feedback": "This is probably the best stance to take.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.005
                                }
                            ]
                        },
                        {
                            "id": 4212,
                            "description": "I disagree with John Calhoun across the board, which leads to my opposition to the annexation of Texas.",
                            "feedback": "People are wondering if they are reading your words correctly. Annexation was supposed to be the primary issue of your campaign.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Issue",
                                    "candidateId": -1,
                                    "issueId": 47,
                                    "stateId": -1,
                                    "amount": 0.5
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.02
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 133,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.15
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 382,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 383,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 386,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 390,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 395,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": 0.015
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": 0.015
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 650,
                    "description": "Do you have any criticism of the authorities in Illinois, regarding their failure to properly protect Joseph Smith before his assassination in June?",
                    "answers": [
                        {
                            "id": 4231,
                            "description": "Regardless of our personal feelings, it always concerning when a religious leader and Presidential candidate can simply be killed by a mob.",
                            "feedback": "Are you trying to win the Mormon vote this year? This is one case where it's definitely best to keep your opinions private.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.033
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 387,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 388,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 399,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 401,
                                    "amount": 0.05
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 387,
                                    "amount": -0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 388,
                                    "amount": -0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 396,
                                    "amount": -0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 399,
                                    "amount": -0.04
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 401,
                                    "amount": -0.04
                                }
                            ]
                        },
                        {
                            "id": 4232,
                            "description": "This is not an issue that we plan to address in our campaign.",
                            "feedback": "",
                            "answerEffects": []
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                },
                {
                    "id": 651,
                    "description": "Is there a particular state where your party should concentrate its resources and most talented speakers as the election draws near?",
                    "answers": [
                        {
                            "id": 4233,
                            "description": "New York",
                            "feedback": "Good luck in this crucial state.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.002
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.002
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 399,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 399,
                                    "amount": 0.007
                                }
                            ]
                        },
                        {
                            "id": 4234,
                            "description": "Pennsylvania",
                            "feedback": "Good luck in this crucial state.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.002
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.002
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 402,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 402,
                                    "amount": 0.007
                                }
                            ]
                        },
                        {
                            "id": 4235,
                            "description": "Ohio",
                            "feedback": "Good luck in this crucial state.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.002
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.002
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 401,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 401,
                                    "amount": 0.007
                                }
                            ]
                        },
                        {
                            "id": 4236,
                            "description": "Virginia",
                            "feedback": "Good luck in this crucial state.",
                            "answerEffects": [
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": 0.002
                                },
                                {
                                    "answerEffectType": "Global",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": -1,
                                    "amount": -0.002
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": -0.007
                                },
                                {
                                    "answerEffectType": "State",
                                    "candidateId": 132,
                                    "issueId": -1,
                                    "stateId": 407,
                                    "amount": 0.007
                                }
                            ]
                        }
                    ],
                    "keepInPlaceIfQuestionsShuffled": false
                }
            ]
        }
    ]
};

export default testScenario;