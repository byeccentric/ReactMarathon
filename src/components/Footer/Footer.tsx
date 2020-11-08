import React from 'react';
import cn from 'classnames';

import cx from './Footer.module.scss';

const Footer: React.FC = () => (
  <div className={cn(cx.root)}>
    <div>
      Make with{' '}
      <span aria-label="lucas" role="img">
        ❤️
      </span>
    </div>
    <div>Ours Team</div>
  </div>
);

export default Footer;
