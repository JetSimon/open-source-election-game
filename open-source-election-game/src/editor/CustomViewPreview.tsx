import { useState } from "react";
import { CustomViewCreator } from "../oseg/engine/CustomView";
import { Engine } from "../oseg/engine/Engine";
import { ThemeModel } from "../oseg/engine/models/ThemeModel";
import CustomView from "../oseg/game/views/CustomView";

interface CustomViewPreviewProps {
    engine : Engine;
    theme : ThemeModel;
}

function CustomViewPreview(props : CustomViewPreviewProps) {
    const {engine, theme} = props;

    const [selectedCustomView, setSelectedCustomView] = useState("");

    const allViews = Array.from(engine.customViews.keys());
    const selectedView : CustomViewCreator | undefined = engine.customViews.get(selectedCustomView);
    
    let innerHtml = "";

    try {
        innerHtml = selectedView == undefined ? "" : selectedView(engine);
    }
    catch(e) {
        console.error(e);
        innerHtml = "Error while rendering innerHtml, check console for details"
    }

    return (
        <div>
             <label>Select a custom view: </label>
            <select onChange={(e) => setSelectedCustomView(e.target.value)} value={selectedCustomView}>
                <option value="">None</option>
                {allViews.map((x) => <option value={x}>{x}</option>)}
            </select>
            {selectedCustomView == "" ? <p>Select a view to preview</p> : <CustomView innerHtml={innerHtml} theme={theme}></CustomView>}
        </div>
    )
}

export default CustomViewPreview;