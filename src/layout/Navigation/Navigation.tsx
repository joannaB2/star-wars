import { Link } from "react-router-dom";

import { People, Planet, Vehicle } from "../../assets/icons";
import PATHS from "../../router/PATH";
import { StyledNav } from "../_styled-components/StyledNav";

const Navigation = (): JSX.Element => {
  return (
    <StyledNav>
      <Link to={PATHS.PEOPLE}>
        <People />
        Characters
      </Link>
      <Link to={PATHS.PLANETS}>
        <Planet /> Planets
      </Link>
      <Link to={PATHS.VEHICLES}>
        <Vehicle /> Vehicles
      </Link>
    </StyledNav>
  );
};

export default Navigation;
