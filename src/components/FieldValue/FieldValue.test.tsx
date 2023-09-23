import { render, screen } from "@testing-library/react";

import CommonTestProviders from "../CommonTestProviders/CommonTestProviders";

import FieldValue from "./FieldValue";

test("FieldValue renders without crashing", () => {
  render(
    <CommonTestProviders>
      <FieldValue label={"label"} value={"value"} />
    </CommonTestProviders>,
  );

  const label = screen.getByText(/label/i);
  expect(label).toBeInTheDocument();
});
