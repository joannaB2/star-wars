import { useEffect, useState } from "react";

import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

import charactersApi from "../../api/people/people";
import planetsApi from "../../api/planets/planets";
import { QUERY_KEYS } from "../../api/QUERY_KEYS";
import FieldValue from "../../components/FieldValue";

const CharacterDetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [homeworld, setHomeworld] = useState<number | null>(null);
  // const [vehicles, setVehicles] = useState<string[] | null>(null);
  const { data: detailsData, isLoading: detailsLoading } = useQuery([QUERY_KEYS.GET_CHARACTER_DETAILS], async () => await charactersApi.getCharacter(id));
  const { data: planetData, isLoading: planetsLoading } = useQuery([QUERY_KEYS.GET_PLANET_DETAILS, homeworld], async () => await planetsApi.getPlanetDetails(homeworld), {
    enabled: homeworld !== null,
  });

  useEffect(() => {
    if (detailsData != null) {
      setHomeworld(detailsData.homeworld);
      // setVehicles(detailsData.vehicles);
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
          <FieldValue label='Vehiles' value={""} />
        </>
      )}
    </div>
  );
};

export default CharacterDetailPage;
