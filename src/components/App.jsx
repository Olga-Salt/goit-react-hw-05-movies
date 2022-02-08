import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';

const TrandMoviePage = lazy(() => import('../pages/TrandMoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));

export const App = () => {
  return (
    <>
      <ToastContainer />
      <AppBar />

      <Container>
        <Suspense fallback={''}>
          <Switch>
            <Route path="/" exact>
              <TrandMoviePage />
            </Route>

            <Route path="/movies" exact>
              <MoviesPage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};
