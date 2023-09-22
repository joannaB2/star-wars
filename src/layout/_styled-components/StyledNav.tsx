import styled from "styled-components";

import theme from "../../config/styles/theme";

export const StyledNav = styled.nav`
  border-right: 1px solid ${theme.black};
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
    border-bottom: 1px solid ${theme.black};
  }
`;
