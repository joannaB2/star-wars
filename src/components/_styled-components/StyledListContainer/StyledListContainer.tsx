import styled from "styled-components";

const StyledListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 1em;

  .buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export default StyledListContainer;
