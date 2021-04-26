import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Recognition from './routes/Recognition';
import Home from './routes';
import ShopDetail from './routes/ShopDetail';
import ShopPage from './routes/ShopPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route
          exact
          path='/recognition'
          render={(props) => <Recognition {...props} />}
        />
        <Route exact path='/shop' render={(props) => <ShopPage {...props} />} />
        <Route
          exact
          path='/shop/:id'
          render={(props) => <ShopDetail {...props} />}
        />
        <Redirect to='/not-found' />
      </Switch>
    </>
  );
}

export default App;
