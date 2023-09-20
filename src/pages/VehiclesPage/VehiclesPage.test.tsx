import { render } from "@testing-library/react";

import CommonTestProviders from "../../components/CommonTestProviders/CommonTestProviders";

import VehiclesPage from "./VehiclesPage";

test("Planets page renders without crashing", () => {
  render(
    <CommonTestProviders>
      <VehiclesPage />
    </CommonTestProviders>,
  );
});
