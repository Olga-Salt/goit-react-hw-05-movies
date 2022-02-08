import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { GiFilmSpool } from 'react-icons/gi';
export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        exact
        className={styles.navLink}
        activeClassName={styles.active}
      >
        Home
      </NavLink>
      <GiFilmSpool />
      <NavLink
        to="/movies"
        className={styles.navLink}
        activeClassName={styles.active}
      >
        Movies
      </NavLink>
    </nav>
  );
}
