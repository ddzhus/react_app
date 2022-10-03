import { FocusEvent, useCallback, useState } from 'react';
import i18next from 'i18next';
import { Language } from '../../types/i18n';
import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng'));

  const onChange = useCallback((event: FocusEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
    i18next.changeLanguage(event.target.value);
  }, []);

  return (
    <select
      name="language-switcher"
      id="language-switcher"
      defaultValue={language ?? Language.EN}
      onChange={onChange}
      className={styles.languageSwitcher}
    >
      <option value={Language.EN}>English</option>
      <option value={Language.RU}>Русский</option>
    </select>
  );
};
