import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import RouteWithLayout from './components/RouteWithLayout';
import Recognition from './routes/Recognition';
import Home from './routes';
import AppLayout from './layouts';
import ShopDetail from './routes/ShopDetail';

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <RouteWithLayout path='/Home' component={Home} layout={AppLayout} />
        <RouteWithLayout
          path='/recognition'
          component={Recognition}
          layout={null}
        />
        <RouteWithLayout
          path='/shop-details'
          component={ShopDetail}
          layout={AppLayout}
        />
        <Redirect from='/' to='/Home' />

        <Redirect to='/not-found' />
      </Switch>
    </Provider>
  );
}

export default App;
