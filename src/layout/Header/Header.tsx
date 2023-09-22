import { Logo } from "../../assets/icons";
import { StyledHeader } from "../_styled-components/StyledHeader";

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <Logo />
      <h1>Try not. Do or do not. There is no try</h1>
    </StyledHeader>
  );
};

export default Header;
