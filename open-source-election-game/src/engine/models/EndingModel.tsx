interface EndingSlide {
    imageUrl : string;
    endingHeader : string;
    endingText : string;
}

interface EndingModel {
    slides : EndingSlide[];
}

export default EndingModel;