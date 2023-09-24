import { render } from "@testing-library/react";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";
import { act } from "react-dom/test-utils";

import PeoplePage from "./PeoplePage";

test("render without crashing", () => {
  act(() => {
    render(
      <CommonTestProviders>
        <PeoplePage />
      </CommonTestProviders>,
    );
  });
});
