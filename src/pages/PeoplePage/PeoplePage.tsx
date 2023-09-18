import { useQuery } from "react-query";
import { QUERY_KEYS } from "../../api/QUERY_KEYS";
import charactersApi from "../../api/people/people";
import { useState } from "react";
import { PEOPLE_URL } from "../../api/endpoints";
const getAllPeopleEndpoint = PEOPLE_URL.GET_ALL("1");

const PeoplePage = (): JSX.Element => {
  const [pageUrl, setPageUrl] = useState<string | null>(getAllPeopleEndpoint);
  const { data: peopleData, isLoading: peopleLoading } = useQuery([QUERY_KEYS.GET_ALL_PEOPLE, pageUrl], async () => await charactersApi.getAllPeople(pageUrl));

  if (peopleLoading) return <>Loading....</>;

  const getNextPage = (): void => {
    const nextPage = peopleData?.next;
    if (nextPage != null) setPageUrl(nextPage);
  };

  const getPreviousPage = (): void => {
    const previousPage = peopleData?.previous;
    if (previousPage != null) setPageUrl(previousPage);
  };

  return (
    <>
      <div>
        {peopleData?.results?.map(({ name, id, initials }) => (
          <div key={id}>
            <span style={{ color: "red" }}>{initials}</span>
            {name}
          </div>
        ))}
        <div>
          {peopleData?.previous !== null && <button onClick={getPreviousPage}>prev</button>}
          {peopleData?.next !== null && <button onClick={getNextPage}>next</button>}
        </div>
      </div>
    </>
  );
};

export default PeoplePage;
