export enum ENDPOINT {
  GET_POKEMONS = 'getPokemons',
  GET_POKEMON = 'getPokemon',
}

type TEndpoint = Record<
  ENDPOINT,
  {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';
    uri: {
      pathname: string;
    };
  }
>;

interface IConfig {
  client: {
    server: {
      protocol: 'http' | 'https';
      host: string;
    };
    endpoint: TEndpoint;
  };
}

const config: IConfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      [ENDPOINT.GET_POKEMONS]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      [ENDPOINT.GET_POKEMON]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
    },
  },
};

export default config;
