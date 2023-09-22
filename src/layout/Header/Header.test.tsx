import { render } from "@testing-library/react";

import CommonTestProviders from "../../components/CommonTestProviders/CommonTestProviders";

import Header from "./Header";

test("Header renders without crashing", () => {
  render(
    <CommonTestProviders>
      <Header />
    </CommonTestProviders>,
  );
});
