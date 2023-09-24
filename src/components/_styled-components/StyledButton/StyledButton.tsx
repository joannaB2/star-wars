import theme from "config/styles/theme";
import styled from "styled-components";

interface Props {
  disabled: boolean;
}

const StyledButton = styled.button<Props>`
  font-family: inherit;
  font-size: 1.45em;
  background-color: inherit;
  color: ${({ disabled }) => (disabled ? theme.primary : theme.yellow)};
  border: none;
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  svg {
    fill: ${({ disabled }) => disabled && theme.primary};
  }
`;

export default StyledButton;
