import { Engine } from "../engine/Engine";
import FinalResults from "../components/FinalResults";
import EndingModel from "../models/EndingModel";
import { useState } from "react";
import ThemeModel from "../models/ThemeModel";
import "./EndingView.css"

interface EndingViewProps {
  engine: Engine;
  theme : ThemeModel;
}

function EndingView(props: EndingViewProps) {
  const { engine, theme } = props;
  const [endingSlideIndex, setEndingSlideIndex] = useState(0);

  if (engine == null) {
    setEndingSlideIndex(-1);
    return <div>ERROR ENGINE NULL</div>;
  }

  const ending: EndingModel = engine.getEnding();
  const endingSlides = ending.slides;
  const endingSlide = endingSlides[endingSlideIndex];

  function changeEndingSlideIndex(delta : number) {
    let newSlideIndex = endingSlideIndex + delta;
    if(newSlideIndex < 0) {
      newSlideIndex = endingSlides.length - 1;
    }
    else {
      newSlideIndex = newSlideIndex % endingSlides.length;
    }
    setEndingSlideIndex(newSlideIndex);
  }

  return (
    <div className="EndingView">
      <div style={{backgroundColor:theme.primaryGameWindowColor, color:theme.primaryGameWindowTextColor}} className="EndingSlides">
        <h2>Final Results</h2>
        <div className="EndingSlide">
          <img src={endingSlide.imageUrl}></img>
          <div>{endingSlide.endingText}</div>
        </div>
      </div>
     {endingSlides.length > 1 && <div>{endingSlideIndex + 1}/{endingSlides.length}</div>}
      <div className="EndingButtons">
        {endingSlides.length > 1 && <button disabled={endingSlideIndex <= 0} onClick={() => changeEndingSlideIndex(-1)}>Prev</button>}
        {endingSlides.length > 1 && <button disabled={endingSlideIndex >= endingSlides.length - 1} onClick={() => changeEndingSlideIndex(+1)}>Next</button>}
      </div>
      <FinalResults theme={theme} engine={engine}></FinalResults>
    </div>
  );
}

export default EndingView;
