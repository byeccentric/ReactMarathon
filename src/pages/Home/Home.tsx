import React, { useCallback } from 'react';
import { navigate } from 'hookrouter';

import Footer from 'components/Footer';
import Button from 'components/Button';
import Heading from 'components/Heading';
import Layout from 'components/Layout';

import { ELink } from 'types/navigation';

import Parallax from './components/Parallax';

import cx from './Home.module.scss';

const Home: React.FC = () => {
  const goToPokedexPage = useCallback(() => navigate(ELink.POKEDEX), []);

  return (
    <Layout className={cx.root}>
      <div className={cx.content}>
        <div className={cx.left}>
          <Heading level={1}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <div className={cx.text}>You can know the type of Pokemon, its strengths, disadvantages and abilities</div>
          <Button onClick={goToPokedexPage}>See pokemons</Button>
        </div>
        <Parallax />
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
