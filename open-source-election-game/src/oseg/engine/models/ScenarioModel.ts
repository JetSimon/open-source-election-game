import { CandidateModel } from "./CandidateModel";
import { HistoricalResultsModel } from "./HistoricalResultsModel";
import { Issue } from "./Issue";
import { ScenarioSideModel } from "./ScenarioSideModel";
import { SongModel } from "./SongModel";
import { StateModel } from "./StateModel";
import { ThemeModel } from "./ThemeModel";
import { Tooltip } from "./Tooltip";

interface ScenarioModel {
    theme : ThemeModel;
    hasStateVisits: boolean;
    scenarioName: string;
    scenarioDescription: string;
    scenarioImageUrl: string;
    candidates: CandidateModel[];
    states: StateModel[];
    issues: Issue[];
    scenarioSides: ScenarioSideModel[];
    credits: string;
    music : SongModel[];
    tooltips? : Tooltip[];
    questionsPerVisit? : number;
    skipRunningMateSelection? : boolean;
    historicalResults? : HistoricalResultsModel;
    furtherReading? : string;
}

export type { ScenarioModel };

