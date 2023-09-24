import Layout from "layout/Layout";
import NotFound from "pages/NotFound";
import { Route, Switch } from "react-router-dom";
import routes from "router/routes";

const Router = (): JSX.Element => {
  return (
    <Layout>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route component={component} exact key={path} path={path} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default Router;
