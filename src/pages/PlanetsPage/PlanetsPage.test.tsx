import { render, act } from "@testing-library/react";

import CommonTestProviders from "../../components/CommonTestProviders/CommonTestProviders";

import PlanetsPage from "./PlanetsPage";

test("Planets page renders without crashing", () => {
  act(() => {
    render(
      <CommonTestProviders>
        <PlanetsPage />
      </CommonTestProviders>,
    );
  });
});
