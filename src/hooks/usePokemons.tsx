import { useEffect, useState } from 'react';

import IPokemonData from 'types/pokemonData';

export interface IUsePokemons {
  isLoading: boolean;
  isError: boolean;
  data: IPokemonData;
}

const INITIAL_DATA_VALUES: IPokemonData = {
  total: 0,
  count: 0,
  limit: 0,
  offset: 0,
  pokemons: [],
};

export type TUsePokemons = (limit?: number, offset?: number) => IUsePokemons;

const usePokemons: TUsePokemons = (limit = 12, offset = 0) => {
  const [data, setData] = useState(INITIAL_DATA_VALUES);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch(`http://zar.hosthot.ru/api/v1/pokemons?limit=${limit}&offset=${offset}`);
        const result: IPokemonData = await response.json();

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, [limit, offset]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default usePokemons;
