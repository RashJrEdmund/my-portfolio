import { render } from "@testing-library/react";

import HomePage from "./home-page";

describe("Landing | page Page", () => {
  it("Should have hello rash message", () => {
    const { getByText } = render(<HomePage params={{ locale: "en"}} />);

    const helloText = getByText("Hello Rash");

    expect(helloText).toBeInTheDocument();
  });
});
