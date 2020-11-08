import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Button from 'components/Button';
import Heading from 'components/Heading';
import Parallax from './components/Parallax';

import cx from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={cx.root}>
      <Header />
      <div className={cx.content}>
        <div className={cx.left}>
          <Heading level={1}>
            <span>
              <span className={cx.bold}>Find</span> all your favorite <span className={cx.bold}>Pokemon</span>
            </span>
          </Heading>
          <div className={cx.text}>You can know the type of Pokemon, its strengths, disadvantages and abilities</div>
          <Button onClick={() => {}}>Hi there</Button>
        </div>
        <Parallax />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
