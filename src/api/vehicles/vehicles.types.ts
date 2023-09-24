import { type DateString, type StringUrl } from "config/types/generalTypes";

export interface VehicleDetailsDTO {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: DateString;
  crew: string;
  edited: DateString;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: [];
  films: StringUrl[];
  url: StringUrl;
  vehicle_class: string;
}

export interface VehicleDetailsFE {
  name: string;
  vehicleClass: string;
  pilots: number[];
  picture: string;
  id: number;
}

export interface VehiclesResponseDTO {
  count: string;
  next: StringUrl | null;
  previous: StringUrl | null;
  results: VehicleDetailsDTO[] | [];
}

export interface VehiclesResponseFE {
  count: string;
  next: StringUrl | null;
  previous: StringUrl | null;
  results: VehicleDetailsFE[] | [];
}
