import React from 'react';
import { useRoutes } from 'hookrouter';

import Header from 'components/Header';
import NotFound from 'pages/NotFound';

import routes from './routes';

const App: React.FC = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFound />
  );
};

export default App;
