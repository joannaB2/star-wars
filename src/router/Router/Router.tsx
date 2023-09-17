import { Route, Switch } from "react-router-dom";
import routes from "../routes";
import PATHS from "../PATH";
import PeoplePage from "../../pages/PeoplePage";

const Router = (): JSX.Element => {
  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} exact component={component} />
      ))}
      <Route path={PATHS.ROOT} component={PeoplePage} />
    </Switch>
  );
};

export default Router;
