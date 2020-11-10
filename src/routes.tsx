import React from 'react';

import Home from 'pages/Home';
import Pokedex from 'pages/Pokedex';
import Empty from 'pages/Empty';

interface IRoutes {
  [name: string]: () => JSX.Element;
}

interface IMenuItem {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const GENERAL_MENU: IMenuItem[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <Home />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <Empty title="Legendaries page" />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <Empty title="Documentation page" />,
  },
];

const routes: IRoutes = GENERAL_MENU.reduce((acc: IRoutes, item: IMenuItem) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
