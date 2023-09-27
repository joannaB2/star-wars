import { render, screen } from "@testing-library/react";
import { type PlanetListResponseFE } from "api/planets/planets.types";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";
import usePagination from "hooks/usePagination";

import PlanetsPage from "./PlanetsPage";

const mockedUsePagination = usePagination as jest.Mock<any>;

// Mock the module
jest.mock("hooks/usePagination");

describe("Planets page", () => {
  beforeEach(() => {
    mockedUsePagination.mockImplementation(() => ({ isLoading: true }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders without crashing", () => {
    render(
      <CommonTestProviders>
        <PlanetsPage />
      </CommonTestProviders>,
    );
  });
  it("Displays data", () => {
    const mockedPlanetData: PlanetListResponseFE = {
      results: [
        {
          name: "Planet name",
          id: 1,
          picture: "pictureurl",
          population: "1000",
          residents: [1],
        },
      ],
      count: 1,
      next: "mockpage",
      previous: null,
    };
    mockedUsePagination.mockImplementation(() => ({ isLoading: false, data: mockedPlanetData }));

    render(
      <CommonTestProviders>
        <PlanetsPage />
      </CommonTestProviders>,
    );
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
    const record = screen.getByText(/Planet name/i);
    expect(record).toBeInTheDocument();
    const paginationButtons = screen.getAllByRole("button");
    expect(paginationButtons).toHaveLength(2);
  });
});
