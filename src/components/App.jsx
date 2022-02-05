import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import TrandMoviePage from '../pages/TrandMoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import MoviesPage from '../pages/MoviesPage';
export const App = () => {
  return (
    <>
      <Container>
        <ToastContainer />
        <AppBar />

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
      </Container>
    </>
  );
};
