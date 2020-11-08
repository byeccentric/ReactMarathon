import React from 'react';
import { Link } from 'react-router-dom';

import cx from './Navigation.module.scss';

interface INavigationItems {
  id: number;
  value: string;
  link: string;
}

const NAVIGATION_ITEMS: INavigationItems[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/legendaries',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/documentation',
  },
];

const Navigation: React.FC = () => (
  <div className={cx.root}>
    {NAVIGATION_ITEMS.map(({ id, value, link }) => (
      <Link key={id} to={link} className={cx.item}>
        {value}
      </Link>
    ))}
  </div>
);

export default Navigation;
