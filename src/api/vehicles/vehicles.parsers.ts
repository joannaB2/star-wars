import { extractIdFromUlr } from "../../helpers/extractIdFromUrl";

import { type VehicleDetailsDTO, type VehicleDetailsFE, type VehiclesResponseFE, type VehiclesResponseDTO } from "./vehicles.types";

export const parseVehicleDetails = (raw: VehicleDetailsDTO): VehicleDetailsFE => ({
  name: raw.name,
  picture: "assets/images/planet.jpg",
  id: extractIdFromUlr(raw.url),
  vehicleClass: raw.vehicle_class,
  pilots: raw.pilots.map(pilot => extractIdFromUlr(pilot)),
});

export const parseVehiclesForGeneralList = (raw: VehiclesResponseDTO): VehiclesResponseFE => ({
  count: raw.count,
  next: raw.next,
  previous: raw.previous,
  results: raw.results.map(vehicle => parseVehicleDetails(vehicle)),
});
