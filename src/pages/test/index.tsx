/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
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
