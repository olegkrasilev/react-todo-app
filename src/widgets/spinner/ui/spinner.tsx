import { CSSProperties } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

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
      <ClimbingBoxLoader
        loading={loading}
        cssOverride={override}
        aria-label='Loading Spinner'
        data-testid='Spinner'
      />
    </div>
  );
};
