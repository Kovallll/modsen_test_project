import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/favorites" element={<Favorites></Favorites>} />
    </>,
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
