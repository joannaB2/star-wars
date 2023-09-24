import { render, screen } from "@testing-library/react";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";

import Loader from "./Loader";

test("Loader renders without crashing", () => {
  render(
    <CommonTestProviders>
      <Loader />
    </CommonTestProviders>,
  );
});

test("Loader has icon", () => {
  render(
    <CommonTestProviders>
      <Loader />
    </CommonTestProviders>,
  );

  const spinnerIcon = screen.getByRole("spinner");
  expect(spinnerIcon).toBeInTheDocument();
});
