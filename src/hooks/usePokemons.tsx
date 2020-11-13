import { useEffect, useState } from 'react';

import IPokemonData from 'types/pokemonData';

const usePokemons = (limit = 12, offset = 0) => {
  const [data, setData] = useState({});
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
