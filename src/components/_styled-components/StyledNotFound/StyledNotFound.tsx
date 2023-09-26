import theme from "config/styles/theme";
import styled from "styled-components";

const StyledNotFound = styled.div`
  color: ${theme.yellow};
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  a {
    color: inherit;
    margin-left: 1rem;
    border: 1px solid ${theme.yellow};
    padding: 1rem;
    border-radius: 1rem;
  }
`;

export default StyledNotFound;
