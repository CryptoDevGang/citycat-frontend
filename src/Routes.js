import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import viewsRoutes from 'views/routes';
import docsRoutes from 'docs/routes';
import blocksRoutes from 'blocks/routes';
import demosRoutes from 'demos/routes';

const Routes = () => {
  return (
    <Switch>
      {viewsRoutes.map((item, i) => (
        <Route key={i} exact path={item.path} render={() => item.renderer()} />
      ))}
      {docsRoutes.map((item, i) => (
        <Route key={i} exact path={item.path} render={() => item.renderer()} />
      ))}
      {blocksRoutes.map((item, i) => (
        <Route key={i} exact path={item.path} render={() => item.renderer()} />
      ))}
      {demosRoutes.map((item, i) => (
        <Route key={i} exact path={item.path} render={() => item.renderer()} />
      ))}
      <Redirect to={'/not-found-cover'} />
    </Switch>
  );
};

export default Routes;
