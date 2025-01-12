import QuestionModel from "../../oseg/engine/models/QuestionModel";
import ScenarioModel from "../../oseg/engine/models/ScenarioModel";
import GenericEditorCheckbox from "../components/GenericEditorCheckbox";
import GenericEditorTextArea from "../components/GenericEditorTextArea";
import AnswerEditor from "./AnswerEditor";

interface QuestionEditorProps {
    data : ScenarioModel;
    setData : (data : ScenarioModel) => void;
    question : QuestionModel;
    questionIndex : number;
}

function QuestionEditor(props : QuestionEditorProps) {

    const {data, setData, question, questionIndex} = props;

    function updateFieldAndUpdateData<T>(field: string, newValue: T) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dynamicQuestion = question as { [k: string]: any; };
        dynamicQuestion[field] = newValue;
        setData(JSON.parse(JSON.stringify(data)));
    }

    return (
        <div>
            <h2>Question Editor</h2>

            <h3>Question {questionIndex + 1}.</h3>

            <p style={{fontWeight:"bold"}}>Id: {question.id}</p>
            
            <GenericEditorTextArea
                defaultValue={question.description}
                onChange={(e) => updateFieldAndUpdateData<string>("description", e.target.value)}
                label={"Description"}
            />
            
            <GenericEditorCheckbox label={"Keep In Place if Questions Shuffled?"} defaultValue={question.keepInPlaceIfQuestionsShuffled} onChange={(e) => updateFieldAndUpdateData("keepInPlaceIfQuestionsShuffled", e.target.checked)}></GenericEditorCheckbox>
        
            <h3>Answers</h3>
            <div>
                {question.answers.map((answer) => <AnswerEditor setData={setData} data={data} answer={answer}></AnswerEditor>)}
            </div>
        
        </div>
    )
}

export default QuestionEditor;