import { render, screen } from "@testing-library/react";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";
import FieldValue from "components/FieldValue";

import DetailsPage from "./DetailsPage";

test("DetailsPage renders without crashing", () => {
  render(
    <CommonTestProviders>
      <DetailsPage name={"Luke"}>
        <FieldValue label='species' value='human' />
      </DetailsPage>
    </CommonTestProviders>,
  );

  const header = screen.getByRole("heading");
  const label = screen.getByText(/species/i);
  const value = screen.getByText(/human/i);

  expect(header).toBeInTheDocument();
  expect(label).toBeInTheDocument();
  expect(value).toBeInTheDocument();
});
