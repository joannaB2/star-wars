import { render, act } from "@testing-library/react";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";

import VehicleDetailPage from "./VehicleDetailPage";

test("details page render without crashing", () => {
  act(() => {
    render(
      <CommonTestProviders>
        <VehicleDetailPage />
      </CommonTestProviders>,
    );
  });
});
