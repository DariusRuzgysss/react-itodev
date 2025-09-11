import { Suspense, lazy, type ElementType } from 'react';
import LoadingScreen from '../components/loadingScreen';
import ErrorBoundaryProvider from '../providers/errorBoundary';

const Loadable = (Component: ElementType) => () =>
  (
    <ErrorBoundaryProvider>
      <Suspense fallback={<LoadingScreen fullscreen />}>
        <Component />
      </Suspense>
    </ErrorBoundaryProvider>
  );

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
