import { assert, expect, test } from "vitest";
import { AnswerModel } from "../../oseg/engine/models/AnswerModel";
import { getBlankHeadlessEngine } from "../HeadlessEngine";

async function testGlobalAnswerEffect() {
    const {engine, candidateId} = await getBlankHeadlessEngine();

    const amount = 1;
    const opinionBefore = engine.scenarioController.getGlobalModifierForCandidate(candidateId);
    
    const answer : AnswerModel = {
        id: 0,
        description: "",
        feedback: "",
        answerEffects: [
            {
                answerEffectType: "Global",
                candidateId: candidateId,
                issueId: 0,
                stateId: 0,
                amount: amount
            }
        ]
    }

    engine.applyAnswer(answer);
    const opinionAfter = engine.scenarioController.getGlobalModifierForCandidate(candidateId);
    expect(opinionAfter).toBe(opinionBefore + amount);
}

async function testStateAnswerEffect() {
    const stateId = 30644;
    const {engine, candidateId} = await getBlankHeadlessEngine();

    const amount = 1;
    const opinionBefore = engine.scenarioController.getStateControllerByStateId(stateId)?.getCandidateStateModifier(candidateId);
    assert(opinionBefore != undefined);

    const answer : AnswerModel = {
        id: 0,
        description: "",
        feedback: "",
        answerEffects: [
            {
                answerEffectType: "State",
                candidateId: candidateId,
                issueId: 0,
                stateId: stateId,
                amount: amount
            }
        ]
    }

    engine.applyAnswer(answer);

    const opinionAfter = engine.scenarioController.getStateControllerByStateId(stateId)?.getCandidateStateModifier(candidateId);

    assert(opinionAfter != undefined);
    expect(opinionAfter).toBe(opinionBefore + amount);
}


async function testIssueAnswerEffect() {
   
    const {engine, candidateId} = await getBlankHeadlessEngine();

    const issueId = 19490;

    const amount = 1;
    const opinionBefore = engine.scenarioController.getCandidateByCandidateId(candidateId).issueScores.getIssueScoreForIssue(issueId);
    assert(opinionBefore != undefined);

    const answer : AnswerModel = {
        id: 0,
        description: "",
        feedback: "",
        answerEffects: [
            {
                answerEffectType: "Issue",
                candidateId: candidateId,
                issueId: issueId,
                stateId: 0,
                amount: amount
            }
        ]
    }

    engine.applyAnswer(answer);

    const opinionAfter = engine.scenarioController.getCandidateByCandidateId(candidateId).issueScores.getIssueScoreForIssue(issueId);

    console.log(opinionBefore,opinionAfter)

    expect(opinionAfter).toBe(opinionBefore + amount);
}

test('test global answer effect', testGlobalAnswerEffect);
test('test state answer effect', testStateAnswerEffect);
test('test issue answer effect', testIssueAnswerEffect);