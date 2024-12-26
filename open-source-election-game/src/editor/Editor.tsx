import { Engine } from "../engine/Engine";
import { useState, useEffect } from "react";
import ScenarioModel from "../models/ScenarioModel";

function Editor() {
    const [data, setData] = useState<ScenarioModel | null>(null);
    const [logic, setLogic] = useState<string>("");
    const [mapUrl, setMapUrl] = useState<string>("");
    
    async function loadDefaultData() {
        const defaultData = await fetch("./scenarios/editor/templates/default/data.json");
        const defaultDataJson = await defaultData.json();
        const defaultMapUrl : string = "./scenarios/editor/templates/default/map.svg"
        
        const defaultLogic = await fetch("./scenarios/editor/templates/default/logic.js");
        const defaultLogicText = await defaultLogic.text();

        setData(defaultDataJson);
        setLogic(defaultLogicText);
        setMapUrl(defaultMapUrl);
    }

    useEffect(() => {
        loadDefaultData();
    }, []);
}