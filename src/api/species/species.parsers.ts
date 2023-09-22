import { type SpeciesDetailsDTO, type SpeciesDetailsFE } from "./species.types";

export const parseSpeciesDetails = (raw: SpeciesDetailsDTO): SpeciesDetailsFE => ({ name: raw.name });
