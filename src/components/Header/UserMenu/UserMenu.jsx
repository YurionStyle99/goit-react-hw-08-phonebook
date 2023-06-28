// UserMenu.jsx
import Loader from 'components/Loader/Loader';
import { logOut } from 'components/redux/auth/authOperation';
import { isLoading, userName } from 'components/redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styles from '../styles.module.css';

const UserMenu = () => {
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(userName);
  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <ul>
      <li className={styles.user__nav}>
        {loading ? (
          <Loader size={'20'}></Loader>
        ) : (
          <>
            <p className={styles.username}>Welcome, {name}</p>
            <button type="button" onClick={handleLogout} className={styles.user__btn}>
              Logout
            </button>
          </>
        )}
      </li>
    </ul>
  );
};

export default UserMenu;
