import ScenarioModel from "./models/ScenarioModel";
import { useEffect, useState } from "react";
import Game from "./Game";
import "./ScenarioLoader.css";

const scenarioNames = ["TestScenario", "1980 For Common Sense"];

function ScenarioLoader() {

    const [currentModName, setCurrentModName] = useState("");
    const [data, setData] = useState<ScenarioModel | null>(null);
    const [logic, setLogic] = useState<string>("");
    const [mapSvg, setMapSvg] = useState<string>("");

    const [dataString, setDataString] = useState<string>("");
    const [loadingCustomScenario, setLoadingCustomScenario] = useState(false);
  
    useEffect(() => {
      if(currentModName == "") {
        return;
      }

      async function loadScenarioFromUrl(modFolderName : string) {
        const dataRes = await fetch("./scenarios/" + modFolderName + "/data.json");
        const dataJson = await dataRes.json();

        const mapRes = await fetch("./scenarios/" + modFolderName + "/map.svg");
        const map: string = await mapRes.text();
      
        const logicRes = await fetch("./scenarios/" + modFolderName + "/logic.js");
        const logicText = await logicRes.text();
        
        setData(dataJson);
        setLogic(logicText);
        setMapSvg(map);
      }
      loadScenarioFromUrl(currentModName);
    }, [currentModName]);

    function loadCustomScenario() {
        try {
            const customData = JSON.parse(dataString) as ScenarioModel;
            setData(customData);
            setLogic(logic);
            setMapSvg(mapSvg);
            setLoadingCustomScenario(true);
        }
        catch(e) {
            alert("Error: " + e);
        }
    }

    if(currentModName == "" && !loadingCustomScenario) {
        return (
            <div>
                <h2>Pick a Scenario From These Buttons</h2>
                {scenarioNames.map((scenarioName) => <button onClick={() => setCurrentModName(scenarioName)}>{scenarioName}</button>)}
                <h2>Or Paste a Custom Scenario</h2>

                <div className="CustomArea">
                    <label htmlFor="data">data.json</label>
                    <textarea rows={8} onChange={(e) => setDataString(e.target.value)} value={dataString} id="data"></textarea>

                    <label htmlFor="logic">logic.js</label>
                    <textarea rows={8}  onChange={(e) => setLogic(e.target.value)} value={logic} id="logic"></textarea>

                    <label htmlFor="map">map.svg</label>
                    <textarea rows={8} onChange={(e) => setMapSvg(e.target.value)} value={mapSvg} id="map"></textarea>

                    <button onClick={loadCustomScenario} className="GreenButton">Go</button>
                </div>
            </div>
        )
        }

    if(data == null) {
        return <p>Error: Injected data is null</p>
    }

    return <Game injectedData={data} injectedLogic={logic} injectedMapSvg={mapSvg}></Game>
}

export default ScenarioLoader;