import Layout from "layout/Layout";
import PeoplePage from "pages/PeoplePage";
import { Route, Switch } from "react-router-dom";
import PATHS from "router/PATH";
import routes from "router/routes";

const Router = (): JSX.Element => {
  return (
    <Layout>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route component={component} exact key={path} path={path} />
        ))}
        <Route component={PeoplePage} path={PATHS.ROOT} />
      </Switch>
    </Layout>
  );
};

export default Router;
