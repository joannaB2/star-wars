import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import CommonTestProviders from "../../components/CommonTestProviders/CommonTestProviders";

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
