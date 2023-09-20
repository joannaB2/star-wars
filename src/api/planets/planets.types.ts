import { type StringUrl, type DateString } from "../../config/types/generalTypes";

export interface PlanetDetailsDTO {
  climate: string;
  created: DateString;
  diameter: string;
  edited: DateString;
  films: StringUrl[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: StringUrl[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: StringUrl;
}

export interface PlanetDetailsFE {
  name: string;
  population: string;
  residents: number[];
}

export interface PlanetFE {
  name: string;
  id: number;
  picture: string;
}

export interface PlanetListResponseDTO {
  results: PlanetDetailsDTO[] | [];
  count: number;
  next: StringUrl | null;
  previous: StringUrl | null;
}

export interface PlanetListResponseFE {
  results: PlanetFE[] | [];
  count: number;
  next: StringUrl | null;
  previous: StringUrl | null;
}
