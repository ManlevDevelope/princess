import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import Recognition from './Recognition';

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <div>헤더</div>
      <Switch>
        <Route exact path='/' />
        <Route exact path='/recognition' component={Recognition} />
      </Switch>
    </>
  );
}

export default App;
