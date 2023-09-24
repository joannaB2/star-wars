import { People, Planet, Vehicle } from "assets/icons";
import { StyledNav } from "layout/_styled-components/StyledNav";
import { NavLink } from "react-router-dom";
import PATHS from "router/PATH";

interface NavigationProps {
  navVisible: boolean;
}

const Navigation = ({ navVisible }: NavigationProps): JSX.Element => {
  return (
    <StyledNav navVisible={navVisible}>
      <NavLink activeClassName='activePath' exact to={PATHS.PEOPLE}>
        <People />
        Characters
      </NavLink>
      <NavLink activeClassName='activePath' exact to={PATHS.PLANETS}>
        <Planet /> Planets
      </NavLink>
      <NavLink activeClassName='activePath' exact to={PATHS.VEHICLES}>
        <Vehicle /> Vehicles
      </NavLink>
    </StyledNav>
  );
};

export default Navigation;
