import theme from "config/styles/theme";
import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  padding: 1em;
  background-color: ${theme.black};
  border-bottom: 1px solid ${theme.yellow};
  max-height: 68px;

  h1 {
    font-family: "Star Wars", sans-serif;
    color: ${theme.yellow};
    font-size: 1em;
    margin-left: 1em;
  }

  @media ${theme.device.mobileL} {
    display: flex;
    justify-content: space-between;
    
    h1 {
      text-align: center;
    }
`;
