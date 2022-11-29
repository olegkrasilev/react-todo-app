import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from 'shared/config/i18n';

export const withI18n = (component: () => React.ReactNode) => () =>
  (
    <I18nextProvider i18n={i18n}>
      <Suspense>{component()}</Suspense>
    </I18nextProvider>
  );
