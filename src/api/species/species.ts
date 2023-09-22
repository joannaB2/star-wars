import axios from "axios";

import { SPECIES_URL } from "../endpoints";

import { parseSpeciesDetails } from "./species.parsers";

const speciesApi = {
  getSpeciesDetails: async (id: number | null) => {
    if (id !== null) {
      const { data } = await axios.get(SPECIES_URL.GET_SPECIES(id));
      return parseSpeciesDetails(data);
    }
  },
};

export default speciesApi;
