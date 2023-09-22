/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyledAvatar, StyledDetailsWrapper, StyledListContainer } from "../_styled-components";
import FieldValue from "../FieldValue";

interface BasicSection {
  name: string;
  content?: string | undefined;
  links?: JSX.Element[];
}

interface DetailsPageProps {
  sections?: BasicSection[];
  name: string | undefined;
  children: JSX.Element;
  initials?: string;
  picture?: string;
}

const DetailsPage = ({ initials, picture, sections, name, children }: DetailsPageProps): JSX.Element => {
  return (
    <StyledDetailsWrapper>
      <StyledAvatar image={picture} size='200px'>
        {initials}
      </StyledAvatar>
      <div className='info-section'>
        <h2>{name}</h2>
        {/* sections.map(({ name, content, links }) => (
          <FieldValue key={content} label={name} value={content} />
        )) */}
        {children}
      </div>
    </StyledDetailsWrapper>
  );
};

export default DetailsPage;
