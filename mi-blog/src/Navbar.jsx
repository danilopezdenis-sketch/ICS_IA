import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Inicio
      </NavLink>
      {' | '}
      <NavLink
        to="/posts"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Artículos
      </NavLink>
    </nav>
  );
};

export default Navbar;
