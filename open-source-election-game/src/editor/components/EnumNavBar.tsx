import "./EnumNavBar.css";

interface EnumNavBarProps {
    enumValueAsString: string;
    setEnumFromString: (enumValue: string) => void;
    enumKeys: string[];
    description: string;
}

function EnumNavBar(props: EnumNavBarProps) {
    const { enumValueAsString, setEnumFromString, enumKeys, description } = props;
    return (

        <div id="navbar" className="EnumNavBar">
            <label htmlFor="navbar">{description}</label>
            {
                enumKeys.map((key: string) => {
                    const selected = enumValueAsString == key;
                    return <button disabled={selected} key={key} onClick={() => setEnumFromString(key)}>{key}</button>;
                })
            }

        </div>

    );
}

export default EnumNavBar;