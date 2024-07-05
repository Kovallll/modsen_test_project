import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import ArtPage, { loader as artPageLoader } from "./pages/ArtPage";
import Root from "./pages/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route
        path="artpage/:artId"
        element={<ArtPage />}
        loader={artPageLoader}
      />
      <Route path="/favorites" element={<Favorites />} />
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
