import { render } from "@testing-library/react";

import CommonTestProviders from "../../components/CommonTestProviders/CommonTestProviders";

import VehicleDetailPage from "./VehicleDetailPage";

// TODO add fetch data test
test("details page render without crashing", () => {
  render(
    <CommonTestProviders>
      <VehicleDetailPage />
    </CommonTestProviders>,
  );
});
