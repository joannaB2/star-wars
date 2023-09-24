import { useEffect, useState } from "react";

import charactersApi from "api/people/people";
import { type CharacterDetailsFE } from "api/people/people.types";
import { QUERY_KEYS } from "api/QUERY_KEYS";
import planet from "assets/images/planet.jpg";
import { StyledAvatar, StyledListContainer, StyledListItem } from "components/_styled-components";
import DetailsPage from "components/DetailsPage";
import FieldValue from "components/FieldValue";
import Loader from "components/Loader";
import { LABELS } from "config/dictionaries/general";
import useGetInitialData from "hooks/useGetInitialData";
import useGetPlanet from "hooks/useGetPlanet";
import useGetSpecies from "hooks/useGetSpecies";
import useGetVehicles from "hooks/useGetVehicles";
import { useParams, useLocation } from "react-router-dom";

const CharacterDetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [homeworld, setHomeworld] = useState<number | null>(null);
  const [vehicles, setVehicles] = useState<number[] | null>(null);
  const [species, setSpecies] = useState<number | null>(null);
  const location = useLocation<{ initialData: CharacterDetailsFE }>();
  const { data: detailsData, isLoading: detailsLoading } = useGetInitialData<CharacterDetailsFE>(
    id,
    charactersApi.getCharacter,
    QUERY_KEYS.GET_CHARACTER_DETAILS,
    location.state?.initialData,
  );
  const { speciesData, speciesLoading } = useGetSpecies(species !== null, species);
  const { planetData, planetsLoading } = useGetPlanet(homeworld !== null, homeworld);
  const { vehiclesResults } = useGetVehicles(vehicles);

  useEffect(() => {
    if (detailsData != null) {
      setHomeworld(detailsData.homeworld);
      setVehicles(detailsData.vehicles);
      setSpecies(detailsData.species);
    }
  }, [detailsData]);

  if (detailsLoading) return <Loader />;

  return (
    <DetailsPage initials={detailsData?.initials} name={detailsData?.name}>
      <>
        <FieldValue label={LABELS.SPECIES} value={speciesLoading ? <Loader /> : speciesData?.name} />
        <h3>{LABELS.HOMELAND}</h3>
        {planetsLoading ? (
          <Loader />
        ) : (
          <StyledListContainer>
            <StyledListItem key={planetData?.id} to={{ pathname: `/planets/${homeworld}`, state: { initialData: planetData } }}>
              <StyledAvatar image={planet} />
              <span>{planetData?.name}</span>
            </StyledListItem>
          </StyledListContainer>
        )}
        <h3>{LABELS.VEHICLES}</h3>
        <StyledListContainer>
          {vehiclesResults?.map(({ data }, i) => (
            <StyledListItem key={i} to={{ pathname: `/vehicles/${data?.id}`, state: { initialData: data } }}>
              <StyledAvatar image={data?.picture} />
              <span>{data?.name}</span>
            </StyledListItem>
          ))}
        </StyledListContainer>
      </>
    </DetailsPage>
  );
};

export default CharacterDetailPage;
