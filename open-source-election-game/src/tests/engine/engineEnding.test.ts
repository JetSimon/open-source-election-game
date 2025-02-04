import { expect, test } from "vitest";
import { FinalResultsModel } from "../../oseg/engine/models/FinalResultsModel";
import { CandidateModel } from "../../oseg/engine/models/CandidateModel";
import { CandidateController } from "../../oseg/engine/controllers/CandidateController";
import { getBlankHeadlessEngine } from "../HeadlessEngine";

async function testDeadlockTrue() {
    const {engine} = await getBlankHeadlessEngine();

    const pvs = new Map();
    pvs.set(0, 100);
    pvs.set(1, 100);

    const evs = new Map();
    evs.set(0, 100);
    evs.set(1, 100);

    const results : FinalResultsModel = {
        popularVotes: pvs,
        electoralVotes: evs,
        candidates: [],
        totalPopularVotes: 200,
        totalElectoralVotes: 200
    }

    expect(engine.isDeadlock(results)).toBe(true);
}

async function testDeadlockFalse() {
    const {engine} = await getBlankHeadlessEngine();

    const pvs = new Map();
    pvs.set(0, 100);
    pvs.set(1, 100);

    const evs = new Map();
    evs.set(0, 100);
    evs.set(1, 200);

    const results : FinalResultsModel = {
        popularVotes: pvs,
        electoralVotes: evs,
        candidates: [],
        totalPopularVotes: 200,
        totalElectoralVotes: 300
    }
    
    expect(engine.isDeadlock(results)).toBe(false);
}

// Check if player popular vote percentage calculation is correct
async function testPlayerPvPercentage() {
    const {engine} = await getBlankHeadlessEngine();

    const candidateModel: CandidateModel = {
        id: 1,
        firstName: "testy",
        lastName: "tester",
        party: "The test party",
        homeState: "Testy state",
        color: "#000000",
        issueScores: [],
        description: "testtesttest",
        imageUrl: "",
        runningMateIds: [],
        startingGlobalMultiplier: 0
    };
    
    engine.scenarioController.candidateControllers = [
        new CandidateController(candidateModel)
    ];
    
    engine.scenarioController.model.scenarioSides = [{
        playerId: 1,
        questions: []
    }];

    const pvs = new Map();
    pvs.set(1, 75); 
    pvs.set(2, 25); 

    const results: FinalResultsModel = {
        popularVotes: pvs,
        electoralVotes: new Map(),
        candidates: [],
        totalPopularVotes: 100,
        totalElectoralVotes: 0
    };

    expect(engine.getPlayerPvPercentage(results)).toBe(0.75);
}

test('test deadlock true', testDeadlockTrue);
test('test deadlock false', testDeadlockFalse);
test('test player pv percentage', testPlayerPvPercentage);