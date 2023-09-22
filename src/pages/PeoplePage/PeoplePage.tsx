import { PEOPLE_URL } from "../../api/endpoints";
import charactersApi from "../../api/people/people";
import { type CharacterDetailsFE, type CharactersResponseFE } from "../../api/people/people.types";
import { QUERY_KEYS } from "../../api/QUERY_KEYS";
import RecordList from "../../components/RecordList";
import usePagination from "../../hooks/usePagination";
import PATHS from "../../router/PATH";
const getAllPeopleEndpoint = PEOPLE_URL.GET_ALL("1");

const PeoplePage = (): JSX.Element => {
  const { data, isLoading, getNextPage, getPreviousPage } = usePagination<CharactersResponseFE>(charactersApi.getAllPeople, QUERY_KEYS.GET_ALL_PEOPLE, getAllPeopleEndpoint);
  if (isLoading) return <>loading...</>;
  return (
    <>
      <h2>Characters</h2>
      <RecordList<CharacterDetailsFE> getNextPage={getNextPage} getPreviousPage={getPreviousPage} list={{ results: data?.results }} loading={isLoading} page={PATHS.PEOPLE} />
    </>
  );
};

export default PeoplePage;
