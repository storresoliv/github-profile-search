import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Search } from '../screens';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/" component={Search} />
    </Switch>
  </BrowserRouter>
);

