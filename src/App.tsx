import React from 'react';
import './App.scss';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './screens/home/home';
import { createBrowserHistory } from 'history';

function App() {
  const hist = createBrowserHistory();
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
