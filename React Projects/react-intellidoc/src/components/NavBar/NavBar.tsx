import { NavLink } from 'react-router-dom';
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
      </ul>
    </nav>
  );
}
