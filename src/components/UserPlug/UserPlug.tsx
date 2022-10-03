import { useTranslation } from 'react-i18next';
import styles from './UserPlug.module.scss';

export const UserPlug = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <h1>{t('plug')}</h1>
    </div>
  );
};
