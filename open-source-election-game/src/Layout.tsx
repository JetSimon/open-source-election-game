import './App.css'
import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <div className='App'>
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
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
