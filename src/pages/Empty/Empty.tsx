import React from 'react';

import Header from 'components/Header';
import Heading from 'components/Heading';

interface IEmpty {
  title?: string;
}

const Empty: React.FC<IEmpty> = ({ title = 'unknown page' }) => (
  <div>
    <Header />
    <Heading level={1}>{title}</Heading>
  </div>
);

export default Empty;
