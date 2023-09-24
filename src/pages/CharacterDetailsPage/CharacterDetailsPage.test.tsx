import { act, render } from "@testing-library/react";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";

import CharacterDetailPage from "./CharacterDetailPage";

// TODO add fetch data test
test("details page render without crashing", () => {
  act(() => {
    render(
      <CommonTestProviders>
        <CharacterDetailPage />
      </CommonTestProviders>,
    );
  });
});
