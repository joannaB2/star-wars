import { useEffect, useState } from "react";

import { useQuery, useQueries } from "react-query";
import { Link, useParams, useLocation } from "react-router-dom";

import charactersApi from "../../api/people/people";
import { type CharacterDetailsFE } from "../../api/people/people.types";
import planetsApi from "../../api/planets/planets";
import { QUERY_KEYS } from "../../api/QUERY_KEYS";
import vehicleApi from "../../api/vehicles/vehicles";
import FieldValue from "../../components/FieldValue";
import useGetInitialData from "../../hooks/useGetInitialData";

const CharacterDetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [homeworld, setHomeworld] = useState<number | null>(null);
  const [vehicles, setVehicles] = useState<number[] | null>(null);
  const location = useLocation<{ initialData: CharacterDetailsFE }>();
  const { data: detailsData, isLoading: detailsLoading } = useGetInitialData<CharacterDetailsFE>(
    id,
    charactersApi.getCharacter,
    QUERY_KEYS.GET_CHARACTER_DETAILS,
    location.state?.initialData,
  );

  const { data: planetData, isLoading: planetsLoading } = useQuery([QUERY_KEYS.GET_PLANET_DETAILS, homeworld], async () => await planetsApi.getPlanetDetails(homeworld), {
    enabled: homeworld !== null,
  });

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
    }
  }, [detailsData]);

  if (detailsLoading) return <>Loading...</>;
  return (
    <div>
      {detailsData != null && (
        <>
          <span>{detailsData.initials}</span>
          <FieldValue label='Name' value={detailsData.name} />
          <FieldValue label='Species' value={detailsData.species} />
          {planetsLoading ? (
            <>Planets are loading</>
          ) : (
            <FieldValue label='Homeworld' value={<Link to={{ pathname: `/planets/${homeworld}`, state: { initialData: planetData } }}>{planetData?.name}</Link>} />
          )}
        </>
      )}
      {vehiclesResults.map(result => result.data?.name)}
    </div>
  );
};

export default CharacterDetailPage;
