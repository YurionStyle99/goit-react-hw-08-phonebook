import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import DefaultLayout from './DefaultLayout/DefaultLayout';
import { PrivateRoute } from './privateRoute';
import { refreshUser } from './redux/auth/authOperation';
import { isRefreshing } from './redux/auth/selectors';
import styles from './styles.module.css';
import Loader from './Loader/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const refreshing = useSelector(isRefreshing);
  console.log(refreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Suspense fallback={<div className={styles.loader}><Loader size={'100'}/></div>}>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/contacts"
              element={<PrivateRoute redirectTo="/login" component={<Contacts></Contacts>}></PrivateRoute>}
            />
          </Route>
          <Route path="/login" element={<DefaultLayout isModalOpen={true} modalType="login" />}>
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="/registration" element={<DefaultLayout isModalOpen={true} modalType="registration" />}>
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
