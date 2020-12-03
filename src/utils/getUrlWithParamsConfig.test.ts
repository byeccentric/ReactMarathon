import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import { ENDPOINT } from '../config/urls';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать два аргумента "getPokemons" и пустой объект, на выходе получить объект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig(ENDPOINT.GET_POKEMONS, {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('Должна принимать два аргумента "getPokemons" и {name: "Pikachu"}, на выходе получить объект с полями pathname, protocol, host и query = {name: "Pikachu"}', () => {
    const url = getUrlWithParamsConfig(ENDPOINT.GET_POKEMONS, { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {
        name: 'Pikachu',
      },
    });
  });

  test('Должна принимать два аргумента "getPokemon" и {id: 25}, на выходе получить объект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig(ENDPOINT.GET_POKEMON, { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
