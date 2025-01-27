import { Link, Outlet } from 'react-router-dom';
import './App.css';

function Layout() {
  return (
    <div className='App'>
    <div className="HeaderNav">
        <a href="./" className="Logo">
        OSEG
        </a>
        <div>
        <Link to="/about">About</Link>
        </div>
        <div>
        <Link to="/">Demo</Link>
        </div>
        <div>
        <Link to="/editor">Editor</Link>
        </div>
        <div>
        <a href="/open-source-election-game/doc">Doc</a>
        </div>
        <div>
          <a href="https://github.com/JetSimon/open-source-election-game/wiki">Guides</a>
        </div>
        <div>
        <a href="https://github.com/JetSimon/open-source-election-game">Source Code</a>
        </div>
        <div>
        <a href="https://jetsimon.com/tct2oseg/">tct2oseg Converter</a>
        </div>
        <div>
        <a href="https://thecommunitytrail.com/">The Community Trail</a>
        </div>
    </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
