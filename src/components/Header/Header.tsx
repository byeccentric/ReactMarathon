import React from 'react';
import cn from 'classnames';

import Logo from './components/Logo';
import Navigation from './components/Navigation';

import cx from './Header.module.scss';

const Header: React.FC = () => (
  <div className={cn(cx.root)}>
    <div className={cn(cx.container)}>
      <Logo />
      <Navigation />
    </div>
  </div>
);

export default Header;
