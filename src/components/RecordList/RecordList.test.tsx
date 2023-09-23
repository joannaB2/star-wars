import { render } from "@testing-library/react";

import CommonTestProviders from "../CommonTestProviders/CommonTestProviders";

import RecordList from "./RecordList";

test("List renders without crashing", () => {
  render(
    <CommonTestProviders>
      <RecordList
        getNextPage={jest.fn()}
        getPreviousPage={jest.fn()}
        hasNextPage={true}
        hasPrevPage={false}
        list={{ results: [{ name: "Name", avatar: "N", id: 0 }] }}
        page='/page'
      />
    </CommonTestProviders>,
  );
});
