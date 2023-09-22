import { render } from "@testing-library/react";

import CommonTestProviders from "../../components/CommonTestProviders/CommonTestProviders";

import Navigation from "./Navigation";

test("Navigation renders without crashing", () => {
  render(
    <CommonTestProviders>
      <Navigation />
    </CommonTestProviders>,
  );
});
