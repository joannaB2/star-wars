import { QUERY_KEYS } from "api/QUERY_KEYS";
import speciesApi from "api/species/species";
import { type SpeciesDetailsFE } from "api/species/species.types";
import { useQuery } from "react-query";

interface SpeciesProps {
  speciesData: SpeciesDetailsFE | undefined;
  speciesLoading: boolean;
}

const useGetSpecies = (enabler: boolean, speciesId: number | null): SpeciesProps => {
  const { data: speciesData, isLoading: speciesLoading } = useQuery(
    [QUERY_KEYS.GET_SPECIES_DETAILS, speciesId],
    async () => await speciesApi.getSpeciesDetails(speciesId),
    {
      enabled: enabler,
    },
  );

  return {
    speciesData,
    speciesLoading,
  };
};

export default useGetSpecies;
