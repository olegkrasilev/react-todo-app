/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable unicorn/consistent-function-scoping */
import { useTranslation } from 'react-i18next';

import i18n from 'shared/config/i18n';

const TestPage = () => {
  const { t } = useTranslation();

  const onChange = (event: any) => {
    void i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <div className='App'>
        <header className='App-header'>
          <h1>{t('welcome')}</h1>
          <select
            name='language'
            onChange={onChange}
          >
            <option value='en'>English</option>
            <option value='ru'>Русский</option>
          </select>
        </header>
      </div>
    </div>
  );
};

export default TestPage;
