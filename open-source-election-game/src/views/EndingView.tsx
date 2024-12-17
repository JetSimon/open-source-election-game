import Engine from "../engine/Engine";
import FinalResults from "../components/FinalResults";
import EndingModel from "../models/EndingModel";
import { useState } from "react";

interface EndingViewProps {
    engine: Engine;
}

function EndingView(props: EndingViewProps) {
    const { engine } = props;
    const [endingSlideIndex, setEndingSlideIndex] = useState(0);


    if (engine == null) {
        setEndingSlideIndex(-1);
        return <div>ERROR ENGINE NULL</div>;
    }

    const ending : EndingModel = engine.getEnding();
    const endingSlides = ending.slides;
    const endingSlide = endingSlides[endingSlideIndex];

    return (
        <div>
            <h1>Final Results</h1>
            <img src={endingSlide.imageUrl}></img>
            <div>
                {endingSlide.endingText}
            </div>
            <FinalResults engine={engine}></FinalResults>
        </div>
    )
}

export default EndingView;