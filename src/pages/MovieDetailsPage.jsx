import { useState, useEffect } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import * as movieApi from '../services/movie-api';
import MovieCastPage from '../pages/MovieCastPage';
import MovieReviewsPage from '../pages/MovieReviewsPage';

import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const imgUrl = 'https://image.tmdb.org/t/p/w300';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    movieApi.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
          <h2>
            {movie.original_title}{' '}
            <span>({movie.release_date.slice(0, 4)})</span>
          </h2>
          <p>User score: {movie.vote_average * 10} %</p>
          <p>Overview </p>
          <p>{movie.overview}</p>
          <p>Genres</p>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </>
      )}
      <hr />
      <h3>Additional information</h3>

      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <hr />

      <Switch>
        <Route path={`${path}/:cast`}>
          {movie && <MovieCastPage movie={movie} />}
        </Route>
        <Route path={`${path}/:reviews`}>
          {movie && <MovieReviewsPage movie={movie} />}
        </Route>
      </Switch>
    </>
  );
}
