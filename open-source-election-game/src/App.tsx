import "./App.css";

import Game from "./Game";
import OsegEditor from "./editor/OsegEditor";

import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="HeaderNav">
          <h2 className="Logo">
            OSEG
          </h2>
          <div>
            <Link to="/open-source-election-game/">Game</Link>
          </div>
          <div>
            <Link to="/open-source-election-game/editor">Editor</Link>
          </div>
        </div>

        <Routes>
          <Route path="/open-source-election-game/" element={<Game></Game>}>
          </Route>
          <Route path="/open-source-election-game/editor" element={<OsegEditor></OsegEditor>}>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
