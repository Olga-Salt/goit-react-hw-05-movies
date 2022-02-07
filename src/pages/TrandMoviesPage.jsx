import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

import PageHeading from '../components/PageHeading/PageHeading';
import * as movieApi from '../services/movie-api';

export default function TrandMoviePage() {
  const [movies, setMovies] = useState(null);
  //   const match = useRouteMatch();

  useEffect(() => {
    movieApi.fetchTrandMovie().then(setMovies);
  }, []);

  return (
    <>
      <PageHeading title="Tranding today" />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
