/* eslint-disable camelcase */
export interface IGetPokemon {
  name_clean: string;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  };
  types: string[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
  attack: number;
  defense: number;
  hp: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}
