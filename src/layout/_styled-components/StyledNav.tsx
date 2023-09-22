import styled from "styled-components";

import theme from "../../config/styles/theme";

export const StyledNav = styled.nav`
  border-right: 1px solid ${theme.primary};
  display: flex;
  flex-direction: column;
  grid-area: menu;

  a {
    color: ${theme.yellow};
    display: grid;
    align-items: center;
    grid-template-columns: 30px auto;
    grid-gap: 1em;
    padding: 1em;
    font-size: 1.2em;
    border-bottom: 1px solid ${theme.primary};
  }

  .activePath {
    background-color: ${theme.yellow};
    color: ${theme.black};
  }

  .activePath svg {
    fill: ${theme.black};
  }
`;
