const baseUrl = "https://swapi.dev/api/";

export const PEOPLE_URL = {
  GET_ALL: (page: string) => `${baseUrl}/people/?page=${page}`,
};
