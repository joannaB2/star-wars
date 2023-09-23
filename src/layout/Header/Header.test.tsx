import { type SetStateAction } from "react";

import { render } from "@testing-library/react";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";
import "config/tests/mockMatchMedia";

import Header from "./Header";

test("Header renders without crashing", () => {
  render(
    <CommonTestProviders>
      <Header
        navVisible={false}
        setNavVisible={function (value: SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }}
      />
    </CommonTestProviders>,
  );
});
