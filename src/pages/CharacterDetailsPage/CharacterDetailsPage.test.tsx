import { render, screen } from "@testing-library/react";
import { type CharacterDetailsFE } from "api/people/people.types";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";
import useGetInitialData from "hooks/useGetInitialData";

import CharacterDetailPage from "./CharacterDetailPage";

const mockedGetInitialData = useGetInitialData as jest.Mock<any>;

// Mock the module
jest.mock("hooks/useGetInitialData");

describe("Character details page", () => {
  beforeEach(() => {
    mockedGetInitialData.mockImplementation(() => ({ isLoading: true }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders without crashing", () => {
    render(
      <CommonTestProviders>
        <CharacterDetailPage />
      </CommonTestProviders>,
    );
  });
  it("Displays details data", () => {
    const mockedDetailsData: CharacterDetailsFE = {
      homeworld: 1,
      id: 1,
      initials: "NN",
      name: "Name Name",
      species: 1,
      vehicles: [1],
    };
    mockedGetInitialData.mockImplementation(() => ({ isLoading: false, data: mockedDetailsData }));

    render(
      <CommonTestProviders>
        <CharacterDetailPage />
      </CommonTestProviders>,
    );
    const headers = screen.getAllByRole("heading");
    expect(headers).toHaveLength(3);
    const record = screen.getByText(/Name Name/i);
    expect(record).toBeInTheDocument();
  });
});
