import styles from './spinner.module.scss';

interface SpinnerProperties {
  isLoading?: boolean;
}

export const Spinner = ({ isLoading }: SpinnerProperties) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}>
        <div className={styles.doubleBounce}></div>
        <div className={styles.doubleBounce2}></div>
      </div>
    </div>
  );
};
