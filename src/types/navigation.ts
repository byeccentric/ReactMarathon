export enum ELink {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

export interface IMenuItem {
  title: string;
  link: ELink;
  component: () => JSX.Element;
}

export default interface IRoutes {
  [name: string]: () => JSX.Element;
}
