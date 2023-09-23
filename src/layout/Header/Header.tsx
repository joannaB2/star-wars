import { Logo, MobileMenu } from "assets/icons";
import theme from "config/styles/theme";
import { useWindowContext } from "context/useWindowContext";
import { StyledHeader } from "layout/_styled-components/StyledHeader";

interface HeaderProps {
  navVisible: boolean;
  setNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ navVisible, setNavVisible }: HeaderProps): JSX.Element => {
  const { isSmallScreen } = useWindowContext();
  return (
    <StyledHeader>
      <Logo />
      <h1>Star Wars World</h1>
      {isSmallScreen && (
        <button
          onClick={(): void => {
            setNavVisible(!navVisible);
          }}
          style={{ border: "none", backgroundColor: theme.black }}
        >
          <MobileMenu />
        </button>
      )}
    </StyledHeader>
  );
};

export default Header;
