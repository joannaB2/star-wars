import styled from "styled-components";

import theme from "../../../config/styles/theme";

const StyledButton = styled.button`
  font-family: inherit;
  font-size: 1.25em;
  background-color: inherit;
  color: ${theme.yellow};
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default StyledButton;
