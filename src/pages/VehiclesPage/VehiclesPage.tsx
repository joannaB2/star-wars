import { VEHICLES_URL } from "../../api/endpoints";
import { QUERY_KEYS } from "../../api/QUERY_KEYS";
import vehicleApi from "../../api/vehicles/vehicles";
import { type VehicleDetailsFE, type VehiclesResponseFE } from "../../api/vehicles/vehicles.types";
import Loader from "../../components/Loader";
import RecordList from "../../components/RecordList";
import usePagination from "../../hooks/usePagination";
import PATHS from "../../router/PATH";
const getAllPlanetsEndpoint = VEHICLES_URL.GET_ALL("1");

const VehiclesPage = (): JSX.Element => {
  const { data, isLoading, getNextPage, getPreviousPage, hasNextPage, hasPrevPage } = usePagination<VehiclesResponseFE>(
    vehicleApi.getAllVehicles,
    QUERY_KEYS.GET_ALL_VEHICLES,
    getAllPlanetsEndpoint,
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <h2>Vehicles</h2>
      <RecordList<VehicleDetailsFE>
        getNextPage={getNextPage}
        getPreviousPage={getPreviousPage}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        list={{ results: data?.results }}
        loading={isLoading}
        page={PATHS.VEHICLES}
      />
    </>
  );
};

export default VehiclesPage;
