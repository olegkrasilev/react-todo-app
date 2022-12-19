import { CSSProperties } from 'react';
import { PuffLoader } from 'react-spinners';

import styles from './spinner.module.scss';

interface SpinnerProperties {
  loading: boolean;
}

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

export const Spinner = ({ loading }: SpinnerProperties) => {
  return (
    <div className={styles.spinnerWrapper}>
      <PuffLoader
        loading={loading}
        cssOverride={override}
        aria-label='Loading Spinner'
        data-testid='Spinner'
      />
    </div>
  );
};
