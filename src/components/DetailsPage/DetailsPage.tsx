import { StyledAvatar, StyledDetailsWrapper } from "../_styled-components";

interface DetailsPageProps {
  name: string | undefined;
  children: JSX.Element;
  initials?: string;
  picture?: string;
}

const DetailsPage = ({ initials, picture, name, children }: DetailsPageProps): JSX.Element => {
  return (
    <StyledDetailsWrapper>
      <StyledAvatar image={picture} size='200px'>
        {initials}
      </StyledAvatar>
      <div className='info-section'>
        <h2>{name}</h2>
        {children}
      </div>
    </StyledDetailsWrapper>
  );
};

export default DetailsPage;
