import { render } from "@testing-library/react";

import BlogPage from "./blog-page";

describe("Blog Page", () => {
  it("Should have heading", () => {
    const { getByText, getByRole } = render(<BlogPage />);

    const header = getByRole("heading", { level: 1 });

    expect(header).toBeInTheDocument();

    // const helloText = getByText("why now");

    // expect(helloText).toBeInTheDocument();
  });
});
