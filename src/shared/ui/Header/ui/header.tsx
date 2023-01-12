import { useTranslation } from 'react-i18next';

import styles from './header.module.scss';

import { LangSwitcher } from 'widgets/lang-switcher';
import { ThemeSwitcher } from 'widgets/theme-switcher';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <a href='/'>{t('todoList')}</a>
      <div className={styles.widgets}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </header>
  );
};
