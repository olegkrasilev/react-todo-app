import { useTranslation } from 'react-i18next';

const TestPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('welcome')}</h1>
    </>
  );
};

export default TestPage;
