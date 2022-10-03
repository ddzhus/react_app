/* eslint-disable react/jsx-no-useless-fragment */
import { FC } from 'react';
// import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
// import { setStoreAuth } from '../redux/authReducer/actions';
import { isAuthenticatedSelector } from '../redux/authReducer/selectors';

type PrivateRouteProps = {
  redirectTo: string,
};

export const PrivateRoute: FC<PrivateRouteProps> = ({ children, redirectTo }): JSX.Element => {
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return (
    <>
      {children}
    </>
  );
};
