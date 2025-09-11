import { Routes } from '@/utils/constants';
import {
  CharacterDetailsPage,
  CharactersPage,
  HomePage,
  MovieDetailsPage,
  MoviesPage,
  NotFoundPage,
} from './elements';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/pages/layout';

const router = createBrowserRouter([
  {
    path: Routes.Home,
    Component: Layout,
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
