import React from 'react';
import Layout from '../pages/layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/notFoundPage';
import { useRouteError, isRouteErrorResponse } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
    path: '/',
    Component: Layout,
    errorElement: <ErrorBoundary />,
    children: [{ index: true, Component: HomePage }],
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
