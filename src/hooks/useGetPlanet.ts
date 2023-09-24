import planetsApi from "api/planets/planets";
import { type PlanetDetailsFE } from "api/planets/planets.types";
import { QUERY_KEYS } from "api/QUERY_KEYS";
import { useQuery } from "react-query";

interface PlanetProps {
  planetData: PlanetDetailsFE | undefined;
  planetsLoading: boolean;
}

const useGetPlanet = (enabler: boolean, planetId: number | null): PlanetProps => {
  const { data: planetData, isLoading: planetsLoading } = useQuery(
    [QUERY_KEYS.GET_PLANET_DETAILS, enabler],
    async () => await planetsApi.getPlanetDetails(planetId),
    {
      enabled: enabler,
    },
  );

  return {
    planetData,
    planetsLoading,
  };
};

export default useGetPlanet;
