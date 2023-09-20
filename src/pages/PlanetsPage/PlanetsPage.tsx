import { Link } from "react-router-dom";

import { PLANETS_URL } from "../../api/endpoints";
import planetsApi from "../../api/planets/planets";
import { type PlanetListResponseFE } from "../../api/planets/planets.types";
import { QUERY_KEYS } from "../../api/QUERY_KEYS";
import usePagination from "../../hooks/usePagination";
const getAllPlanetsEndpoint = PLANETS_URL.GET_ALL("1");

const PlanetsPage = (): JSX.Element => {
  const { data, isLoading, getNextPage, getPreviousPage } = usePagination<PlanetListResponseFE>(planetsApi.getAllPlanets, QUERY_KEYS.GET_ALL_PLANETS, getAllPlanetsEndpoint);

  if (isLoading) return <>Loading</>;

  return (
    <>
      <div>
        {data?.results.map(({ name, id, picture }) => (
          <div key={id}>
            <span style={{ color: "red" }}>{picture}</span>
            <Link to={`/planets/${id}`}>{name}</Link>
          </div>
        ))}
        <div>
          {data?.previous !== null && <button onClick={getPreviousPage}>prev</button>}
          {data?.next !== null && <button onClick={getNextPage}>next</button>}
        </div>
      </div>
    </>
  );
};

export default PlanetsPage;
