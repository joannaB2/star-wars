import { ArrowLeft, ArrowRight } from "assets/icons";
import { StyledAvatar, StyledButton, StyledListContainer, StyledListItem, StyledPaginationActions } from "components/_styled-components";
import theme from "config/styles/theme";

interface BasicListItem {
  name: string;
  id: number;
  picture?: string;
  initials?: string;
}

interface RecordListProps<T> {
  list: {
    results: T[] | undefined;
  };
  getNextPage: () => void;
  getPreviousPage: () => void;
  page: string;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

function RecordList<T extends BasicListItem>({
  list,
  getNextPage,
  getPreviousPage,
  page,
  hasNextPage,
  hasPrevPage,
}: RecordListProps<T>): JSX.Element {
  if (!list.results?.length) return <div style={{ color: theme.yellow }}>No data</div>;

  return (
    <>
      <StyledListContainer>
        {list?.results?.map((item: T) => (
          <StyledListItem key={item.id} to={{ pathname: `${page}/${item.id}`, state: { initialData: item } }}>
            <StyledAvatar image={item.picture}>{item.picture != null || item.initials}</StyledAvatar>
            <span>{item.name}</span>
          </StyledListItem>
        ))}
      </StyledListContainer>
      <StyledPaginationActions>
        <StyledButton disabled={!hasPrevPage} onClick={getPreviousPage}>
          <ArrowLeft /> previous
        </StyledButton>
        <StyledButton disabled={!hasNextPage} onClick={getNextPage}>
          <span>next</span>
          <ArrowRight />
        </StyledButton>
      </StyledPaginationActions>
    </>
  );
}

export default RecordList;
