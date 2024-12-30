import "./App.css";

import ScenarioLoader from "./website/ScenarioLoader";
import OsegEditor from "./editor/OsegEditor";

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <div className="HeaderNav">
          <a href="./" className="Logo">
            OSEG
          </a>
          <div>
            <Link to="/open-source-election-game/">Game</Link>
          </div>
          <div>
            <Link to="/open-source-election-game/editor">Editor</Link>
          </div>
        </div>

        <Routes>
          <Route path="/open-source-election-game" element={<ScenarioLoader></ScenarioLoader>}>
          </Route>
          <Route path="/open-source-election-game/editor" element={<OsegEditor></OsegEditor>}>
          </Route>
        </Routes>
      </div>
  )
}

export default App;
