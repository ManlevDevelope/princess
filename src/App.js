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
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from './Actions';

function App() {
  const dispatch = useDispatch();
  const { me, loading } = useSelector((state) => state.user);
  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      axios.defaults.headers.common['Authorization'] = data;
      console.dir(data);
    }
    dispatch({ type: LOAD_MY_INFO_REQUEST });
  }, []);
  if (!loading)
    return (
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <AuthWithRoute
          auth={me}
          exact
          path='/recognition'
          render={(props) => <Recognition {...props} />}
        />
        <AuthWithRoute
          auth={me}
          exact
          path='/regist'
          render={(props) => <ItemRegist {...props} />}
        />
        <AuthWithRoute
          auth={me}
          exact
          path='/shop'
          component={ShopPage}
          render={(props) => <ShopPage {...props} />}
        />
        <AuthWithRoute
          auth={me}
          exact
          path='/shop/:id'
          render={(props) => <ShopDetail {...props} />}
        />
        <AuthWithRoute
          auth={me}
          exact
          path='/newsfeed'
          render={(props) => <Newsfeed {...props} />}
        />
        <AuthWithRoute
          auth={me}
          exact
          path='/newsfeed/:id'
          render={(props) => <NewsfeedDetail {...props} />}
        />
        <AuthWithRoute
          auth={me}
          exact
          path='/mycard'
          render={(props) => <Mycard {...props} />}
        />
        <AuthWithRoute
          auth={me}
          exact
          path='/card-newsfeed'
          render={(props) => <Newsfeed {...props} />}
        />

        <Route
          exact
          path='/login'
          render={(props) => (me ? <Redirect to='/' /> : <Login {...props} />)}
        />
        <Route
          exact
          path='/signup'
          render={(props) => (me ? <Redirect to='/' /> : <Signup {...props} />)}
        />

        <AuthWithRoute
          auth={me}
          exact
          path='/info'
          render={(props) => <UserInfo {...props} />}
        />
        {/* <Redirect to='/not-found' /> */}
      </Switch>
    );
  else return <></>;
}

export default App;
