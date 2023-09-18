import axios from "axios";
import { parsePeopleForGeneralList } from "./people.parsers";

const charactersApi = {
  getAllPeople: async (endpointPage: string | null) => {
    if (endpointPage != null) {
      const { data } = await axios.get(endpointPage);
      return parsePeopleForGeneralList(data);
    }
  },
};

export default charactersApi;
