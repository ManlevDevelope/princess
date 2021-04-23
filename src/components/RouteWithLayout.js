import { Route } from 'react-router-dom';

const RouteWithLayout = ({ component: Component, layout: Layout, path }) => {
  return (
    <Route path={path}>
      {Layout ? <Layout childComponent={Component} /> : <Component />}
    </Route>
  );
};

export default RouteWithLayout;
