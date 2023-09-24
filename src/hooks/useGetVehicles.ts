import { QUERY_KEYS } from "api/QUERY_KEYS";
import vehicleApi from "api/vehicles/vehicles";
import { type VehicleDetailsFE } from "api/vehicles/vehicles.types";
import { useQueries, type UseQueryResult } from "react-query";

interface VehicleProps {
  vehiclesResults: Array<UseQueryResult<VehicleDetailsFE | undefined, unknown>> | undefined;
}

const useGetVehicles = (vehiclesIds: number[] | null): VehicleProps => {
  const vehiclesResults = useQueries(
    vehiclesIds?.map(vehicleId => {
      return {
        queryKey: [QUERY_KEYS.GET_VEHICLE_DETAILS, vehicleId],
        queryFn: async () => await vehicleApi.getVehicleDetails(vehicleId),
        enabled: Boolean(vehicleId),
      };
    }) ?? [],
  );

  return {
    vehiclesResults,
  };
};

export default useGetVehicles;
