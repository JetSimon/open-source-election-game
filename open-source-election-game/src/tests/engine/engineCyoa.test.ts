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
    expect(engine.scenarioController.questions[index + 1] == newQuestion);
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
    expect(engine.scenarioController.questions[engine.currentQuestionIndex + 1] == newQuestion);
}

test('test insert new question after index', testInsertNewQuestionAfterIndex);
test('test insert new question next', testInsertNewQuestionNext);
