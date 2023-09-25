import { useState, useEffect } from "react";

import planetsApi from "api/planets/planets";
import { type PlanetDetailsFE } from "api/planets/planets.types";
import { QUERY_KEYS } from "api/QUERY_KEYS";
import { StyledAvatar, StyledListContainer, StyledListItem } from "components/_styled-components";
import DetailsPage from "components/DetailsPage";
import FieldValue from "components/FieldValue";
import Loader from "components/Loader";
import { LABELS, MESSAGES } from "config/dictionaries/general";
import useGetCharacter from "hooks/useGetCharacter";
import useGetInitialData from "hooks/useGetInitialData";
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

  const { charactersResults, charactersLoading } = useGetCharacter(residents);

  if (isLoading) return <Loader />;

  return (
    <DetailsPage name={data?.name} picture={data?.picture}>
      <>
        <FieldValue label={LABELS.POPULATION} value={data?.population} />
        <h3>{LABELS.RESIDENTS}</h3>
        <StyledListContainer>
          {charactersLoading ? (
            <Loader />
          ) : charactersResults?.length ? (
            charactersResults.map(({ data }, i) => (
              <StyledListItem key={i} to={{ pathname: `/people/${data?.id}`, state: { initialData: data } }}>
                <StyledAvatar>{data?.initials}</StyledAvatar>
                <span>{data?.name}</span>
              </StyledListItem>
            ))
          ) : (
            <>{MESSAGES.NO_DATA}</>
          )}
        </StyledListContainer>
      </>
    </DetailsPage>
  );
};

export default PlanetsDetailsPage;
