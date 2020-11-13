import React from 'react';

import Footer from 'components/Footer';
import Heading from 'components/Heading';

interface IEmpty {
  title?: string;
}

const Empty: React.FC<IEmpty> = ({ title = 'unknown page' }) => (
  <div>
    <Heading level={1}>{title}</Heading>
    <Footer />
  </div>
);

export default Empty;
