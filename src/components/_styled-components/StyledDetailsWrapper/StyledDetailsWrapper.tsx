import styled from "styled-components";

const StyledDetailsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 200px auto;
  .info-section {
    margin-left: 50px;
  }

  .avatar {
    display: flex;
    align-items: center;
  }

  h1 {
    height: 200px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;

export default StyledDetailsWrapper;
