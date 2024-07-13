import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Paths, routes } from "src/constants";
import Root from "./pages/Root";

import "./index.css";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path={Paths.Home} element={<Root />}>
      {routes.map((page) => (
        <Route path={page.path} element={page.element} />
      ))}
    </Route>,
  ),
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
