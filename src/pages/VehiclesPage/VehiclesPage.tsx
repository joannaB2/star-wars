import { Link } from "react-router-dom";

import { VEHICLES_URL } from "../../api/endpoints";
import { QUERY_KEYS } from "../../api/QUERY_KEYS";
import vehicleApi from "../../api/vehicles/vehicles";
import { type VehiclesResponseFE } from "../../api/vehicles/vehicles.types";
import usePagination from "../../hooks/usePagination";
const getAllPlanetsEndpoint = VEHICLES_URL.GET_ALL("1");

const VehiclesPage = (): JSX.Element => {
  const { data, isLoading, getNextPage, getPreviousPage } = usePagination<VehiclesResponseFE>(vehicleApi.getAllVehicles, QUERY_KEYS.GET_ALL_VEHICLES, getAllPlanetsEndpoint);

  if (isLoading) return <>Loading</>;

  return (
    <>
      <div>
        {data?.results.map(({ name, id, picture }) => (
          <div key={id}>
            <span style={{ color: "red" }}>{picture}</span>
            <Link to={`/vehicles/${id}`}>{name}</Link>
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

export default VehiclesPage;
