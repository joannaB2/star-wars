import { render, screen } from "@testing-library/react";

import CommonTestProviders from "../../components/CommonTestProviders/CommonTestProviders";

import Layout from "./Layout";

test("Header renders without crashing", () => {
  render(
    <CommonTestProviders>
      <Layout>
        <>page</>
      </Layout>
    </CommonTestProviders>,
  );

  const navigation = screen.getByRole("navigation");
  const main = screen.getByRole("main");
  expect(navigation).toBeInTheDocument();
  expect(main).toBeInTheDocument();
});
