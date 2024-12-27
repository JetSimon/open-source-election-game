import ScenarioModel from "./models/ScenarioModel";
import { useEffect, useState } from "react";
import Game from "./Game";

const scenarioNames = ["TestScenario"];

function ScenarioLoader() {

    const [currentModName, setCurrentModName] = useState("");
    const [data, setData] = useState<ScenarioModel | null>(null);
    const [logic, setLogic] = useState<string>("");
    const [mapUrl, setMapUrl] = useState<string>("");
  
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

    if(currentModName == "") {
        return (
            <div>
                <h2>Pick a Scenario From These Buttons</h2>
                {scenarioNames.map((scenarioName) => <button onClick={() => setCurrentModName(scenarioName)}>{scenarioName}</button>)}
            </div>
        )
        }

    if(data == null) {
        return <p>Error: Injected data is null</p>
    }

    return <Game injectedData={data} injectedLogic={logic} injectedMapUrl={mapUrl}></Game>
}

export default ScenarioLoader;