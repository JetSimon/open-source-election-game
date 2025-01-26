import "./Histogram.css";

interface HistogramProps {
    counts : number[]
}

function Histogram(props : HistogramProps) {
    
    const {counts} = props;

    let total = 0;
    for(let i = 0; i < counts.length; i++) {
        total += counts[i];
    }

    const bins = counts.length;

    const binRange = 100.0 / bins;

    return (
        <div className="Histogram">
            {counts.map((n, i) => {
                const proportion = i / bins;
                const min = proportion * 100;
                const max = min + binRange;
                const height = (n / total) * 100;
                return (
                    <div title={"Happened " + n + " time(s) (" + (n / total * 100).toFixed(2) + "%)"} className="HistogramEntry">
                        <div className="HistogramBar" style={{"height": height + "px"}}></div>
                        <div style={n == 0 ? {backgroundColor:"grey", color:"white"} :{}} className="HistogramLabel">{min.toFixed(2)}% - {max.toFixed(2)}%</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Histogram;