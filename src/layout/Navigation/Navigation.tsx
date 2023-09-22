import { NavLink } from "react-router-dom";

import { People, Planet, Vehicle } from "../../assets/icons";
import PATHS from "../../router/PATH";
import { StyledNav } from "../_styled-components/StyledNav";

const Navigation = (): JSX.Element => {
  return (
    <StyledNav>
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
