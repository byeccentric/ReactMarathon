import React from 'react';
import cn from 'classnames';

import { NAVIGATION_ITEMS } from 'constants/navigation';

import cx from './Navigation.module.scss';

const Navigation: React.FC = () => (
  <div className={cn(cx.root)}>
    {NAVIGATION_ITEMS.map((item: string, index: number) => (
      <div
        key={item}
        className={cn(cx.item, {
          [cx.active]: index === 0,
        })}>
        {item}
      </div>
    ))}
  </div>
);

export default Navigation;
