import { type StringUrl } from "../../config/types/generalTypes";
import { extractIdFromUlr } from "../../helpers/extractIdFromUrl";

import { type PlanetDetailsDTO, type PlanetDetailsFE } from "./planets.types";

export const parsePlanetDetails = (raw: PlanetDetailsDTO): PlanetDetailsFE => ({
  name: raw.name,
  population: raw.population,
  residents: raw.residents.map((residentUrl: StringUrl) => extractIdFromUlr(residentUrl)),
});
