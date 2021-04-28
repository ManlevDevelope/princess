import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Recognition from './routes/Recognition';
import Home from './routes';
import ShopDetail from './routes/ShopDetail';
import ShopPage from './routes/ShopPage';
import Layout from './layouts';
import Newsfeed from './routes/Newsfeed';
import NewsfeedDetail from './routes/NewsfeedDetail';
import Mycard from './routes/Mycard';
import UserInfo from './routes/UserInfo';

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
        <Route
          exact
          path='/shop'
          render={(props) => (
            <Layout>
              <ShopPage {...props} />
            </Layout>
          )}
        />
        <Route
          exact
          path='/shop/:id'
          render={(props) => <ShopDetail {...props} />}
        />
        <Route
          exact
          path='/newsfeed'
          render={(props) => <Newsfeed {...props} />}
        />
        <Route
          exact
          path='/newsfeed/:id'
          render={(props) => <NewsfeedDetail {...props} />}
        />
        <Route exact path='/mycard' render={(props) => <Mycard {...props} />} />
        <Route
          exact
          path='/card-newsfeed'
          render={(props) => <Newsfeed {...props} />}
        />
        <Route exact path='/info' render={(props) => <UserInfo {...props} />} />
        <Redirect to='/not-found' />
      </Switch>
    </>
  );
}

export default App;
