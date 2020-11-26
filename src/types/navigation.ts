import { PropsWithChildren } from 'react';

export enum ELink {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

export interface IMenuItem {
  title: string;
  link: ELink;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export default interface IRoutes {
  [name: string]: (props: PropsWithChildren<any>) => JSX.Element;
}
