import { StyledNotFound } from "components/_styled-components";
import { MESSAGES } from "config/dictionaries/general";
import { Link } from "react-router-dom";

const NotFound = (): JSX.Element => (
  <StyledNotFound>
    {MESSAGES.NOT_FOUND} <Link to='/'>{MESSAGES.HOMEPAGE}</Link>
  </StyledNotFound>
);

export default NotFound;
