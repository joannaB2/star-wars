import styled from "styled-components";

import theme from "../../../config/styles/theme";
const StyledDetailsWrapper = styled.div`
  width: 100%;
  display: grid;
  padding: 2em;
  grid-template-columns: 200px auto;
  .info-section {
    margin-left: 50px;
  }

  .avatar {
    display: flex;
    align-items: center;
  }
  h3 {
    color: ${theme.yellow};
    margin-bottom: 1em;
    font-weight: 500;
  }
`;

export default StyledDetailsWrapper;
