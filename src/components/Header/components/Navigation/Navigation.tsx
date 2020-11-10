import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';

import { GENERAL_MENU } from '../../../../routes';

import cx from './Navigation.module.scss';

const Navigation: React.FC = () => {
  const path = usePath();

  return (
    <div className={cx.root}>
      {GENERAL_MENU.map(({ title, link }) => (
        <A
          key={title}
          href={link}
          className={cn(cx.item, {
            [cx.activeLink]: link === path,
          })}>
          {title}
        </A>
      ))}
    </div>
  );
};

export default Navigation;
