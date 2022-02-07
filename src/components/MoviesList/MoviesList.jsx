import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.results.map(movie => (
        <li key={movie.id}>
          <Link
            to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
          >
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
