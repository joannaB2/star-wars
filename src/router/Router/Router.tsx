import { Route, Switch } from "react-router-dom";

import Layout from "../../layout/Layout";
import PeoplePage from "../../pages/PeoplePage";
import PATHS from "../PATH";
import routes from "../routes";

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
