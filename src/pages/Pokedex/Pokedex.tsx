import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import POKEMONS, { IPokemon } from 'mocks/pokemon';

import PokemonCard from './components/PokemonCard';

import cx from './Pokedex.module.scss';

const Pokedex: React.FC = () => {
  return (
    <div className={cx.root}>
      <Header />
      <div className={cx.content}>
        {POKEMONS.map((item: IPokemon) => (
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
    </div>
  );
};

export default Pokedex;
