import ScenarioModel from "../models/ScenarioModel";

const testScenario: ScenarioModel = {
    candidates: [
        {
            id: "A",
            color: "#FF0000",
            firstName: "Test",
            lastName: "Testerson",
            party: "Party A",
            homeStateId: "C",
            issueScores: [
                {
                    issueId: "Issue1",
                    weight: -1
                },
                {
                    issueId: "Issue2",
                    weight: 0
                }
            ]
        },
        {
            id: "B",
            color: "#0000FF",
            firstName: "Testy",
            lastName: "Testoski",
            party: "Party B",
            homeStateId: "C",
            issueScores: [
                {
                    issueId: "Issue1",
                    weight: 1
                },
                {
                    issueId: "Issue2",
                    weight: 0
                }
            ]
        }
    ],
    states: [
        {
            id: "C",
            name: "Loves Big Issue",
            population: 100,
            baseIssueScores: [
                {
                    issueId: "Issue1",
                    weight: 0.7
                },
                {
                    issueId: "Issue2",
                    weight: 0
                }
            ]
        },
        {
            id: "D",
            name: "Hates Big Issue",
            population: 100,
            baseIssueScores: [
                {
                    issueId: "Issue1",
                    weight: -1
                },
                {
                    issueId: "Issue2",
                    weight: 0
                }
            ]
        },
        {
            id: "E",
            name: "Indifferent",
            population: 100,
            baseIssueScores: [
                {
                    issueId: "Issue1",
                    weight: 0
                },
                {
                    issueId: "Issue2",
                    weight: 0
                }
            ]
        }
    ],
    issues: [
        {
            id: "Issue1",
            name: "Big Issue",
            description: "Test"
        },
        {
            id: "Issue2",
            name: "Small Issue",
            description: "Test"
        }
    ],
    questions: [
        {
            description: "Test Question 1",
            answers: [
                {
                    description: "Global +A",
                    feedback: "Test",
                    answerEffects: [
                        {
                            answerEffectType: "Global",
                            candidateId: "A",
                            targetId: "",
                            amount: 1
                        }
                    ]
                },
                {
                    description: "+1 in State E",
                    feedback: "Test2",
                    answerEffects: [
                        {
                            answerEffectType: "State",
                            candidateId: "A",
                            targetId: "E",
                            amount: 1
                        }
                    ]
                },
                {
                    description: "-1 for A for Issue Big Issue",
                    feedback: "Test3",
                    answerEffects: [
                        {
                            answerEffectType: "Issue",
                            candidateId: "A",
                            targetId: "Issue1",
                            amount: -1
                        }
                    ]
                }
            ],
            keepInPlaceIfQuestionsShuffled: true
        }
    ]
};

export default testScenario;