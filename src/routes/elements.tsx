import { Suspense, lazy, type ElementType } from 'react';
// components
import LoadingScreen from '../components/loadingScreen';

// ----------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen fullscreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const HomePage = Loadable(lazy(() => import('../pages/home')));
export const MoviesPage = Loadable(lazy(() => import('../pages/movies')));
export const CharactersPage = Loadable(
  lazy(() => import('../pages/characters'))
);
export const MovieDetailsPage = Loadable(
  lazy(() => import('../pages/movieDetails'))
);
export const CharacterDetailsPage = Loadable(
  lazy(() => import('../pages/characterDetails'))
);

export const NotFoundPage = Loadable(
  lazy(() => import('../pages/notFoundPage'))
);
