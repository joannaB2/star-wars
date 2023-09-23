import theme from "config/styles/theme";
import styled from "styled-components";

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

  @media ${theme.device.mobileL} {
    grid-template-columns: 1fr;
    padding: 0;
    justify-items: center;

    .info-section {
      margin-left: 0;
      margin-top: 1em;
    }
  }
`;

export default StyledDetailsWrapper;
