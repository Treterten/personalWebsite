import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Blog" component={Blog} />
  </Switch>
);

export default App;
