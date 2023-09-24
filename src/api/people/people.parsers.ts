import { extractIdFromUlr } from "helpers/extractIdFromUrl";
import { getInitials } from "helpers/getInitials";

import type { CharacterDTO, CharacterDetailsFE, CharactersResponseDTO, CharactersResponseFE } from "./people.types";

export const parsePeopleForGeneralList = (raw: CharactersResponseDTO): CharactersResponseFE => {
  const sorterdData = raw.results.sort((a, b) => a.name.localeCompare(b.name));
  return {
    count: raw.count,
    next: raw.next,
    previous: raw.previous,
    results: sorterdData.map(result => parseCharacterDetails(result)),
  };
};

export const parseCharacterDetails = (raw: CharacterDTO): CharacterDetailsFE => ({
  name: raw.name,
  id: extractIdFromUlr(raw.url),
  initials: getInitials(raw.name),
  homeworld: extractIdFromUlr(raw.homeworld),
  species: raw.species.length > 0 ? extractIdFromUlr(raw.species[0]) : null,
  vehicles: raw.vehicles.map(vehicle => extractIdFromUlr(vehicle)),
});
