import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { LOAD_MY_INFO_REQUEST } from '../Actions';

const AuthWithRoute = ({ auth, component: Component, render, ...rest }) => {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      dispatch({ type: LOAD_MY_INFO_REQUEST });
    }
    console.log('loading');
  }, [loading]);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

export default AuthWithRoute;
