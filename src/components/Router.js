import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { selectUserName } from '../features/userSlice';

const Start = lazy(() => import('./Start'));
const Home = lazy(() => import('./Home'));
const NotFound = lazy(() => import('./NotFound'));

export default function Router(props) {
  const { content } = props;

  const userName = useSelector(selectUserName);

  return (
    <Switch>
      <Route exact path="/">
        {!userName ? <Start content={content} /> : <Home content={content} />}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}
