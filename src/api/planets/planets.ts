import axios from "axios";

import { PLANETS_URL } from "../endpoints";

import { parsePlanetDetails, parsePlanetsForGeneralList } from "./planets.parsers";

const planetsApi = {
  getAllPlanets: async (endpointPage: string) => {
    const { data } = await axios.get(endpointPage);
    return parsePlanetsForGeneralList(data);
  },
  getPlanetDetails: async (id: number | null) => {
    if (id !== null) {
      const { data } = await axios.get(PLANETS_URL.GET_PLANET(id));
      return parsePlanetDetails(data);
    }
  },
};

export default planetsApi;
