import { NavLink } from 'react-router-dom';
// import { Dropdown } from '../Dropdown/Dropdown';
import styles from './NavBar.module.css';

export function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Intellidoc</div>

      <ul className={styles.center}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard">Dashboard</NavLink>
        </li>
        {/* <li>
          <Dropdown label="Resources">
            <NavLink to="/docs">Docs</NavLink>
            <NavLink to="/guides">Guides</NavLink>
            <NavLink to="/support">Support</NavLink>
          </Dropdown>
        </li> */}
      </ul>

      {/* <div className={styles.right}>
        <NavLink to="/login" className={styles.login}>
          Log In
        </NavLink>
        <NavLink to="/signup" className={styles.cta}>
          Register
        </NavLink>
      </div> */}
    </nav>
  );
}
