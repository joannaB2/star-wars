import { PLANETS_URL } from "api/endpoints";
import planetsApi from "api/planets/planets";
import { type PlanetListResponseFE, type PlanetDetailsFE } from "api/planets/planets.types";
import { QUERY_KEYS } from "api/QUERY_KEYS";
import Loader from "components/Loader";
import RecordList from "components/RecordList";
import { HEADERS } from "config/dictionaries/general";
import usePagination from "hooks/usePagination";
import PATHS from "router/PATH";
const getAllPlanetsEndpoint = PLANETS_URL.GET_ALL("1");

const PlanetsPage = (): JSX.Element => {
  const { data, isLoading, getNextPage, getPreviousPage, hasNextPage, hasPrevPage } = usePagination<PlanetListResponseFE>(
    planetsApi.getAllPlanets,
    QUERY_KEYS.GET_ALL_PLANETS,
    getAllPlanetsEndpoint,
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <h2>{HEADERS.PLANETS}</h2>
      <RecordList<PlanetDetailsFE>
        getNextPage={getNextPage}
        getPreviousPage={getPreviousPage}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        list={{ results: data?.results }}
        page={PATHS.PLANETS}
      />
    </>
  );
};

export default PlanetsPage;
