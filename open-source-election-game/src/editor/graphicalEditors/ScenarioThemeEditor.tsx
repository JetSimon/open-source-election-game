import { ScenarioModel } from "../../oseg/engine/models/ScenarioModel";
import { ThemeModel } from "../../oseg/engine/models/ThemeModel";
import GenericEditorInput from "../components/GenericEditorInput";

interface ScenarioThemeEditorProps {
    theme : ThemeModel;
    data : ScenarioModel;
    setData : (data : ScenarioModel) => void;
}

function ScenarioThemeEditor(props : ScenarioThemeEditorProps) {

    const {data, setData, theme} = props;

    function updateFieldAndUpdateData<T>(field: string, newValue: T) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dynamicTheme = theme as { [k: string]: any; };
        dynamicTheme[field] = newValue;
        setData(JSON.parse(JSON.stringify(data)));
    }

    return (
        <div className="EditorBox">
            <GenericEditorInput label="Background Image Url" type="text" defaultValue={theme.backgroundImageUrl} onChange={(e) => updateFieldAndUpdateData<string>("backgroundImageUrl", e.target.value)}></GenericEditorInput>
            <GenericEditorInput label="Background Color" type="color" defaultValue={theme.backgroundColor} onChange={(e) => updateFieldAndUpdateData<string>("backgroundColor", e.target.value)}></GenericEditorInput>
            <GenericEditorInput label="Description Window Background Color" type="color" defaultValue={theme.descriptionWindowBackgroundColor || "#000000"} onChange={(e) => updateFieldAndUpdateData<string>("descriptionWindowBackgroundColor", e.target.value)}></GenericEditorInput>
            <GenericEditorInput label="Header Image Url" type="text" defaultValue={theme.headerImageUrl} onChange={(e) => updateFieldAndUpdateData<string>("headerImageUrl", e.target.value)}></GenericEditorInput>
            <GenericEditorInput label="Primary Game Window Color" type="color" defaultValue={theme.primaryGameWindowColor} onChange={(e) => updateFieldAndUpdateData<string>("primaryGameWindowColor", e.target.value)}></GenericEditorInput>
            <GenericEditorInput label="Primary Game Window Text Color" type="color" defaultValue={theme.primaryGameWindowTextColor} onChange={(e) => updateFieldAndUpdateData<string>("primaryGameWindowTextColor", e.target.value)}></GenericEditorInput>
            <GenericEditorInput label="Secondary Game Window Color" type="color" defaultValue={theme.secondaryGameWindowColor} onChange={(e) => updateFieldAndUpdateData<string>("secondaryGameWindowColor", e.target.value)}></GenericEditorInput>
            <GenericEditorInput label="Secondary Game Window Text Color" type="color" defaultValue={theme.secondaryGameWindowTextColor} onChange={(e) => updateFieldAndUpdateData<string>("secondaryGameWindowTextColor", e.target.value)}></GenericEditorInput>
            <GenericEditorInput label="Question Background Color" type="color" defaultValue={theme.questionBackgroundColor ?? theme.secondaryGameWindowColor} onChange={(e) => updateFieldAndUpdateData<string>("questionBackgroundColor", e.target.value)}></GenericEditorInput>
            <GenericEditorInput label="Question Text Color" type="color" defaultValue={theme.questionTextColor ?? theme.secondaryGameWindowTextColor} onChange={(e) => updateFieldAndUpdateData<string>("questionTextColor", e.target.value)}></GenericEditorInput>
            <GenericEditorInput label="Bottom Banner Background Color" type="color" defaultValue={theme.bottomBannerBackgroundColor} onChange={(e) => updateFieldAndUpdateData<string>("bottomBannerBackgroundColor", e.target.value)}></GenericEditorInput>
            <GenericEditorInput label="Bottom Banner Text Color" type="color" defaultValue={theme.bottomBannerTextColor} onChange={(e) => updateFieldAndUpdateData<string>("bottomBannerTextColor", e.target.value)}></GenericEditorInput>
            <GenericEditorInput label="Advisor Image Url" type="text" defaultValue={theme.advisorImage} onChange={(e) => updateFieldAndUpdateData<string>("advisorImage", e.target.value)}></GenericEditorInput>
            <GenericEditorInput label="Header Quote" type="text" defaultValue={theme.quote} onChange={(e) => updateFieldAndUpdateData<string>("quote", e.target.value)}></GenericEditorInput>
        </div>
    )
}

export default ScenarioThemeEditor;