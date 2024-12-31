import ScenarioModel from "../engine/models/ScenarioModel";
import { useEffect, useState } from "react";
import Game from "../game/Game";
import "./ScenarioLoader.css";
import ScenarioBox from "../game/components/ScenarioBox";

const scenarioNames = ["1932", "1980 For Common Sense"];

function ScenarioLoader() {

    const [currentModName, setCurrentModName] = useState("");
    const [data, setData] = useState<ScenarioModel | null>(null);
    const [logic, setLogic] = useState<string>("");
    const [mapSvg, setMapSvg] = useState<string>("");
    const [customCss, setCustomCss] = useState<string>("");

    const [dataString, setDataString] = useState<string>("");
    const [loadingCustomScenario, setLoadingCustomScenario] = useState(false);

    const [scenarios, setScenarios] = useState<Map<string, ScenarioModel>>(new Map());
  
    useEffect(() => {
        async function loadScenarios() {

            const newScenarios = new Map<string, ScenarioModel>();

            for(const scenarioName of scenarioNames) {
                const modelRes = await fetch("./scenarios/" + scenarioName + "/data.json");
                const model : ScenarioModel = await modelRes.json();
                newScenarios.set(scenarioName, model);
            }

            setScenarios(newScenarios);
        }

        loadScenarios();
    }, []);

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

        const cssRes = await fetch("./scenarios/" + modFolderName + "/style.css");
        const cssText = await cssRes.text();
        
        setData(dataJson);
        setLogic(logicText);
        setMapSvg(map);
        setCustomCss(cssText);
      }
      loadScenarioFromUrl(currentModName);
    }, [currentModName]);

    function loadCustomScenario() {
        try {
            const customData = JSON.parse(dataString) as ScenarioModel;
            setData(customData);
            setLogic(logic);
            setMapSvg(mapSvg);
            setCustomCss(customCss);
            setLoadingCustomScenario(true);
        }
        catch(e) {
            alert("Error: " + e);
        }
    }

    if(currentModName == "" && !loadingCustomScenario) {
        return (
            <div>
                <h2>Try OSEG, Pick a Demo Scenario</h2>
                <div className="ScenarioBoxHolder">
                {
                    Array.from(scenarios).map(([scenarioName, model]) => {
                        return <ScenarioBox key={scenarioName} model={model} onClickPlay={() => setCurrentModName(scenarioName)}></ScenarioBox>
                    })
                }
                 </div>

                <h2>Or Paste a Custom Scenario</h2>

                <div className="CustomArea">
                    <label htmlFor="data">data.json</label>
                    <textarea rows={8} onChange={(e) => setDataString(e.target.value)} value={dataString} id="data"></textarea>

                    <label htmlFor="logic">logic.js</label>
                    <textarea rows={8}  onChange={(e) => setLogic(e.target.value)} value={logic} id="logic"></textarea>

                    <label htmlFor="map">map.svg</label>
                    <textarea rows={8} onChange={(e) => setMapSvg(e.target.value)} value={mapSvg} id="map"></textarea>

                    
                    <label htmlFor="css">style.css</label>
                    <textarea rows={8} onChange={(e) => setCustomCss(e.target.value)} value={customCss} id="css"></textarea>

                    <button onClick={loadCustomScenario} className="GreenButton">Go</button>
                </div>
            </div>
        )
        }

    if(data == null) {
        return <p>Error: Injected data is null</p>
    }

    return <Game injectedCss={customCss} injectedData={data} injectedLogic={logic} injectedMapSvg={mapSvg}></Game>
}

export default ScenarioLoader;