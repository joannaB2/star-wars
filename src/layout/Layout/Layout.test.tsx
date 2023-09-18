import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

test("Header renders without crashing", () => {
  render(
    <Layout>
      <>page</>
    </Layout>,
  );

  const navigation = screen.getByRole("navigation");
  const main = screen.getByRole("main");
  expect(navigation).toBeInTheDocument();
  expect(main).toBeInTheDocument();
});
