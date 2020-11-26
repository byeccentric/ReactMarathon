import React from 'react';

import { ENDPOINT } from 'config/urls';
import useData from 'hooks/getData';
import { IGetPokemon } from 'types/pokemonData';
import toCapitalizeFirstLetter from 'utils/toCapitalizeFirstLetter';

interface IPokemon {
  id: string | number;
}

const Pokemon: React.FC<IPokemon> = ({ id }) => {
  const { data, isLoading } = useData<IGetPokemon>(ENDPOINT.GET_POKEMON, { id });

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return <div>This is pokemon name equal {toCapitalizeFirstLetter(data?.name)}</div>;
};

export default Pokemon;
