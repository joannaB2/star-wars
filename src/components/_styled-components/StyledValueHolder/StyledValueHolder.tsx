import theme from "config/styles/theme";
import styled from "styled-components";

const StyledValueHolder = styled.div`
  color: ${theme.yellow};
  font-size: 1.25em;
  margin-bottom: 1em;
  .label {
    font-weight: 500;
    margin-right: 2em;
  }
`;

export default StyledValueHolder;
