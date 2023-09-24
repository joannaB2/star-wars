import planetImage from "assets/images/planet.jpg";
import { type StringUrl } from "config/types/generalTypes";
import { extractIdFromUlr } from "helpers/extractIdFromUrl";

import { type PlanetListResponseDTO, type PlanetListResponseFE, type PlanetDetailsDTO, type PlanetDetailsFE } from "./planets.types";

export const parsePlanetDetails = (raw: PlanetDetailsDTO): PlanetDetailsFE => ({
  name: raw.name,
  id: extractIdFromUlr(raw.url),
  picture: planetImage,
  population: raw.population,
  residents: raw.residents.map((residentUrl: StringUrl) => extractIdFromUlr(residentUrl)),
});

export const parsePlanetsForGeneralList = (raw: PlanetListResponseDTO): PlanetListResponseFE => ({
  count: raw.count,
  next: raw.next,
  previous: raw.previous,
  results: raw.results.map(planet => parsePlanetDetails(planet)),
});
