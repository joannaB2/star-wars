import { act, render } from "@testing-library/react";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";

import SectionWithLinks from "./SectionWithLinks";

test("Links section render without crashing", () => {
  act(() => {
    render(
      <CommonTestProviders>
        <SectionWithLinks data={[]} loading={false} path={""} sectionName={""} />
      </CommonTestProviders>,
    );
  });
});
