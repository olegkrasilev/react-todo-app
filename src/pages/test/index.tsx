import { useTranslation } from 'react-i18next';

import { LangSwitcher } from 'widgets/lang-switcher';

const TestPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('welcome')}</h1>
    </>
  );
};

export default TestPage;
