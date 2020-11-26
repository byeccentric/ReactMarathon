export enum ENDPOINT {
  GET_POKEMONS = 'getPokemons',
}

const config = {
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
    },
  },
};

export default config;
