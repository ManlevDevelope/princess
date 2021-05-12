import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Recognition from './routes/Recognition';
import Home from './routes';
import ShopDetail from './routes/ShopDetail';
import ShopPage from './routes/ShopPage';
import Newsfeed from './routes/Newsfeed';
import NewsfeedDetail from './routes/NewsfeedDetail';
import Mycard from './routes/Mycard';
import UserInfo from './routes/UserInfo';
import Login from './routes/Login';
import Signup from './routes/Signup';
import AuthWithRoute from './HOC/AuthWithRoute';
import { useSelector } from 'react-redux';
import ItemRegist from './routes/ItemRegist';

function App() {
  const isLoggedIn = useSelector((state) => state.user.me);
  console.log(isLoggedIn);
  return (
    <Switch>
      <Route exact path='/' render={(props) => <Home {...props} />} />
      <Route
        exact
        path='/recognition'
        render={(props) => <Recognition {...props} />}
      />
      <Route
        exact
        path='/regist'
        render={(props) => <ItemRegist {...props} />}
      />
      <AuthWithRoute
        auth={isLoggedIn}
        exact
        path='/shop'
        component={ShopPage}
        render={(props) => <ShopPage {...props} />}
      />
      {/* <Route exact path='/shop' render={(props) => <ShopPage {...props} />} /> */}
      <AuthWithRoute
        auth={isLoggedIn}
        exact
        path='/shop/:id'
        render={(props) => <ShopDetail {...props} />}
      />
      <AuthWithRoute
        auth={isLoggedIn}
        exact
        path='/newsfeed'
        render={(props) => <Newsfeed {...props} />}
      />
      <AuthWithRoute
        auth={isLoggedIn}
        exact
        path='/newsfeed/:id'
        render={(props) => <NewsfeedDetail {...props} />}
      />
      <AuthWithRoute
        auth={isLoggedIn}
        exact
        path='/mycard'
        render={(props) => <Mycard {...props} />}
      />
      <AuthWithRoute
        auth={isLoggedIn}
        exact
        path='/card-newsfeed'
        render={(props) => <Newsfeed {...props} />}
      />
      <Route exact path='/login' render={(props) => <Login {...props} />} />

      <Route exact path='/signup' render={(props) => <Signup {...props} />} />
      <AuthWithRoute
        auth={isLoggedIn}
        exact
        path='/info'
        render={(props) => <UserInfo {...props} />}
      />
      {/* <Redirect to='/not-found' /> */}
    </Switch>
  );
}

export default App;
