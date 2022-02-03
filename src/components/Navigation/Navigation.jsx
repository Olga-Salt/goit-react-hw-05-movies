import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" exact className="" activeClassName="">
        Home
      </NavLink>

      <NavLink to="/movies" className="" activeClassName="">
        Movies
      </NavLink>
    </nav>
  );
}
