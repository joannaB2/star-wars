import { useEffect, useState } from "react";

import { useQuery } from "react-query";
import { useParams, useLocation } from "react-router-dom";

import planetsApi from "../../api/planets/planets";
import { type PlanetDetailsFE } from "../../api/planets/planets.types";
import { QUERY_KEYS } from "../../api/QUERY_KEYS";

const PlanetsDetailsPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initialData, setInitialData] = useState<null | PlanetDetailsFE>(null);
  const [hasIntialData, setHasInitialData] = useState(true);
  const location = useLocation<{ initialData: PlanetDetailsFE }>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: planetData, isLoading: planetsLoading } = useQuery([QUERY_KEYS.GET_PLANET_DETAILS, hasIntialData], async () => await planetsApi.getPlanetDetails(+id), {
    enabled: !hasIntialData,
  });

  useEffect(() => {
    if (location.state !== undefined) {
      setInitialData(location.state.initialData);
      return;
    }
    setHasInitialData(false);
  }, [location.state]);

  return <>{initialData?.name ?? planetData?.population}</>;
};

export default PlanetsDetailsPage;
