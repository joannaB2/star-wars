import { type ComponentType } from "react";

import CharacterDetailPage from "pages/CharacterDetailsPage";
import PeoplePage from "pages/PeoplePage";
import PlanetDetailsPage from "pages/PlanetDetailsPage";
import PlanetsPage from "pages/PlanetsPage";
import VehicleDetailPage from "pages/VehicleDetailPage";
import VehiclesPage from "pages/VehiclesPage";

import PATHS from "./PATH";

interface Route {
  path: string;
  component: ComponentType<any>;
}

const routes: Route[] = [
  {
    path: PATHS.ROOT,
    component: PeoplePage,
  },
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
  {
    path: PATHS.VEHICLES,
    component: VehiclesPage,
  },
  {
    path: PATHS.VEHICLE_DETAILS,
    component: VehicleDetailPage,
  },
];

export default routes;
