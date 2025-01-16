import ScenarioModel from "../oseg/engine/models/ScenarioModel";
import GenericEditorBulkTool from "./components/GenericEditorBulkTool";

interface OsegBulkToolsProps {
    setData : (d : ScenarioModel) => void;
    data : ScenarioModel;
}

function OsegBulkTools(props : OsegBulkToolsProps) {

    const {data, setData} = props;

    function multiplyAllAnswerEffects(n : number) {
        for(const scenarioSide of data.scenarioSides) {
            for (const question of scenarioSide.questions) {
                for (const answer of question.answers) {
                    for (const effect of answer.answerEffects) {
                        effect.amount *= n;
                    }
                }
            }
        }

        setData(JSON.parse(JSON.stringify(data)));
        alert("All answer effects have been multiplied")
    }

    return (
        <div style={{textAlign:"left"}}>
            <GenericEditorBulkTool defaultValue={1} label="Multiply ALL AnswerEffects by" onClick={multiplyAllAnswerEffects}></GenericEditorBulkTool>
        </div>
        
    )
}

export default OsegBulkTools;