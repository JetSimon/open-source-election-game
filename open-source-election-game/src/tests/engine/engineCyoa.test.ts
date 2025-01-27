import { expect, test } from "vitest";
import { QuestionModel } from "../../oseg/engine/models/QuestionModel";
import { getBlankHeadlessEngine } from "../HeadlessEngine";

async function testInsertNewQuestionAfterIndex() {
    const {engine} = await getBlankHeadlessEngine();
    const index = 2;
    const newQuestion : QuestionModel = {
        id: 0,
        description: "",
        answers: [],
        keepInPlaceIfQuestionsShuffled: false
    }
    engine.insertNewQuestionAfterIndex(newQuestion, index);
    expect(engine.scenarioController.questions[index + 1]).toBe(newQuestion);
}

async function testInsertNewQuestionNext() {
    const {engine} = await getBlankHeadlessEngine();
    const newQuestion : QuestionModel = {
        id: 0,
        description: "",
        answers: [],
        keepInPlaceIfQuestionsShuffled: false
    }
    engine.insertNewQuestionNext(newQuestion);
    expect(engine.scenarioController.questions[engine.currentQuestionIndex + 1]).toBe(newQuestion);
}

async function testRemoveQuestionById() {
    const {engine} = await getBlankHeadlessEngine();
    const questionId = 171260;
    expect(engine.scenarioController.questions.filter(x => x.id == questionId).length).toBe(1);
    engine.removeQuestionById(questionId);
    expect(engine.scenarioController.questions.filter(x => x.id == questionId).length).toBe(0);
}

async function testEnableQuestionById() {
    const {engine} = await getBlankHeadlessEngine();
    const newQuestion : QuestionModel = {
        id: 0,
        description: "",
        answers: [],
        keepInPlaceIfQuestionsShuffled: false,
        enabled: false
    }
    engine.insertNewQuestionNext(newQuestion);
    engine.setQuestionEnabledById(0, true);
    expect(newQuestion.enabled).toBe(true);
}

async function testAddCandidateGlobalMultiplier() {
    const {engine, candidateId} = await getBlankHeadlessEngine();
    const amount = 1;
    const before = engine.scenarioController.getGlobalModifierForCandidate(candidateId);
    engine.addCandidateGlobalMultiplier(candidateId, amount);
    const after = engine.scenarioController.getGlobalModifierForCandidate(candidateId);
    expect(after).toBe(before + amount);
}

async function testSetBottomBannerOverride() {
    const {engine} = await getBlankHeadlessEngine();
    const top = "PASS";
    const bottom = "TEST";
    engine.setBottomBannerOverrideText(top, bottom);
    expect(engine.scenarioController.bannerOverrideLine1).toBe(top);
    expect(engine.scenarioController.bannerOverrideLine2).toBe(bottom);
}

async function testHasAnsweredAny() {
    const {engine} = await getBlankHeadlessEngine();
    engine.answers.push(1);
    engine.answers.push(2);
    engine.answers.push(3);
    engine.answers.push(4);
    expect(engine.hasAnsweredAny([])).toBe(false);
    expect(engine.hasAnsweredAny([5])).toBe(false);
    expect(engine.hasAnsweredAny([1,2,3,4])).toBe(true);
}

async function testHasAnsweredAll() {
    const {engine} = await getBlankHeadlessEngine();
    engine.answers.push(1);
    engine.answers.push(2);
    engine.answers.push(3);
    engine.answers.push(4);
    expect(engine.hasAnswered([])).toBe(true);
    expect(engine.hasAnswered([1,2,3,4,5])).toBe(false);
    expect(engine.hasAnswered([1,2,3,4])).toBe(true);
}

test('test insert new question after index', testInsertNewQuestionAfterIndex);
test('test insert new question next', testInsertNewQuestionNext);
test('test enable question by id', testEnableQuestionById)
test('test remove question by id', testRemoveQuestionById);
test('test add global candidate multiplier', testAddCandidateGlobalMultiplier);
test('test bottom banner override', testSetBottomBannerOverride);
test('test answered any', testHasAnsweredAny);
test('test answered all', testHasAnsweredAll);
