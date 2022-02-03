import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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

      {movies && (
        <ul>
          {movies.results.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
