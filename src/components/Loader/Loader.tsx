import Spinner from "../../assets/icons/Spinner";
import { StyledSpinner } from "../_styled-components";

const Loader = (): JSX.Element => (
  <StyledSpinner>
    <Spinner />
  </StyledSpinner>
);

export default Loader;
