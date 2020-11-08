import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Pokedex from 'pages/Pokedex';
import NotFound from 'pages/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/pokedex" component={Pokedex} />
      <Route component={NotFound} />
    </BrowserRouter>
  );
};

export default App;
