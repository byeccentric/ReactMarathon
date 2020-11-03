import React from 'react';
import cn from 'classnames';

import Header from 'components/Header';
import Footer from 'components/Footer';

import cx from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={cn(cx.container)}>
      <Header />
      <div className={cn(cx.content)}>Yes, we did it! This is App Component!</div>
      <Footer />
    </div>
  );
};

export default App;
