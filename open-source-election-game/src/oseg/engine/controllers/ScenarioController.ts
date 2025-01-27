import { seededShuffleArray } from "../../utils/ArrayUtils";
import { Engine } from "../Engine";
import { IssueScores } from "../IssueScores";
import { HistoricalResultsModel } from "../models/HistoricalResultsModel";
import { QuestionModel } from "../models/QuestionModel";
import { ScenarioModel } from "../models/ScenarioModel";
import { ThemeModel } from "../models/ThemeModel";
import { CandidateController } from "./CandidateController";
import { StateController } from "./StateController";

class ScenarioController {
    model: ScenarioModel = this.makeEmptyScenarioModel();
    stateControllers: StateController[] = [];
    candidateControllers: CandidateController[] = [];
    runningMateControllers: CandidateController[] = [];
    issueScores: IssueScores = new IssueScores([]);
    globalModifiers: Map<number, number> = new Map<number, number>();
    questions: QuestionModel[] = [];
    theme: ThemeModel = this.makeEmptyTheme();
    historicalResults? : HistoricalResultsModel;

    bannerOverrideLine1: string | undefined = undefined;
    bannerOverrideLine2: string | undefined = undefined;

    makeEmptyTheme(): ThemeModel {
        return {
            backgroundImageUrl: "",
            backgroundColor: "#000000",
            headerImageUrl: "",
            primaryGameWindowColor: "#000000",
            secondaryGameWindowColor: "#000000",
            primaryGameWindowTextColor: "#000000",
            secondaryGameWindowTextColor: "#000000",
            bottomBannerBackgroundColor: "#000000",
            bottomBannerTextColor: "#000000",
            advisorImage: "",
            quote: ""
        };
    }

    makeEmptyScenarioModel(): ScenarioModel {
        return {
            theme: this.makeEmptyTheme(),
            hasStateVisits: false,
            candidates: [],
            states: [],
            issues: [],
            scenarioSides: [],
            scenarioDescription: "",
            scenarioName: "",
            scenarioImageUrl: "",
            credits: "",
            music: []
        };
    }

    isCandidateRunningMate(engine: Engine, candidateId: number) {

        if (engine.getPlayerCandidateController().getId() == candidateId) {
            return false;
        }

        if (engine.runningMateId != -1 && engine.getPlayerRunningMateModel().id == candidateId) {
            return true;
        }

        for (const candidate of engine.scenarioController.model.candidates) {
            for (const mateId of candidate.runningMateIds) {
                if (mateId == candidateId) {
                    return true;
                }
            }
        }

        return false;
    }

    loadScenario(engine: Engine, model: ScenarioModel, sideIndex: number, isShuffled: boolean) {
        this.model = model;
        this.theme = this.model.theme;
        
        this.historicalResults = undefined;

        this.candidateControllers = this.model.candidates.filter((candidateModel) => !this.isCandidateRunningMate(engine, candidateModel.id)).map((candidateModel) => new CandidateController(candidateModel));
        this.runningMateControllers = this.model.candidates.filter((candidateModel) => this.isCandidateRunningMate(engine, candidateModel.id)).map((candidateModel) => new CandidateController(candidateModel));

        const toRemove = new Set();
        for (const candidateController of this.getCandidates()) {
            for (const issue of this.model.issues) {
                if (!candidateController.issueScores.hasIssue(issue.id)) {
                    if(engine.logToConsole) {
                        console.warn("Candidate with id", candidateController.getId(), "doesn't have an issue score for issue with id", issue.id, "going to remove them for now");
                    }
                    
                    toRemove.add(candidateController.getId());
                    break;
                }
            }
        }
        this.candidateControllers = this.candidateControllers.filter((x) => !toRemove.has(x.getId()));
        for (const candidateController of this.getCandidates()) {
            this.globalModifiers.set(candidateController.getId(), candidateController.model.startingGlobalMultiplier);
        }

        this.stateControllers = this.model.states.map((stateModel) => new StateController(this, stateModel));

        this.questions = this.model.scenarioSides.length == 0 ? [] : this.model.scenarioSides[sideIndex].questions;

        for (const question of this.questions) {
            if (question.enabled == undefined) {
                question.enabled = true;
            }

            if (question.onlyEnableAtStartIfRunningMateId != undefined && question.onlyEnableAtStartIfRunningMateId != -1) {
                const neededRunningMate = question.onlyEnableAtStartIfRunningMateId;
                question.enabled = engine.runningMateId == neededRunningMate;
            }
        }

        // Check if data.json contains historical results
        if (model.historicalResults) {
            this.historicalResults = {
                popularVotes: model.historicalResults.popularVotes,
                electoralVotes: model.historicalResults.electoralVotes
            };
        }

        if (isShuffled) {
            const unpinnedIndices: number[] = [];
            for (let i = 0; i < this.questions.length; i++) {
                if (!this.questions[i].keepInPlaceIfQuestionsShuffled) {
                    unpinnedIndices.push(i);
                }
            }

            const newIndices = unpinnedIndices.slice();
            seededShuffleArray(newIndices, engine.random);
            const prev = JSON.parse(JSON.stringify(this.questions));

            for (let i = 0; i < unpinnedIndices.length; i++) {
                const prevIndex = unpinnedIndices[i];
                const newIndex = newIndices[i];
                this.questions[newIndex] = prev[prevIndex];
            }
        }

        for (let i = 0; i < this.questions.length; i++) {
            seededShuffleArray(this.questions[i].answers, engine.random);
        }
    }

    getCandidates() {
        return this.candidateControllers;
    }

    getIssues() {
        return this.model.issues;
    }

    getStates() {
        return this.stateControllers;
    }

    getGlobalModifierForCandidate(candidateId: number) {
        const modifier = this.globalModifiers.get(candidateId);
        if (modifier == undefined) {
            console.error("No candidate with id", candidateId, "when trying to get global modifier");
            return 0;
        }
        return modifier;
    }

    setCandidateGlobalModifier(candidateId: number, amount: number) {
        this.globalModifiers.set(candidateId, Math.max(0, amount));
    }

    changeCandidateGlobalModifier(candidateId: number, amount: number) {
        this.globalModifiers.set(candidateId, Math.max(0, this.getGlobalModifierForCandidate(candidateId) + amount));
    }

    getStateControllerByStateId(stateId: number): StateController | null {
        const controllers = this.stateControllers.filter((state) => state.getId() == stateId);
        if (controllers.length > 0) {
            return controllers[0];
        }
        return null;
    }

    getCandidateByCandidateId(candidateId: number) {
        let candidate = this.candidateControllers.filter((candidate) => candidate.getId() == candidateId)[0];
        if(candidate == undefined) {
            candidate = this.runningMateControllers.filter((x) => x.getId() == candidateId)[0];
        }
        return candidate;
    }

    /**
     * 
     * @returns The number of ENABLED questions in the scenario
     */
    getNumberOfEnabledQuestions(): number {
        return this.questions.filter((question) => question.enabled).length;
    }

    getQuestions() {
        return this.questions;
    }

    getRunningMateControllerById(id: number): CandidateController | undefined {
        return this.runningMateControllers.filter((mate) => mate.getId() == id)[0];
    }

    getHistoricalResults() {
        return this.historicalResults;
    }
}

export { ScenarioController };

