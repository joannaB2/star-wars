import { useState, useEffect } from "react";

import charactersApi from "api/people/people";
import planetsApi from "api/planets/planets";
import { type PlanetDetailsFE } from "api/planets/planets.types";
import { QUERY_KEYS } from "api/QUERY_KEYS";
import { StyledAvatar, StyledListContainer, StyledListItem } from "components/_styled-components";
import DetailsPage from "components/DetailsPage";
import FieldValue from "components/FieldValue";
import Loader from "components/Loader";
import { LABELS } from "config/dictionaries/general";
import useGetInitialData from "hooks/useGetInitialData";
import { useQueries } from "react-query";
import { useLocation, useParams } from "react-router-dom";

const PlanetsDetailsPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [residents, setResidents] = useState<number[] | null>(null);
  const location = useLocation<{ initialData: PlanetDetailsFE }>();

  const { data, isLoading } = useGetInitialData<PlanetDetailsFE>(
    id,
    planetsApi.getPlanetDetails,
    QUERY_KEYS.GET_PLANET_DETAILS,
    location.state?.initialData,
  );

  useEffect(() => {
    if (data != null) {
      setResidents(data.residents);
    }
  }, [data]);

  const residentsResults = useQueries(
    residents?.map(residentId => {
      return {
        queryKey: [QUERY_KEYS.GET_VEHICLE_DETAILS, residentId],
        queryFn: async () => await charactersApi.getCharacter(residentId),
        enabled: Boolean(residentId),
      };
    }) ?? [],
  );

  if (isLoading) return <Loader />;

  return (
    <DetailsPage name={data?.name} picture={data?.picture}>
      <>
        <FieldValue label={LABELS.POPULATION} value={data?.population} />
        <h3>{LABELS.RESIDENTS}</h3>
        <StyledListContainer>
          {residentsResults.map(({ data }, i) => (
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

export default PlanetsDetailsPage;
