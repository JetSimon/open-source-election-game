import "./EnumNavBar.css"

interface EnumNavBarProps {
    enumValueAsString : string;
    setEnumFromString : (enumValue : string) => void;
    enumKeys : string[];
}

function EnumNavBar(props : EnumNavBarProps) {
    const {enumValueAsString, setEnumFromString, enumKeys} = props;
    return (
        <div className="EnumNavBar">
            {
                enumKeys.map((key : string) => {
                    const selected = enumValueAsString == key;
                    return <button disabled={selected} key={key} onClick={() => setEnumFromString(key)}>{key}</button>
                })
            }
        </div>
    );
}

export default EnumNavBar;