import { useTranslation } from 'react-i18next';
import styles from './ErrorMessage.module.scss';

export const ErrorMessage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div>{t('error_message')}</div>
    </div>
  );
};
