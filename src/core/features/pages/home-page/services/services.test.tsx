import { render } from "@testing-library/react";

import { Services } from "./services";

describe("Landing page | Service section", () => {
  const {
    getByRole,
  } = render(<Services />);

  it("Should have \"1.7+ years coding experience.\" message", () => {

    const header = getByRole("heading", { level: 3 });

    expect(header).toBeInTheDocument();

    expect(header).toHaveTextContent("1.7+ years coding experience.");
  });
});

