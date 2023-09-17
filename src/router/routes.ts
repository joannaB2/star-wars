import { type ComponentType } from "react";
import PeoplePage from "../pages/PeoplePage";
import PATHS from "./PATH";

interface Route {
  path: string;
  component: ComponentType<any>;
}

const routes: Route[] = [
  {
    path: PATHS.PEOPLE,
    component: PeoplePage,
  },
];

export default routes;
