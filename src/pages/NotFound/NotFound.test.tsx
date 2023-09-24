import { render, screen } from "@testing-library/react";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";

import NotFound from "./NotFound";

test("Error page renders without crashing", () => {
  render(
    <CommonTestProviders>
      <NotFound />
    </CommonTestProviders>,
  );
});

test("Error page have homepage redirect", () => {
  render(
    <CommonTestProviders>
      <NotFound />
    </CommonTestProviders>,
  );

  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
});
