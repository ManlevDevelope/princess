import { Route, Router } from 'react-router';

const RouteWithLayout = ({ component: Component, layout: Layout, path }) => {
  console.log(Component, Layout, path);
  return (
    <Route path={path}>
      {Layout ? (
        <Layout>
          <Component />
        </Layout>
      ) : (
        <Component />
      )}
    </Route>
  );
};

export default RouteWithLayout;
