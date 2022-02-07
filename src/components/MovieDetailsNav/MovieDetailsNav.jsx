import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import styles from '../../pages/Pages.module.css';

import MovieCastPage from '../../pages/MovieCastPage';
import MovieReviewsPage from '../../pages/MovieReviewsPage';

export default function MovieDetailsNav({ movie, match }) {
  const { url, path } = match;

  return (
    <>
      <ul>
        <li>
          <NavLink to={`${url}/cast`} activeClassName={styles.activeLink}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`} activeClassName={styles.activeLink}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr />

      <Route path={`${path}/cast`}>
        {movie && <MovieCastPage movie={movie} />}
      </Route>
      <Route path={`${path}/reviews`}>
        {movie && <MovieReviewsPage movie={movie} />}
      </Route>
    </>
  );
}
