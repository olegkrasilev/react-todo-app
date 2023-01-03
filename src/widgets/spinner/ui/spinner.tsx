import { AnimatePresence, motion } from 'framer-motion';

import styles from './spinner.module.scss';
interface SpinnerProperties {
  isLoading?: boolean;
}

export const Spinner = ({ isLoading }: SpinnerProperties) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key='spinner'
          className={styles.wrapper}
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.spinner}>
            <div className={styles.doubleBounce}></div>
            <div className={styles.doubleBounce2}></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
