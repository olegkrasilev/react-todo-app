/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useTranslation } from 'react-i18next';

import { useGetAllTodosQuery } from 'shared/api/get-all-todo';

import { LangSwitcher } from 'widgets/lang-switcher';

const TestPage = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useGetAllTodosQuery('');

  console.log(data);

  return (
    <>
      <h1>{t('welcome')}</h1>
    </>
  );
};

export default TestPage;
