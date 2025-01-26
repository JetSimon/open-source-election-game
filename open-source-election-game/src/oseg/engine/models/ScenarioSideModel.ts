import { QuestionModel } from "./QuestionModel";

interface ScenarioSideModel {
    playerId: number;
    questions: QuestionModel[];
}

export type { ScenarioSideModel };
