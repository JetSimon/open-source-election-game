import Engine from "../engine/Engine";
import FinalResults from "../components/FinalResults";

interface EndingViewProps {
    engine: Engine;
}

function EndingView(props: EndingViewProps) {
    const { engine } = props;
    if (engine == null) {
        return <div>ERROR ENGINE NULL</div>;
    }

    return (
        <div>
            <h1>Final Results</h1>
            <FinalResults engine={engine}></FinalResults>
        </div>
    )
}

export default EndingView;