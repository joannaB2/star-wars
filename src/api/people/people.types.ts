import { type StringUrl, type DateString } from "../../config/types/generalTypes";

export interface CharacterDTO {
  birth_year: string;
  eye_color: string;
  films: StringUrl[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: StringUrl;
  mass: string;
  name: string;
  skin_color: string;
  created: DateString;
  edited: DateString;
  species: StringUrl[];
  starships: StringUrl[];
  url: StringUrl;
  vehicles: StringUrl[];
}

export interface CharacterFE {
  name: string;
  id: number;
  initials: string;
}

export interface CharacterDetailsFE {
  name: string;
  id: number;
  initials: string;
  homeworld: StringUrl;
  vehicles: StringUrl[];
  species: string;
}

export interface CharactersResponseDTO {
  results: CharacterDTO[] | [];
  count: number;
  next: StringUrl | null;
  previous: StringUrl | null;
}

export interface CharactersResponseFE {
  results: CharacterFE[];
  count: number;
  next: StringUrl | null;
  previous: StringUrl | null;
}

/* interface CharactersApi {
  getAllPeople: (endpointPage: string) => Promise<CharactersResponseDTO>;
} */
