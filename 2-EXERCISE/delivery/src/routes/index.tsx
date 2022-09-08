import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} exact />
      ))}
    </Switch>
  );
};

export default Routes;
