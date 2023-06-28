import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Modal from '../Modal/RegistrationModal';
import { isLogged } from '../redux/auth/selectors';
import AuthMenu from './AuthMenu/AuthMenu';
import UserMenu from './UserMenu/UserMenu';
import styles from './styles.module.css';

const Header = ({ isModalOpen = false, modalType = '' }) => {
  const navigate = useNavigate();
  const logged = useSelector(isLogged);

  const handleCloseModal = useCallback(() => {
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleCloseModal]);

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <NavLink to="/" className={styles.nav__link}>
              Home
            </NavLink>
          </li>
          {logged && (
            <li className={styles.nav__item}>
              <NavLink to="/contacts" className={styles.nav__link}>
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
        <ul>{logged ? <UserMenu /> : <AuthMenu isModalOpen={isModalOpen} modalType={modalType} />}</ul>
      </nav>
      {isModalOpen && <Modal onClose={handleCloseModal} modalType={modalType} />}
    </header>
  );
};

export default Header;
