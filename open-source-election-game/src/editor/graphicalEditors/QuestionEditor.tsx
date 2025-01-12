import QuestionModel from "../../oseg/engine/models/QuestionModel";
import ScenarioModel from "../../oseg/engine/models/ScenarioModel";
import GenericEditorCheckbox from "../components/GenericEditorCheckbox";
import GenericEditorTextArea from "../components/GenericEditorTextArea";
import AnswerEditor from "./AnswerEditor";
import "./QuestionEditor.css"
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

    function getHighestAnswerId() {
        if(data.scenarioSides.length == 0 || data.scenarioSides[0].questions.length == 0) {
            return Math.round(Math.random() * 565464);
        }
        
        let highest = 0;

        for(const side of data.scenarioSides) {
            for(const question of side.questions) {
                for(const answer of question.answers) {
                    highest = Math.max(highest, answer.id);
                }
            }
        }

        return highest;
    }
    
    function addAnswer() {
        const id = getHighestAnswerId() + 1;
        question.answers.push({
            id: id,
            description: "Answer description here",
            feedback: "Answer feedback here, leave blank for none",
            answerEffects: []
        });
        setData(JSON.parse(JSON.stringify(data)));
    }

    return (
        <div>
            <h2>Question Editor</h2>

            <h3>Question {questionIndex + 1}.</h3>

            <div className="QuestionArea">
            <p style={{fontWeight:"bold"}}>Id: {question.id}</p>
            
            <GenericEditorTextArea
                defaultValue={question.description}
                onChange={(e) => updateFieldAndUpdateData<string>("description", e.target.value)}
                label={"Description"}
            />
            
            <GenericEditorCheckbox label={"Keep In Place if Questions Shuffled?"} defaultValue={question.keepInPlaceIfQuestionsShuffled} onChange={(e) => updateFieldAndUpdateData("keepInPlaceIfQuestionsShuffled", e.target.checked)}></GenericEditorCheckbox>
            </div>
            
        
            <h3>Answers</h3>
            <div>
                {question.answers.map((answer) => <AnswerEditor associatedQuestion={question} setData={setData} data={data} answer={answer}></AnswerEditor>)}
                <button onClick={addAnswer} className="GreenButton">Add Answer</button>
            </div>

        </div>
    )
}

export default QuestionEditor;