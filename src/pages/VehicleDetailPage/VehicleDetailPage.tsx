import { useState, useEffect } from "react";

import charactersApi from "api/people/people";
import { QUERY_KEYS } from "api/QUERY_KEYS";
import vehicleApi from "api/vehicles/vehicles";
import { type VehicleDetailsFE } from "api/vehicles/vehicles.types";
import { StyledListContainer, StyledListItem, StyledAvatar } from "components/_styled-components";
import DetailsPage from "components/DetailsPage";
import FieldValue from "components/FieldValue";
import Loader from "components/Loader";
import { LABELS } from "config/dictionaries/general";
import useGetInitialData from "hooks/useGetInitialData";
import { useQueries } from "react-query";
import { useParams, useLocation } from "react-router-dom";

const VehicleDetailsPage = (): JSX.Element => {
  const [pilots, setPilots] = useState<number[] | null>(null);
  const { id } = useParams<{ id: string }>();
  const location = useLocation<{ initialData: VehicleDetailsFE }>();

  const { data, isLoading } = useGetInitialData<VehicleDetailsFE>(
    id,
    vehicleApi.getVehicleDetails,
    QUERY_KEYS.GET_VEHICLE_DETAILS,
    location.state?.initialData,
  );

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

  if (isLoading) return <Loader />;

  return (
    <DetailsPage name={data?.name} picture={data?.picture}>
      <>
        <FieldValue label={LABELS.TYPE} value={data?.vehicleClass} />
        <h3>{LABELS.PILOTS}</h3>
        <StyledListContainer>
          {pilotsResults.map(({ data }, i) => (
            <StyledListItem key={i} to={{ pathname: `/people/${data?.id}`, state: { initialData: data } }}>
              <StyledAvatar>{data?.initials}</StyledAvatar>
              <span>{data?.name}</span>
            </StyledListItem>
          ))}
        </StyledListContainer>
      </>
    </DetailsPage>
  );
};

export default VehicleDetailsPage;
