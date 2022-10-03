import { Navigate, Route, Routes } from 'react-router-dom';
import { Content } from '../components/Content';
import { Layout } from '../components/Layout';
import { UserPlug } from '../components/UserPlug';
import { routes } from '../constants';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';
import { UserProfilePage } from '../pages/UserProfilePage';
import { UsersPage } from '../pages/UsersPage';
import { PrivateRoute } from './PrivateRoute';

export const Router = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route
        path={routes.loginPage.path}
        element={<LoginPage />}
      />
      <Route element={(
        <PrivateRoute redirectTo={routes.loginPage.path}>
          <Content />
        </PrivateRoute>
        )}
      >
        <Route
          path={routes.usersPage.path}
          element={<UsersPage />}
        />
        <Route
          path={routes.userProfilePage.path}
        >
          <Route
            index
            element={<UserPlug />}
          />
          <Route
            path=":userID"
            element={<UserProfilePage />}
          />
        </Route>
        <Route
          path={routes.logoutPage.path}
          element={<LogoutPage />}
        />
      </Route>
      <Route
        path="*"
        element={<Navigate replace to={routes.loginPage.path} />}
      />
    </Route>
  </Routes>
);
