import theme from "config/styles/theme";
import styled, { css } from "styled-components";

interface Props {
  navVisible: boolean;
}

export const StyledLayout = styled.div<Props>`
  display: grid;
  grid-template-areas:
    "header header header header header header"
    "menu main main main main main"
    "menu footer footer footer footer footer";
  min-height: 100vh;
  grid-template-rows: 60px 1fr auto;
  grid-template-columns: 300px auto;
  main {
    grid-area: main;
    padding: 1rem;
  }

  @media ${theme.device.mobileL} {
    grid-template-areas:
      "header"
      "main"
      "footer";
    grid-template-columns: auto;

    main {
      padding: 0.5em;
    }
  }

  ${props =>
    props.navVisible &&
    css`
      @media ${theme.device.mobileL} {
        grid-template-areas:
          "header"
          "menu"
          "main"
          "footer";
      }
    `}
`;
