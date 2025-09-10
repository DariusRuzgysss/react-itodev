import React from 'react';

import { Routes } from '../utils/constants';
import {
  CharacterDetailsPage,
  CharactersPage,
  HomePage,
  MovieDetailsPage,
  MoviesPage,
  NotFoundPage,
} from './elements';

//Libraries
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
  isRouteErrorResponse,
} from 'react-router-dom';
import Layout from '../pages/layout';

function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div style={{ color: 'red' }}>This page doesn't exist!</div>;
    }

    if (error.status === 401) {
      return (
        <div style={{ color: 'red' }}>You aren't authorized to see this</div>
      );
    }

    if (error.status === 503) {
      return <div style={{ color: 'red' }}>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div style={{ color: 'red' }}>🫖</div>;
    }
  }
}

const router = createBrowserRouter([
  {
    path: Routes.Home,
    Component: Layout,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        Component: HomePage,
        handle: { title: 'Home' },
      },
      { path: 'movies', Component: MoviesPage, handle: { title: 'Movies' } },
      {
        path: 'movies/:id',
        Component: MovieDetailsPage,
        handle: { title: 'Movie details' },
      },
      {
        path: 'characters',
        Component: CharactersPage,
        handle: { title: 'Characters' },
      },
      {
        path: 'characters/:id',
        Component: CharacterDetailsPage,
        handle: { title: 'Character details' },
      },
    ],
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};

export default Routers;
