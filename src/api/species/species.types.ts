import { type DateString, type StringUrl } from "config/types/generalTypes";

export interface SpeciesDetailsDTO {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: DateString;
  designation: string;
  edited: DateString;
  eye_colors: string;
  hair_colors: string;
  homeworld: StringUrl;
  language: string;
  name: string;
  people: StringUrl[];
  films: StringUrl[];
  skin_colors: string;
  url: StringUrl;
}

export interface SpeciesDetailsFE {
  name: string;
}
