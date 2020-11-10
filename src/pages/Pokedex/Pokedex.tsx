import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import cx from './Pokedex.module.scss';

const Pokedex: React.FC = () => {
  return (
    <div className={cx.root}>
      <Header />
      <div className={cx.text}>Hello im pokedex page</div>
      <Footer />
    </div>
  );
};

export default Pokedex;
