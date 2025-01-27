import { ScenarioModel } from "../../oseg/engine/models/ScenarioModel";

const data : ScenarioModel ={
    "candidates": [
        {
            "id": 2,
            "firstName": "Main",
            "lastName": "Guy",
            "party": "Freedom Party",
            "homeState": "South Dakota",
            "color": "#FF0000",
            "issueScores": [
                {
                    "issueId": 19490,
                    "issueScore": 0,
                    "weight": 1
                }
            ],
            "description": "Just a normal guy",
            "imageUrl": "https://placecats.com/300/300",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        },
        {
            "id": 3,
            "firstName": "Other",
            "lastName": "Guy",
            "party": "Freedom Party",
            "homeState": "South Dakota",
            "color": "#FF0000",
            "issueScores": [
                {
                    "issueId": 19490,
                    "issueScore": 0,
                    "weight": 1
                }
            ],
            "description": "Just a normal guy",
            "imageUrl": "https://placecats.com/300/300",
            "runningMateIds": [],
            "startingGlobalMultiplier": 1
        }
    ],
    "states": [
        {
            "id": 30644,
            "name": "TEST",
            "abbr": "TEST",
            "electoralVotes": 0,
            "popularVotes": 0,
            "baseIssueScores": [
                {
                    "issueId": 19490,
                    "issueScore": 0,
                    "weight": 1
                }
            ],
            "baseCandidateStateModifiers": [
                {
                    "candidateId": 2,
                    "amount": 1
                },
                {
                    "candidateId": 3,
                    "amount": 1
                }
            ]
        }
    ],
    "issues": [
        {
            "id": 19490,
            "name": "New Issue",
            "description": "",
            "stances": [
                "Stance",
                "Stance",
                "Stance",
                "Stance",
                "Stance",
                "Stance",
                "Stance"
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
            "playerId": 2,
            "questions": [
                {
                    "id": 171260,
                    "description": "Description goes here",
                    "answers": [],
                    "keepInPlaceIfQuestionsShuffled": true,
                    "enabled": true,
                    "onlyEnableAtStartIfRunningMateId": -1
                },
                {
                    "id": 171261,
                    "description": "Description goes here",
                    "answers": [],
                    "keepInPlaceIfQuestionsShuffled": true,
                    "enabled": true,
                    "onlyEnableAtStartIfRunningMateId": -1
                },
                {
                    "id": 171262,
                    "description": "Description goes here",
                    "answers": [],
                    "keepInPlaceIfQuestionsShuffled": true,
                    "enabled": true,
                    "onlyEnableAtStartIfRunningMateId": -1
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
        "advisorImage": "",
        "quote": ""
    },
    "hasStateVisits": false,
    "scenarioName": "",
    "scenarioDescription": "",
    "scenarioImageUrl": "",
    "credits": "",
    "music": []
}

export { data };

