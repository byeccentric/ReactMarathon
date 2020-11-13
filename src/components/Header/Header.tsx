import React from 'react';
import cn from 'classnames';

import Navigation from './components/Navigation';
import { ReactComponent as PokemonLogoSvg } from './assets/logo.svg';

import cx from './Header.module.scss';

const Header: React.FC = () => (
  <div className={cn(cx.root)}>
    <div className={cn(cx.container)}>
      <PokemonLogoSvg />
      <Navigation />
    </div>
  </div>
);

export default React.memo(Header);
