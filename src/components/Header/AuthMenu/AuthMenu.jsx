import { NavLink } from 'react-router-dom';
import styles from '../styles.module.css';

const AuthMenu = () => {
  return (
    <ul className={styles.auth__nav}>
      <li className={styles.nav__item}>
        <NavLink to="/login" className={styles.nav__link}>
          Login
        </NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink to="/registration" className={styles.nav__link}>
          Registration
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthMenu;
