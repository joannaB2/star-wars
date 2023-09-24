import theme from "config/styles/theme";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  grid-area: footer;
  border-top: 1px solid ${theme.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.yellow};
  padding: 1em 0;
`;
