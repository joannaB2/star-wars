import { useEffect, useState } from "react";

import charactersApi from "api/people/people";
import { type CharacterDetailsFE } from "api/people/people.types";
import planetsApi from "api/planets/planets";
import { QUERY_KEYS } from "api/QUERY_KEYS";
import speciesApi from "api/species/species";
import vehicleApi from "api/vehicles/vehicles";
import planet from "assets/images/planet.jpg";
import { StyledAvatar, StyledListContainer, StyledListItem } from "components/_styled-components";
import DetailsPage from "components/DetailsPage";
import FieldValue from "components/FieldValue";
import Loader from "components/Loader";
import { LABELS } from "config/dictionaries/general";
import useGetInitialData from "hooks/useGetInitialData";
import { useQuery, useQueries } from "react-query";
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

  const { data: speciesData, isLoading: speciesLoading } = useQuery(
    [QUERY_KEYS.GET_SPECIES_DETAILS, species],
    async () => await speciesApi.getSpeciesDetails(species),
    {
      enabled: species !== null,
    },
  );

  const { data: planetData, isLoading: planetsLoading } = useQuery(
    [QUERY_KEYS.GET_PLANET_DETAILS, homeworld],
    async () => await planetsApi.getPlanetDetails(homeworld),
    {
      enabled: homeworld !== null,
    },
  );

  const vehiclesResults = useQueries(
    vehicles?.map(vehicleId => {
      return {
        queryKey: [QUERY_KEYS.GET_VEHICLE_DETAILS, vehicleId],
        queryFn: async () => await vehicleApi.getVehicleDetails(vehicleId),
        enabled: Boolean(vehicleId),
      };
    }) ?? [],
  );

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
          {vehiclesResults.map(({ data }, i) => (
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
