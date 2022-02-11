import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './MoviesList.module.css';
import { noPoster } from '../../helpers/fallback';

const imgUrl = 'https://image.tmdb.org/t/p/w400';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  function setScroll() {
    const posTop = window.pageYOffset;
    localStorage.setItem('scroll', posTop);
  }

  useEffect(() => {
    const scrollPos = localStorage.getItem('scroll');
    window.scrollTo(0, scrollPos ?? 0);
  }, []);

  return (
    <div className={styles.movieContainer}>
      <ul className={styles.movieList}>
        {movies.results.map(movie => (
          <li key={movie.id} className={styles.movieItem} onClick={setScroll}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from: location,
                },
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
      <button
        className={styles.upBtn}
        onClick={() => {
          window.scrollTo(0, 0);
          localStorage.setItem('scroll', 0);
        }}
      >
        up
      </button>
    </div>
  );
};

export default MoviesList;
