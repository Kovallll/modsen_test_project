import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Paths } from "./constants";
import ArtPage from "./pages/ArtPage";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound";
import Root from "./pages/Root";

import "./index.css";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path={Paths.Home} element={<Root />}>
      <Route path={Paths.Home} element={<Home />} />
      <Route path={`${Paths.ArtPage}/:artId`} element={<ArtPage />} />
      <Route path={Paths.Favorites} element={<Favorites />} />
      <Route path={Paths.NotFound} element={<NotFound />} />
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
