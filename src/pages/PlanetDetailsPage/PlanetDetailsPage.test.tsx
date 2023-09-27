import { render, screen } from "@testing-library/react";
import { type PlanetDetailsFE } from "api/planets/planets.types";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";
import useGetInitialData from "hooks/useGetInitialData";

import PlanetDetailPage from "./PlanetDetailsPage";

const mockedGetInitialData = useGetInitialData as jest.Mock<any>;

// Mock the module
jest.mock("hooks/useGetInitialData");

describe("Planet details page", () => {
  beforeEach(() => {
    mockedGetInitialData.mockImplementation(() => ({ isLoading: true }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders without crashing", () => {
    render(
      <CommonTestProviders>
        <PlanetDetailPage />
      </CommonTestProviders>,
    );
  });
  it("Displays details data", () => {
    const mockedPlanetData: PlanetDetailsFE = {
      id: 1,
      name: "Planet Name",
      residents: [1],
      picture: "url",
      population: "100",
    };
    mockedGetInitialData.mockImplementation(() => ({ isLoading: false, data: mockedPlanetData }));

    render(
      <CommonTestProviders>
        <PlanetDetailPage />
      </CommonTestProviders>,
    );
    const headers = screen.getAllByRole("heading");
    expect(headers).toHaveLength(2);
    const record = screen.getByText(/Planet Name/i);
    expect(record).toBeInTheDocument();
  });
});
