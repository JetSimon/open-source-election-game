import "./App.css";

import Game from "./Game";
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
          <h2 className="Logo">
            OSEG
          </h2>
          <div>
            <Link to="/">Game</Link>
          </div>
          <div>
            <Link to="/editor">Editor</Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Game></Game>}>
          </Route>
          <Route path="/editor" element={<OsegEditor></OsegEditor>}>
          </Route>
        </Routes>
      </div>
  )
}

export default App;
