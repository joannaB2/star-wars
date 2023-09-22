import styled from "styled-components";

import theme from "../../config/styles/theme";

export const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  padding: 1em;
  background-color: ${theme.black};

  h1 {
    font-family: "Star Wars", sans-serif;
    color: ${theme.yellow};
    font-size: 1em;
    margin-left: 1em;
  }
`;
