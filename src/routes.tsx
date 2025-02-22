import React from 'react';

import Home from 'pages/Home';
import Pokedex from 'pages/Pokedex';
import Empty from 'pages/Empty';

import IRoutes, { IMenuItem, ELink } from 'types/navigation';
import Pokemon from './pages/Pokemon';

export const GENERAL_MENU: IMenuItem[] = [
  {
    title: 'Home',
    link: ELink.HOME,
    component: () => <Home />,
  },
  {
    title: 'Pokédex',
    link: ELink.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: ELink.LEGENDARIES,
    component: () => <Empty title="Legendaries page" />,
  },
  {
    title: 'Documentation',
    link: ELink.DOCUMENTATION,
    component: () => <Empty title="Documentation page" />,
  },
];

const SECOND_ROUNTES: IMenuItem[] = [
  {
    title: 'Pokemon',
    link: ELink.POKEMON,
    component: ({ id }) => <Pokemon id={id} />,
  },
];

const routes: IRoutes = [...GENERAL_MENU, ...SECOND_ROUNTES].reduce((acc: IRoutes, item: IMenuItem) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
