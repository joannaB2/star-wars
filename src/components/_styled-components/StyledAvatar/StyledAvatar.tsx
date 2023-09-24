import theme from "config/styles/theme";
import styled from "styled-components";

interface Props {
  image?: string;
  size?: string;
}

const StyledAvatar = styled.div<Props>`
  width: ${({ size }) => size ?? "100px"};
  height: ${({ size }) => size ?? "100px"};
  font-size: ${({ size }) => (size !== undefined ? "5em" : "1.25em")};
  border-radius: 50%;
  background-image: ${({ image }) => `url("${image}")` ?? "none"};

  ${({ image }) =>
    image !== undefined
      ? `
    background-size: cover;
  `
      : `
  background-color: ${theme.black};
  color: ${theme.yellow};
  font-family: "Star Wars", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.yellow}
  `}
`;

export default StyledAvatar;
