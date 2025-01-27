import { expect, test } from "vitest";
import { FinalResultsModel } from "../../oseg/engine/models/FinalResultsModel";
import { resultsAreSame } from "../../oseg/utils/OsegUtils";
import { runHeadlessEngine } from "../HeadlessEngine";
import { data } from "../fcsData/data";
import rawLogic from "../fcsData/logic.js?raw";

async function engineTestVisitsInfluenceResults() {

    const seed = Date.now().toString();
    
    const resultA = await runHeadlessEngine(
        data,
        rawLogic,
        seed,
        131,
        16064,
        false,
        true
    )
    
    const resultB = await runHeadlessEngine(
        data,
        rawLogic,
        seed,
        131,
        16064,
        false,
        false
    )

    expect(resultsAreSame(resultA, resultB)).toEqual(false);
}

async function engineTestDifferentSeedsDifferent() {

    const seedA = "TEST";
    const seedB = "POST";
    
    const resultA = await runHeadlessEngine(
        data,
        rawLogic,
        seedA,
        131,
        16064,
        false,
        true
    )
    
    const resultB = await runHeadlessEngine(
        data,
        rawLogic,
        seedB,
        131,
        16064,
        false,
        true
    )

    expect(resultsAreSame(resultA, resultB)).toEqual(false);
}

async function engineTestSeededRunsSame() {

    const seed = Date.now().toString();
    let prevResult : FinalResultsModel | null = null;

    for(let i = 0; i < 25; i++) {
        const result = await runHeadlessEngine(
            data,
            rawLogic,
            seed,
            131,
            16064,
            false,
            true
        )

        if(i > 0) {
            expect(resultsAreSame(result, prevResult!)).toBe(true);
        }

        prevResult = result;
        expect(prevResult).not.toBeNull();
    }
}

test('seeded runs are the same', engineTestSeededRunsSame);
test('different seeds are different', engineTestDifferentSeedsDifferent);
test('visits influence results', engineTestVisitsInfluenceResults)