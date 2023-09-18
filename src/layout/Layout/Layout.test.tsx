import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

test("Header renders without crashing", () => {
  render(
    <Layout>
      <header>heading</header>
      <nav>navigation</nav>
      <main>main</main>
    </Layout>,
  );

  const navigation = screen.getByRole("navigation");
  const main = screen.getByRole("main");
  expect(navigation).toBeInTheDocument();
  expect(main).toBeInTheDocument();
});
