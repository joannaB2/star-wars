const baseUrl = "https://swapi.dev/api/";

export const PEOPLE_URL = {
  GET_ALL: (page: string) => `${baseUrl}/people/?page=${page}`,
  GET_CHARACTER: (id: string) => `${baseUrl}/people/${id}`,
};

export const PLANETS_URL = {
  GET_ALL: (page: string) => `${baseUrl}/planets/?page=${page}`,
  GET_PLANET: (id: string) => `${baseUrl}/planets/${id}`,
};
