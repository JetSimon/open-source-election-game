import "./EnumNavBar.css";

interface EnumNavBarProps {
    enumValueAsString: string;
    setEnumFromString: (enumValue: string) => void;
    enumKeys: string[];
    description: string;
}

function EnumNavBar(props: EnumNavBarProps) {
    const { enumValueAsString, setEnumFromString, enumKeys, description } = props;
    
    const makeName = (s : string) => s.replace(/([A-Z])/g, ' $1').trim();
 
    return (

        <div id="navbar" className="OsegEditorStyle EnumNavBar">
            <label htmlFor="navbar">{description}</label>
            {
                enumKeys.map((key: string) => {
                    const selected = enumValueAsString == key;
                    return <button disabled={selected} key={key} onClick={() => setEnumFromString(key)}>{makeName(key)}</button>;
                })
            }

        </div>

    );
}

export default EnumNavBar;