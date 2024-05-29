import { render } from "@testing-library/react";

import { Services } from "./services";

describe("Landing page | Service section", () => {
  const {
    getByRole,
    getByTestId
  } = render(<Services />);

  it("Should have \"2 years experience coding\" message", () => {

    const header = getByRole("heading", { level: 3 });

    expect(header).toBeInTheDocument();

    expect(header).toHaveTextContent("2 years experience coding");
  });
});

