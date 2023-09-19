import { type ComponentType } from "react";

import CharacterDetailPage from "../pages/CharacterDetailsPage";
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
  {
    path: PATHS.PEOPLE_DETAILS,
    component: CharacterDetailPage,
  },
];

export default routes;
