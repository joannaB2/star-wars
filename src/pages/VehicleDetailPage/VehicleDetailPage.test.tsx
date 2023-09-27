import { render, screen } from "@testing-library/react";
import { type VehicleDetailsFE } from "api/vehicles/vehicles.types";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";
import useGetInitialData from "hooks/useGetInitialData";

import VehicleDetailPage from "./VehicleDetailPage";

const mockedGetInitialData = useGetInitialData as jest.Mock<any>;

// Mock the module
jest.mock("hooks/useGetInitialData");

describe("Vehicle details page", () => {
  beforeEach(() => {
    mockedGetInitialData.mockImplementation(() => ({ isLoading: true }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders without crashing", () => {
    render(
      <CommonTestProviders>
        <VehicleDetailPage />
      </CommonTestProviders>,
    );
  });
  it("Displays details data", () => {
    const mockedVehicleData: VehicleDetailsFE = {
      id: 1,
      name: "Vehicle Name",
      picture: "url",
      pilots: [1],
      vehicleClass: "class",
    };
    mockedGetInitialData.mockImplementation(() => ({ isLoading: false, data: mockedVehicleData }));

    render(
      <CommonTestProviders>
        <VehicleDetailPage />
      </CommonTestProviders>,
    );
    const headers = screen.getAllByRole("heading");
    expect(headers).toHaveLength(2);
    const record = screen.getByText(/Vehicle Name/i);
    expect(record).toBeInTheDocument();
  });
});
