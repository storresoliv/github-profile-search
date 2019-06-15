import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { User, Search } from '../screens';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/users/:id/repos" component={User} />
    </Switch>
  </BrowserRouter>
);

