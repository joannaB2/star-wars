import { type ComponentType } from "react";

import CharacterDetailPage from "../pages/CharacterDetailsPage";
import PeoplePage from "../pages/PeoplePage";
import PlanetDetailsPage from "../pages/PlanetDetailsPage";
import PlanetsPage from "../pages/PlanetsPage";

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
  {
    path: PATHS.PLANETS,
    component: PlanetsPage,
  },
  {
    path: PATHS.PLANET_DETAILS,
    component: PlanetDetailsPage,
  },
];

export default routes;
