import React from 'react';

import Footer from 'components/Footer';
import Layout from 'components/Layout';
import Heading from 'components/Heading';

import usePokemons from 'hooks/usePokemons';
import { IPokemon } from 'types/pokemonData';

import PokemonCard from './components/PokemonCard';

import cx from './Pokedex.module.scss';

const Pokedex: React.FC = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return (
      <Layout>
        <Heading level={2} className={cx.title}>
          Loading ...
        </Heading>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <Heading level={2} className={cx.title}>
          Error happens =(
        </Heading>
      </Layout>
    );
  }

  return (
    <Layout>
      <Heading level={2} className={cx.title}>
        {data.total || 0} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      <div className={cx.content}>
        {(data.pokemons || []).map((item: IPokemon) => (
          <PokemonCard
            key={item.id}
            name={item.name_clean}
            attack={item.stats.attack}
            defense={item.stats.defense}
            types={item.types}
            image={item.img}
          />
        ))}
      </div>
      <Footer />
    </Layout>
  );
};

export default Pokedex;
