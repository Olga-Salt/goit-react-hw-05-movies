import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import { Route, Switch } from 'react-router-dom';
import TrandMoviePage from '../pages/TrandMoviePage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
export const App = () => {
  return (
    <>
      <Container>
        <AppBar />

        <Switch>
          <Route path="/" exact>
            <TrandMoviePage />
          </Route>
          <Route path="/movies" exact>
            movies view
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Container>
    </>
  );
};
