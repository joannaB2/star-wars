import axios from "axios";

import { PLANETS_URL } from "../endpoints";

import { parsePlanetDetails } from "./planets.parsers";

const planetsApi = {
  getPlanetDetails: async (id: number | null) => {
    if (id !== null) {
      const { data } = await axios.get(PLANETS_URL.GET_PLANET(id));
      return parsePlanetDetails(data);
    }
  },
};

export default planetsApi;
