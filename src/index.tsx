import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Paths } from 'src/constants';
import { defaultTheme as theme } from 'src/theme';
import ErrorBoundary from './components/ErrorBoundary';
import ArtPage from './pages/ArtPage';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import Root from './pages/Root';

import './index.css';

const routes = [
  { path: Paths.Home, element: <Home /> },
  { path: `${Paths.ArtPage}/:artId`, element: <ArtPage /> },
  { path: Paths.Favorites, element: <Favorites /> },
  { path: Paths.NotFound, element: <NotFound /> },
];

const router = createHashRouter(
  createRoutesFromElements(
    <Route path={Paths.Home} element={<Root />}>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>,
);
