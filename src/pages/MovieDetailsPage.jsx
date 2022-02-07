import { useState, useEffect } from 'react';
import {
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import * as movieApi from '../services/movie-api';
import MovieDetailsInfo from '../components/MovieDetailsInfo/MovieDetailsInfo';

import MovieDetailsNav from '../components/MovieDetailsNav/MovieDetailsNav';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const match = useRouteMatch();
  const hist = useHistory();
  const location = useLocation();

  useEffect(() => {
    movieApi.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const goBack = () => {
    hist.push(location?.state?.from ?? '/movies');
  };

  return (
    <>
      <div>
        <button onClick={goBack}>Go Back</button>
      </div>

      <MovieDetailsInfo movie={movie} />
      <hr />
      <h3>Additional information</h3>

      <MovieDetailsNav movie={movie} match={match} />
    </>
  );
}
