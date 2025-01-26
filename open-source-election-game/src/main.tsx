import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import OsegEditor from "./editor/OsegEditor";
import './index.css';
import About from "./website/About";
import ScenarioLoader from "./website/ScenarioLoader";

import {
    createHashRouter,
    RouterProvider
} from 'react-router-dom';
import Layout from './Layout.tsx';

const router = createHashRouter([
  {
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <ScenarioLoader></ScenarioLoader>
      },
      {
        path: "/editor",
        element: <OsegEditor></OsegEditor>
      },
      {
        path: "/about",
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
