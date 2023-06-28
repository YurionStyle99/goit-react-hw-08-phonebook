import { error, isLogged, isLoading } from 'components/redux/auth/selectors';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUser, logIn } from '../redux/auth/authOperation';
import styles from './styles.module.css';
import Loader from 'components/Loader/Loader';

const modalRoot = document.querySelector('#root-modal');

const Modal = ({ onClose, modalType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(isLoading)
  const [formErrors, setFormErrors] = useState({});
  const logged = useSelector(isLogged);
  const registrationError = useSelector(error);

  useEffect(() => {
    if (logged) {
      navigate('/contacts');
    }
  }, [logged, navigate]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleInputChange = event => {
    const { name } = event.target;
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
      registration: '',
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;

    if (!name.value || !email.value || !password.value) {
      setFormErrors({
        name: name.value ? '' : 'Please enter your username',
        email: email.value ? '' : 'Please enter your email',
        password: password.value ? '' : 'Please enter your password',
        registration: '',
      });
      return;
    }

    if (password.value.length < 7) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        password: 'Password should be at least 7 characters long',
        registration: '',
      }));
      return;
    }

    if (formErrors.registration) {
      alert(`{formErrors.registration}`);
    }
    dispatch(
      createUser({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  const handleLogin = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form.elements;

    if (!email.value || !password.value) {
      setFormErrors({
        email: email.value ? '' : 'Please enter your email',
        password: password.value ? '' : 'Please enter your password',
        registration: '',
      });
      return;
    }
 
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  let modalContent;

  if (modalType === 'login') {
    modalContent = (
      <div className={styles.box}>
        <div className={styles.form}>
          <h2>SIGN IN</h2>
          <form onSubmit={handleLogin}>
            <div className={styles.inputBox}>
              <input type="text" name="email" required onChange={handleInputChange} />
              <span>Email</span>
              <i></i>
            </div>
            {formErrors.email && <p className={styles.error}>{formErrors.email}</p>}
            <div className={styles.inputBox}>
              <input type="password" name="password" required onChange={handleInputChange} />
              <span>Password</span>
              <i></i>
            </div>
            {formErrors.password && <p className={styles.error}>{formErrors.password}</p>}
            <div className={styles.links}>
              <NavLink to="/registration">Registration</NavLink>
            </div>
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  } else if (modalType === 'registration') {
    modalContent = (
      <div className={styles.box}>
        <div className={styles.form}>
          <h2>Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputBox}>
              <input type="text" name="name" required onChange={handleInputChange} />
              <span>Username</span>
              <i></i>
            </div>
            {formErrors.name && <p className={styles.error}>{formErrors.name}</p>}
            <div className={styles.inputBox}>
              <input type="email" name="email" required onChange={handleInputChange} />
              <span>Email</span>
              <i></i>
            </div>
            {formErrors.email && <p className={styles.error}>{formErrors.email}</p>}
            <div className={styles.inputBox}>
              <input type="password" name="password" required onChange={handleInputChange} />
              <span>Password</span>
              <i></i>
            </div>
            {formErrors.password && <p className={styles.error}>{formErrors.password}</p>}
            {registrationError && <p className={styles.error}>{registrationError}</p>}
            <div className={styles.links}>
              <NavLink to="/login">Log in</NavLink>
            </div>
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    );
  }

  return createPortal(
    loading ? (
      <div className={styles.loader}><Loader size={'100'}/></div>
    ) : (
      <div className={styles.Overlay} onClick={handleOverlayClick}>
        <div className={styles.Modal}>{modalContent}</div>
      </div>
    ),
    modalRoot
  );
  
};

export default Modal;
