import { Route, Switch } from "react-router-dom";
import routes from "../routes";
import PATHS from "../PATH";
import PeoplePage from "../../pages/PeoplePage";
import Layout from "../../layout/Layout";

const Router = (): JSX.Element => {
  return (
    <Layout>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} exact component={component} />
        ))}
        <Route path={PATHS.ROOT} component={PeoplePage} />
      </Switch>
    </Layout>
  );
};

export default Router;
