import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../pages/Welcome';
import Dashboard from '../pages/Dashboard';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
};

export default routes;
