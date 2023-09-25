import theme from "config/styles/theme";
import styled from "styled-components";

const StyledListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 1em;
  margin-bottom: 1em;
  color: ${theme.yellow};

  .buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export default StyledListContainer;
