import { Link } from "react-router-dom";
import styled from "styled-components";

import theme from "../../../config/styles/theme";

const StyledListItem = styled(Link)`
  padding: 1em;
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  text-decoration: none;
  border-radius: 1em;
  color: ${theme.yellow};
  background-color: ${theme.primary};
  max-width: 350px;

  span {
    font-size: 1.25em;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export default StyledListItem;
