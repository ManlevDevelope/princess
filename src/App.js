import React, { useEffect } from 'react';
import { Redirect, Router, Switch } from 'react-router';
import RouteWithLayout from './components/RouteWithLayout';
import Recognition from './Recognition';
import Home from './routes';
import AppLayout from './layouts';

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <Switch>
        <Redirect from='/' to='/Home' />
        <RouteWithLayout path='/Home' component={Home} layout={AppLayout} />

        <RouteWithLayout
          path='/recognition'
          component={Recognition}
          layout={AppLayout}
        />

        <Redirect to='/not-found' />
      </Switch>
    </>
  );
}

export default App;
