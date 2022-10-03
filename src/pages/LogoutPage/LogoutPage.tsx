import { MouseEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { routes } from '../../constants';
import { setAuth } from '../../redux/authReducer/reducer';
import styles from './LogoutPage.module.scss';

export const LogoutPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = useCallback((event: MouseEvent) => {
    event.preventDefault();
    dispatch(setAuth(false));
    localStorage.removeItem('auth');
    navigate(routes.loginPage.path, { replace: true });
  }, [dispatch, navigate]);

  return (
    <div className={styles.logoutPage}>
      <Button onClick={handleClick}>{t('btn_logout')}</Button>
    </div>
  );
};
