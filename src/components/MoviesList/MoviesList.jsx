import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';
import { noPoster } from '../../helpers/fallback';
const imgUrl = 'https://image.tmdb.org/t/p/w400';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={styles.movieContainer}>
      <ul className={styles.movieList}>
        {movies.results.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              <img
                src={
                  movie.poster_path ? `${imgUrl}${movie.poster_path}` : noPoster
                }
                alt={movie.title}
                className={styles.img}
              />
              <h2 className={styles.movieTitle}>{movie.original_title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
