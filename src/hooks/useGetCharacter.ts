import charactersApi from "api/people/people";
import { type CharacterDetailsFE } from "api/people/people.types";
import { QUERY_KEYS } from "api/QUERY_KEYS";
import { useQueries, type UseQueryResult } from "react-query";

interface CharacterProps {
  charactersResults: Array<UseQueryResult<CharacterDetailsFE | undefined, unknown>> | undefined;
}

const useGetCharacter = (charactersIds: number[] | null): CharacterProps => {
  const charactersResults = useQueries(
    charactersIds?.map(characterId => {
      return {
        queryKey: [QUERY_KEYS.GET_CHARACTER_DETAILS, characterId],
        queryFn: async () => await charactersApi.getCharacter(characterId),
        enabled: Boolean(characterId),
      };
    }) ?? [],
  );

  return {
    charactersResults,
  };
};

export default useGetCharacter;
