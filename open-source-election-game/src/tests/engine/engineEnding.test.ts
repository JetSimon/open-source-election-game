import { expect, test } from "vitest";
import { FinalResultsModel } from "../../oseg/engine/models/FinalResultsModel";
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

test('test deadlock true', testDeadlockTrue);
test('test deadlock false', testDeadlockFalse);