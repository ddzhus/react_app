import { MouseEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button';
import { routes } from '../../constants';
import { setStoreAuth } from '../../redux/authReducer/actions';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = useCallback((event: MouseEvent) => {
    event.preventDefault();
    dispatch(setStoreAuth());
    navigate(routes.usersPage.path, { replace: true });
  }, [dispatch, navigate]);

  return (
    <div className={styles.loginPage}>
      <Button onClick={handleClick}>{t('btn_login')}</Button>
    </div>
  );
};
