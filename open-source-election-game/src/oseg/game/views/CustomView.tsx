import { ThemeModel } from "../../engine/models/ThemeModel";

interface CustomViewProps {
    innerHtml : string;
    theme : ThemeModel;
}

function CustomView(props : CustomViewProps) {
    const {innerHtml, theme} = props;

    return (
        <div style={{color:theme.primaryGameWindowTextColor, backgroundColor:theme.primaryGameWindowColor}} dangerouslySetInnerHTML={{__html:innerHtml}}>

        </div>
    )
}

export default CustomView;