import { useState } from "react";
import EndingModel from "../../engine/models/EndingModel";
import ThemeModel from "../../engine/models/ThemeModel";
import { Engine } from "../../engine/Engine";

interface EndingSlidesProps {
    theme: ThemeModel;
    engine: Engine;
}

function EndingSlides(props: EndingSlidesProps) {

    const [endingSlideIndex, setEndingSlideIndex] = useState(0);

    const { theme, engine } = props;

    const ending: EndingModel = engine.getEnding();
    const endingSlides = ending.slides;
    const endingSlide = endingSlides[endingSlideIndex];

    function changeEndingSlideIndex(delta: number) {
        let newSlideIndex = endingSlideIndex + delta;
        if (newSlideIndex < 0) {
            newSlideIndex = endingSlides.length - 1;
        }
        else {
            newSlideIndex = newSlideIndex % endingSlides.length;
        }
        setEndingSlideIndex(newSlideIndex);
    }

    return (
        <div style={{ backgroundColor: theme.primaryGameWindowColor, color: theme.primaryGameWindowTextColor }} className="EndingSlides">
            <h2 dangerouslySetInnerHTML={{__html:endingSlide.endingHeader}}></h2>
            <div className="EndingSlide">
                <img className="EndingSlideImage" src={endingSlide.imageUrl}></img>
                <div className="EndingSlideDescription" dangerouslySetInnerHTML={{__html:endingSlide.endingText}}></div>
            </div>
            <div className="EndingSlideControlLine"></div>
            {endingSlides.length > 1 && <div>{endingSlideIndex + 1}/{endingSlides.length}</div>}
            <div className="EndingButtons">
                {endingSlides.length > 1 && <button disabled={endingSlideIndex <= 0} onClick={() => changeEndingSlideIndex(-1)}>Prev</button>}
                {endingSlides.length > 1 && <button disabled={endingSlideIndex >= endingSlides.length - 1} onClick={() => changeEndingSlideIndex(+1)}>Next</button>}
            </div>
        </div>
    );
}

export default EndingSlides;