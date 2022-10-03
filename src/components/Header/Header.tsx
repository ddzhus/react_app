import logo from '../../assets/images/logo.svg';
import { LanguageSwitcher } from '../LanguageSwitcher';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <img src={logo} alt="app" width="32" />
    <LanguageSwitcher />
  </header>
);
