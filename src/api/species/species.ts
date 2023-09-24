import { SPECIES_URL } from "api/endpoints";
import axios from "axios";

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
