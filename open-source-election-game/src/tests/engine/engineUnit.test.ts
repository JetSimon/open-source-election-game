import { assert, expect, test } from "vitest";
import { AnswerModel } from "../../oseg/engine/models/AnswerModel";
import { getHeadlessEngine } from "../HeadlessEngine";
import { data } from "../blankData/data";
import rawLogic from "../blankData/logic.js?raw";

async function testGlobalAnswerEffect() {
    const seed = Date.now().toString();
    const candidateId = 2;

    const engine = await getHeadlessEngine(
        data,
        rawLogic,
        candidateId,
        -1,
        seed,
        false
    )

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

    expect(opinionAfter == (opinionBefore + amount), `before: ${opinionBefore}, after: ${opinionAfter}`);
}

async function testStateAnswerEffect() {
    const seed = Date.now().toString();
    const candidateId = 2;
    const stateId = 30644;

    const engine = await getHeadlessEngine(
        data,
        rawLogic,
        candidateId,
        -1,
        seed,
        false
    )

    const amount = 1;
    const opinionBefore = engine.scenarioController.getStateControllerByStateId(stateId)?.getOpinionForCandidate(candidateId);
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

    const opinionAfter = engine.scenarioController.getStateControllerByStateId(stateId)?.getOpinionForCandidate(candidateId);
    assert(opinionAfter != undefined);

    expect(opinionAfter == (opinionBefore + amount), `before: ${opinionBefore}, after: ${opinionAfter}`);
}


async function testIssueAnswerEffect() {
    const seed = Date.now().toString();
    const candidateId = 2;
    const issueId = 19490;

    const engine = await getHeadlessEngine(
        data,
        rawLogic,
        candidateId,
        -1,
        seed,
        false
    )

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
    assert(opinionAfter != undefined);

    expect(opinionAfter == (opinionBefore + amount), `before: ${opinionBefore}, after: ${opinionAfter}`);
}

test('test global answer effect', testGlobalAnswerEffect);
test('test state answer effect', testStateAnswerEffect);
test('test issue answer effect', testIssueAnswerEffect);