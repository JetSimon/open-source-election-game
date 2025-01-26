import { ScenarioModel } from "../../oseg/engine/models/ScenarioModel";
import { SongModel } from "../../oseg/engine/models/SongModel";
import GenericEditorInput from "../components/GenericEditorInput";

interface MusicEditorProps {
    data : ScenarioModel;
    setData : (data : ScenarioModel) => void;
}

function MusicEditor(props : MusicEditorProps) {
    const {data, setData} = props;

    function updateFieldAtIndexAndUpdateData<T>(index : number, field: string, newValue: T) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dynamicTheme = data.music[index] as { [k: string]: any; };
        dynamicTheme[field] = newValue;
        setData(JSON.parse(JSON.stringify(data)));
    }

    function addSong() {
        data.music.push({
            url: "",
            displayName: "",
            imageUrl: ""
        });
        setData(JSON.parse(JSON.stringify(data)));
    }

    function deleteSong(song : SongModel) {
        data.music = data.music.filter((x) => x != song);
        setData(JSON.parse(JSON.stringify(data)));
    }

    if(data.music.length == 0) {
        return (
        <div>
            <p>This scenario has no music. The music player will be hidden.</p>
            <button onClick={addSong} className="GreenButton CircleButton">+</button>
        </div>
        )
    }

    return (
        <div className="EditorBox">
            {data.music.map((song, index) => {
                return (
                    <div className="EditorBox SongEditor">
                        <label>{index + 1}.</label>
                        <GenericEditorInput label="Url" type="text" onChange={(e) => updateFieldAtIndexAndUpdateData<string>(index, "url", e.target.value)} defaultValue={song.url}></GenericEditorInput>
                        <GenericEditorInput label="Display Name" type="text" onChange={(e) => updateFieldAtIndexAndUpdateData<string>(index, "displayName", e.target.value)} defaultValue={song.displayName}></GenericEditorInput>
                        <GenericEditorInput label="Image Url" type="text" onChange={(e) => updateFieldAtIndexAndUpdateData<string>(index, "imageUrl", e.target.value)} defaultValue={song.imageUrl}></GenericEditorInput>
                        <button className="RedButton CircleButton" onClick={() => deleteSong(song)}>X</button>
                    </div>
                )
            })}
            <button onClick={addSong} className="GreenButton CircleButton">+</button>
        </div>
    )
}

export default MusicEditor;