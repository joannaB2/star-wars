import styled from "styled-components";

export const StyledLayout = styled.div`
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
`;
