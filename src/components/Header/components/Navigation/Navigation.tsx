import React from 'react';
import cn from 'classnames';

import cx from './Navigation.module.scss';

const Navigation: React.FC = () => (
  <div className={cn(cx.root)}>
    <div className={cn(cx.item, cx.active)}>Home</div>
    <div className={cn(cx.item)}>Pokédex</div>
    <div className={cn(cx.item)}>Legendaries</div>
    <div className={cn(cx.item)}>Documentation</div>
  </div>
);

export default Navigation;
