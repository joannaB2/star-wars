import { render } from "@testing-library/react";

import Header from "./Header";

test("Header renders without crashing", () => {
  render(<Header />);
});
