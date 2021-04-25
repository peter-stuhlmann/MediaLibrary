import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Start = lazy(() => import('./Start'));
const NotFound = lazy(() => import('./NotFound'));

export default function Router(props) {
  const { content } = props;

  return (
    <Switch>
      <Route exact path="/">
        <Start content={content} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}
