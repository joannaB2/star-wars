import { PEOPLE_URL } from "api/endpoints";
import axios from "axios";

import { parseCharacterDetails, parsePeopleForGeneralList } from "./people.parsers";

const charactersApi = {
  getAllPeople: async (endpointPage: string) => {
    const { data } = await axios.get(endpointPage);
    return parsePeopleForGeneralList(data);
  },
  getCharacter: async (id: number | null) => {
    if (id !== null) {
      const { data } = await axios.get(PEOPLE_URL.GET_CHARACTER(id));
      return parseCharacterDetails(data);
    }
  },
};

export default charactersApi;
