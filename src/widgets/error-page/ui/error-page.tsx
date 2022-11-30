import classes from './error-page.module.scss';

import errorSVG from 'shared/assets/widget/error-page/index.svg';

export const ErrorPage = () => {
  return (
    <section className={classes.errorPage}>
      <img
        src={errorSVG}
        width='866'
        height='683'
        alt='Something went wrong...'
        loading='eager'
      />
    </section>
  );
};

export default ErrorPage;
