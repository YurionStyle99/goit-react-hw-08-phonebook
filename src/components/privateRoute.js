import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLogged, isRefreshing } from './redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const logged = useSelector(isLogged);
  const refreshing = useSelector(isRefreshing);
  const shouldRedirect = !logged && !refreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
