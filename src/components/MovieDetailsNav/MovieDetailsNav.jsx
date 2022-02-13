import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from '../../pages/Pages.module.css';

import MovieCastPage from '../../pages/MovieCastPage';
import MovieReviewsPage from '../../pages/MovieReviewsPage';
import { useLocation } from 'react-router-dom';

export default function MovieDetailsNav({ movie, match }) {
  const { url, path } = match;
  const location = useLocation();

  // let { from } = location.state || { from: { pathname: '/' } };
  // state: location.state || { from: { pathname: '/' } }, при копировании url в новую вкладку не будет ошибки, что не может прочитать свойство from

  return (
    <>
      <ul className={styles.ditalsNavList}>
        <li className={styles.ditalsNavItem}>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: location.state || {
                from: location,
              },
            }}
            className={styles.detailsNavLink}
            activeClassName={styles.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: location.state || { from: location },
            }}
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

MovieDetailsNav.propTypes = {
  movie: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.object.isRequired,
  ]),
  match: PropTypes.object.isRequired,
};
