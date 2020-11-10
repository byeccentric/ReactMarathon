import React, { useMemo } from 'react';

import cx from './Heading.module.scss';

interface IHeading {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: React.FC<IHeading> = ({ level, children }) => {
  const className = useMemo(() => {
    switch (level) {
      case 1:
        return 'root_level_1';
      case 2:
        return 'root_level_2';
      case 3:
        return 'root_level_3';
      case 4:
        return 'root_level_4';
      case 5:
        return 'root_level_5';
      case 6:
        return 'root_level_6';
      default:
        return 'root_level_1';
    }
  }, [level]);
  return React.createElement(
    `h${level}`,
    {
      className: cx[className],
    },
    children,
  );
};

export default Heading;
