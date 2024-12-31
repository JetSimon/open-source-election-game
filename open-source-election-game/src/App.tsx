import "./App.css";

import About from "./website/About";
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
            <Link to="/open-source-election-game/about">About</Link>
          </div>
          <div>
            <Link to="/open-source-election-game/">Game</Link>
          </div>
          <div>
            <Link to="/open-source-election-game/editor">Editor</Link>
          </div>
          <div>
            <a href="/open-source-election-game/doc">Doc</a>
          </div>
          <div>
            <a href="https://github.com/JetSimon/open-source-election-game">Source Code</a>
          </div>
        </div>

        <Routes>
          <Route path="/open-source-election-game" element={<ScenarioLoader></ScenarioLoader>}>
          </Route>
          <Route path="/open-source-election-game/editor" element={<OsegEditor></OsegEditor>}>
          </Route>
          <Route path="/open-source-election-game/about" element={<About></About>}>
          </Route>
        </Routes>
      </div>
  )
}

export default App;
