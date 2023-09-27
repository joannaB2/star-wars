import { render, screen } from "@testing-library/react";
import { type CharactersResponseFE } from "api/people/people.types";
import CommonTestProviders from "components/CommonTestProviders/CommonTestProviders";
import usePagination from "hooks/usePagination";

import PeoplePage from "./PeoplePage";

const mockedUsePagination = usePagination as jest.Mock<any>;

// Mock the module
jest.mock("hooks/usePagination");

describe("People page", () => {
  beforeEach(() => {
    mockedUsePagination.mockImplementation(() => ({ isLoading: true }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders without crashing", () => {
    render(
      <CommonTestProviders>
        <PeoplePage />
      </CommonTestProviders>,
    );
  });
  it("Displays data", () => {
    const mockedPeopleData: CharactersResponseFE = {
      results: [
        {
          name: "Name Name",
          id: 1,
          initials: "NN",
          homeworld: 1,
          vehicles: [1],
          species: 2,
        },
      ],
      count: 1,
      next: "mockpage",
      previous: null,
    };
    mockedUsePagination.mockImplementation(() => ({ isLoading: false, data: mockedPeopleData }));

    render(
      <CommonTestProviders>
        <PeoplePage />
      </CommonTestProviders>,
    );
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
    const record = screen.getByText(/Name Name/i);
    expect(record).toBeInTheDocument();
    const paginationButtons = screen.getAllByRole("button");
    expect(paginationButtons).toHaveLength(2);
  });
});
