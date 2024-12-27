import ScenarioModel from "./models/ScenarioModel";
import { useEffect, useState } from "react";
import Game from "./Game";
import "./ScenarioLoader.css";

const scenarioNames = ["TestScenario"];

function ScenarioLoader() {

    const [currentModName, setCurrentModName] = useState("");
    const [data, setData] = useState<ScenarioModel | null>(null);
    const [logic, setLogic] = useState<string>("");
    const [mapUrl, setMapUrl] = useState<string>("");

    const [dataString, setDataString] = useState<string>("");
    const [loadingCustomScenario, setLoadingCustomScenario] = useState(false);
  
    useEffect(() => {
      if(currentModName == "") {
        return;
      }

      async function loadScenarioFromUrl(modFolderName : string) {
        const dataRes = await fetch("./scenarios/" + modFolderName + "/data.json");
        const dataJson = await dataRes.json();
        const map: string = "./scenarios/" + modFolderName + "/map.svg";
      
        const logicRes = await fetch("./scenarios/" + modFolderName + "/logic.js");
        const logicText = await logicRes.text();
        
        setData(dataJson);
        setLogic(logicText);
        setMapUrl(map);
      }
      loadScenarioFromUrl(currentModName);
    }, [currentModName]);

    function loadCustomScenario() {
        try {
            const customData = JSON.parse(dataString) as ScenarioModel;
            setData(customData);
            setLogic(logic);
            setMapUrl(mapUrl);
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

                    <label htmlFor="map">map.svg url</label>
                    <input type="text" onChange={(e) => setMapUrl(e.target.value)} value={mapUrl} id="map"></input>

                    <button onClick={loadCustomScenario} className="GreenButton">Go</button>
                </div>
            </div>
        )
        }

    if(data == null) {
        return <p>Error: Injected data is null</p>
    }

    return <Game injectedData={data} injectedLogic={logic} injectedMapUrl={mapUrl}></Game>
}

export default ScenarioLoader;