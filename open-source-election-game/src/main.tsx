import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from "./website/About";
import ScenarioLoader from "./website/ScenarioLoader";
import OsegEditor from "./editor/OsegEditor";

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Layout from './Layout.tsx';

const router = createBrowserRouter([
  {
    element: <Layout></Layout>,
    children: [
      {
        path: "/open-source-election-game",
        element: <ScenarioLoader></ScenarioLoader>
      },
      {
        path: "/open-source-election-game/editor",
        element: <OsegEditor></OsegEditor>
      },
      {
        path: "/open-source-election-game/about",
        element: <About></About>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
