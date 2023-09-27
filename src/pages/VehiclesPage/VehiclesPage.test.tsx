import { render, screen } from "@testing-library/react";
import { type VehiclesResponseFE } from "api/vehicles/vehicles.types";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";
import usePagination from "hooks/usePagination";

import VehiclePage from "./VehiclesPage";

const mockedUsePagination = usePagination as jest.Mock<any>;

// Mock the module
jest.mock("hooks/usePagination");

describe("Vehicles page", () => {
  beforeEach(() => {
    mockedUsePagination.mockImplementation(() => ({ isLoading: true }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders without crashing", () => {
    render(
      <CommonTestProviders>
        <VehiclePage />
      </CommonTestProviders>,
    );
  });
  it("Displays data", () => {
    const mockedVehiclesData: VehiclesResponseFE = {
      results: [
        {
          name: "Vehicle name",
          id: 1,
          picture: "pictureurl",
          pilots: [2],
          vehicleClass: "cross",
        },
      ],
      count: 1,
      next: "mockpage",
      previous: null,
    };
    mockedUsePagination.mockImplementation(() => ({ isLoading: false, data: mockedVehiclesData }));

    render(
      <CommonTestProviders>
        <VehiclePage />
      </CommonTestProviders>,
    );
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
    const record = screen.getByText(/Vehicle name/i);
    expect(record).toBeInTheDocument();
    const paginationButtons = screen.getAllByRole("button");
    expect(paginationButtons).toHaveLength(2);
  });
});
