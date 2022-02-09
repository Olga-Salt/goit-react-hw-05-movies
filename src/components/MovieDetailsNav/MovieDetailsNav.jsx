import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import styles from '../../pages/Pages.module.css';

import MovieCastPage from '../../pages/MovieCastPage';
import MovieReviewsPage from '../../pages/MovieReviewsPage';

export default function MovieDetailsNav({ movie, match }) {
  const { url, path } = match;

  return (
    <>
      <ul className={styles.ditalsNavList}>
        <li className={styles.ditalsNavItem}>
          <NavLink
            to={`${url}/cast`}
            className={styles.detailsNavLink}
            activeClassName={styles.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/reviews`}
            className={styles.detailsNavLink}
            activeClassName={styles.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Route path={`${path}/cast`}>
        {movie && <MovieCastPage movie={movie} />}
      </Route>
      <Route path={`${path}/reviews`}>
        {movie && <MovieReviewsPage movie={movie} />}
      </Route>
    </>
  );
}
