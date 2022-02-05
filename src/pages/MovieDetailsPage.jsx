import { useState, useEffect } from 'react';
import { useParams, useRouteMatch, useHistory } from 'react-router-dom';
import * as movieApi from '../services/movie-api';
import MovieDetailsInfo from '../components/MovieDetailsInfo/MovieDetailsInfo';

import MovieDetailsNav from '../components/MovieDetailsNav/MovieDetailsNav';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const match = useRouteMatch();
  const hist = useHistory();

  useEffect(() => {
    movieApi.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <div>
        <button onClick={() => hist.goBack()}>Go Back</button>
      </div>

      <MovieDetailsInfo movie={movie} />
      <hr />
      <h3>Additional information</h3>

      <MovieDetailsNav movie={movie} match={match} />
    </>
  );
}
