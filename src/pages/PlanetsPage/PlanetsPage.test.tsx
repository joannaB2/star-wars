import { render } from "@testing-library/react";

import CommonTestProviders from "../../components/CommonTestProviders/CommonTestProviders";

import PlanetsPage from "./PlanetsPage";

test("Planets page renders without crashing", () => {
  render(
    <CommonTestProviders>
      <PlanetsPage />
    </CommonTestProviders>,
  );
});
