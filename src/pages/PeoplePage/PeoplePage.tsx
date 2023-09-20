import { Link } from "react-router-dom";

import { PEOPLE_URL } from "../../api/endpoints";
import charactersApi from "../../api/people/people";
import { type CharactersResponseFE } from "../../api/people/people.types";
import { QUERY_KEYS } from "../../api/QUERY_KEYS";
import usePagination from "../../hooks/usePagination";
const getAllPeopleEndpoint = PEOPLE_URL.GET_ALL("1");

const PeoplePage = (): JSX.Element => {
  const { data, isLoading, getNextPage, getPreviousPage } = usePagination<CharactersResponseFE>(charactersApi.getAllPeople, QUERY_KEYS.GET_ALL_PEOPLE, getAllPeopleEndpoint);
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (isLoading) return <>loading...</>;
  return (
    <>
      <div>
        {data?.results?.map(({ name, id, initials }) => (
          <div key={id}>
            <span style={{ color: "red" }}>{initials}</span>
            <Link to={`/people/${id}`}>{name}</Link>
          </div>
        ))}
        <div>
          {data?.previous !== null && <button onClick={getPreviousPage}>prev</button>}
          {data?.next !== null && <button onClick={getNextPage}>next</button>}
        </div>
      </div>
    </>
  );
};

export default PeoplePage;
