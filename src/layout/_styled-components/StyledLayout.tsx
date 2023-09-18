import styled from "styled-components";

export const StyledLayout = styled.div`
  display: grid;
  grid-template-areas:
    "header header header header header header"
    "menu main main main main main"
    "menu main main main main main"
    "menu main main main main main"
    "menu main main main main main"
    "menu footer footer footer footer footer";
  gap: 10px;
  padding: 10px;
  min-height: 100vh;

  main {
    grid-area: main;
  }
`;
