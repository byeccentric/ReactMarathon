import React, { useCallback, useState } from 'react';

import Footer from 'components/Footer';
import Layout from 'components/Layout';
import Heading from 'components/Heading';

import useData from 'hooks/getData';
import { IPokemon } from 'types/pokemonData';
import { ENDPOINT } from 'config/urls';

import PokemonCard from './components/PokemonCard';

import cx from './Pokedex.module.scss';

const INITIAL_DATA = {
  total: 0,
  pokemons: [],
};

const Pokedex: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data = INITIAL_DATA, isLoading = false, isError = true } = useData(ENDPOINT.GET_POKEMONS, query, [
    searchValue,
  ]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <Heading level={2} className={cx.title}>
          Loading ...
        </Heading>
        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
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
        {data?.total || 0} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      <div>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
      </div>
      <div className={cx.content}>
        {(data?.pokemons || []).map((item: IPokemon) => (
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
