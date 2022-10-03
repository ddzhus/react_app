import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routes } from '../../constants';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  const toggleClassName = ({ isActive }: { isActive: boolean }) => (
    isActive ? styles.isActive : styles.navItem
  );

  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <NavLink
        to={routes.usersPage.path}
        className={toggleClassName}
      >
        {t('nav_item_users')}
      </NavLink>
      <NavLink
        to={routes.userProfilePage.path}
        className={toggleClassName}
      >
        {t('nav_item_userInfo')}
      </NavLink>
      <NavLink
        to={routes.logoutPage.path}
        className={toggleClassName}
      >
        {t('nav_item_logout')}
      </NavLink>
    </nav>
  );
};
