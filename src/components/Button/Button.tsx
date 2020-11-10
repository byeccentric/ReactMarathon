import React from 'react';
import cn from 'classnames';

import cx from './Button.module.scss';

interface IButton {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: 'auto' | 'max';
  color?: 'primary' | 'secondary';
  size?: 'normal' | 'small';
}

const Button: React.FC<IButton> = ({ width = 'auto', color = 'primary', size = 'normal', onClick, children }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(cx.root, {
        [cx.root_width_auto]: width === 'auto',
        [cx.root_width_wide]: width === 'max',
        [cx.root_color_primary]: color === 'primary',
        [cx.root_color_secondary]: color === 'secondary',
        [cx.root_size_normal]: size === 'normal',
        [cx.root_size_small]: size === 'small',
      })}>
      {children}
    </button>
  );
};

export default Button;
