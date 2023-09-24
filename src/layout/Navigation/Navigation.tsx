import { People, Planet, Vehicle } from "assets/icons";
import { HEADERS } from "config/dictionaries/general";
import { StyledNav } from "layout/_styled-components/StyledNav";
import { NavLink } from "react-router-dom";
import PATHS from "router/PATH";

interface NavigationProps {
  navVisible: boolean;
}

const Navigation = ({ navVisible }: NavigationProps): JSX.Element => {
  return (
    <StyledNav navVisible={navVisible}>
      {/* TODO pickup active class when on root directory */}
      <NavLink activeClassName='activePath' exact to={PATHS.PEOPLE}>
        <People /> {HEADERS.PEOPLE}
      </NavLink>
      <NavLink activeClassName='activePath' exact to={PATHS.PLANETS}>
        <Planet /> {HEADERS.PLANETS}
      </NavLink>
      <NavLink activeClassName='activePath' exact to={PATHS.VEHICLES}>
        <Vehicle /> {HEADERS.VEHICLES}
      </NavLink>
    </StyledNav>
  );
};

export default Navigation;
