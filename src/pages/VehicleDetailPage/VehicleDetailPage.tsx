import { useState, useEffect } from "react";

import { useQueries } from "react-query";
import { useParams, useLocation } from "react-router-dom";

import charactersApi from "../../api/people/people";
import { QUERY_KEYS } from "../../api/QUERY_KEYS";
import vehicleApi from "../../api/vehicles/vehicles";
import { type VehicleDetailsFE } from "../../api/vehicles/vehicles.types";
import useGetInitialData from "../../hooks/useGetInitialData";

const VehicleDetailsPage = (): JSX.Element => {
  const [pilots, setPilots] = useState<number[] | null>(null);
  const { id } = useParams<{ id: string }>();
  const location = useLocation<{ initialData: VehicleDetailsFE }>();

  const { data, isLoading } = useGetInitialData<VehicleDetailsFE>(id, vehicleApi.getVehicleDetails, QUERY_KEYS.GET_VEHICLE_DETAILS, location.state?.initialData);

  useEffect(() => {
    if (data != null) {
      setPilots(data.pilots);
    }
  }, [data]);

  const pilotsResults = useQueries(
    pilots?.map(pilotId => {
      return {
        queryKey: [QUERY_KEYS.GET_CHARACTER_DETAILS, pilotId],
        queryFn: async () => await charactersApi.getCharacter(pilotId),
        enabled: Boolean(pilotId),
      };
    }) ?? [],
  );

  if (isLoading) return <>lodaind</>;

  return (
    <>
      {data?.name ?? data?.name}
      {pilotsResults?.map(pilot => pilot.data?.name)}
    </>
  );
};

export default VehicleDetailsPage;
