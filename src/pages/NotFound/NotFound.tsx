import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import cx from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={cx.root}>
      <Header />
      <div className={cx.text}>Hello im not found page</div>
      <Footer />
    </div>
  );
};

export default NotFound;
