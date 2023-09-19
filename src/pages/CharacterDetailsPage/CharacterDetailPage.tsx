import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import charactersApi from "../../api/people/people";
import { QUERY_KEYS } from "../../api/QUERY_KEYS";
import FieldValue from "../../components/FieldValue";

const CharacterDetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { data: detailsData, isLoading: detailsLoading } = useQuery([QUERY_KEYS.GET_CHARACTER_DETAILS], async () => await charactersApi.getCharacter(id));
  if (detailsLoading) return <>Loading...</>;
  return (
    <div>
      {detailsData != null && (
        <>
          <span>{detailsData.initials}</span>
          <FieldValue label='Name' value={detailsData.name} />
          <FieldValue label='Species' value={detailsData.species} />
          <FieldValue label='Homeworld' value={detailsData.homeworld} />
          <FieldValue label='Vehiles' value={""} />
        </>
      )}
    </div>
  );
};

export default CharacterDetailPage;
