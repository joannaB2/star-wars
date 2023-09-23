import { VEHICLES_URL } from "api/endpoints";
import axios from "axios";

import { parseVehicleDetails, parseVehiclesForGeneralList } from "./vehicles.parsers";

const vehicleApi = {
  getAllVehicles: async (endpointPage: string) => {
    const { data } = await axios.get(endpointPage);
    return parseVehiclesForGeneralList(data);
  },
  getVehicleDetails: async (id: number | null) => {
    if (id !== null) {
      const { data } = await axios.get(VEHICLES_URL.GET_VEHICLE(id));
      return parseVehicleDetails(data);
    }
  },
};

export default vehicleApi;
