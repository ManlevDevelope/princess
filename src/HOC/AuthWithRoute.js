import { Redirect, Route } from 'react-router';

const AuthWithRoute = ({ auth, component: Component, render, ...rest }) => {
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
