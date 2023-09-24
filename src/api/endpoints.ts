const baseUrl = "https://swapi.dev/api/";

export const PEOPLE_URL = {
  GET_ALL: (page: string) => `${baseUrl}/people/?page=${page}`,
  GET_CHARACTER: (id: number) => `${baseUrl}/people/${id}`,
};

export const PLANETS_URL = {
  GET_ALL: (page: string) => `${baseUrl}/planets/?page=${page}`,
  GET_PLANET: (id: number) => `${baseUrl}/planets/${id}`,
};

export const VEHICLES_URL = {
  GET_ALL: (page: string) => `${baseUrl}/vehicles/?page=${page}`,
  GET_VEHICLE: (id: number) => `${baseUrl}/vehicles/${id}`,
};

export const SPECIES_URL = {
  GET_SPECIES: (id: number) => `${baseUrl}/species/${id}`,
};
