import { StyledAvatar, StyledListContainer, StyledListItem } from "components/_styled-components";
import Loader from "components/Loader";

interface SectionProps<T> {
  sectionName: string;
  path: string;
  data: T[] | undefined;
  loading: boolean;
}

interface LinkProps {
  id: number;
  name: string;
  picture?: string;
  initials?: string;
}

function SectionWithLinks<T extends LinkProps>({ sectionName, path, data, loading }: SectionProps<T>): JSX.Element {
  return (
    <>
      <h3>{sectionName}</h3>
      {loading ? (
        <Loader />
      ) : (
        <StyledListContainer>
          {data?.map((result: T) => (
            <StyledListItem key={result.id} to={{ pathname: `${path}/${result.id}`, state: { initialData: result } }}>
              <StyledAvatar image={result.picture} />
              <span>{result.name}</span>
            </StyledListItem>
          ))}
        </StyledListContainer>
      )}
    </>
  );
}

export default SectionWithLinks;
