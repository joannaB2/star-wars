import { render, screen } from "@testing-library/react";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";

import Navigation from "./Navigation";

test("Navigation renders without crashing", () => {
  render(
    <CommonTestProviders>
      <Navigation navVisible={false} />
    </CommonTestProviders>,
  );
});

test("Navigation have three links", () => {
  render(
    <CommonTestProviders>
      <Navigation navVisible={false} />
    </CommonTestProviders>,
  );

  const links = screen.getAllByRole("link");
  expect(links).toHaveLength(3);
});
