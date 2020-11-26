import { useEffect, useState } from 'react';

import IPokemonData from 'types/pokemonData';
import req from 'utils/request';
import { ENDPOINT } from '../config/urls';

const useData = (endpoint: ENDPOINT, query: object, deps: any[] = []) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const result: IPokemonData = await req(endpoint, query);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
