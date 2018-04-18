import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/components/Home';
import Header from './shared/components/Header';
import { getNavLinks } from './utils/getNavLinks';
import './assets/styles/App.sass';

const App = () => (
  <div className="App">
    <Header />
    <Route exact path="/" component={Home} />
    {getNavLinks().map(link => (
      <Route
        key={link.path}
        path={`/${link.path}`}
        component={link.component}
      />
    ))}
  </div>
);

export default App;
