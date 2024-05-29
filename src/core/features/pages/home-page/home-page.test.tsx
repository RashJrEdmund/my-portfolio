import { render } from "@testing-library/react";

import HomePage from "./home-page";

describe("Landing | page Page", () => {
  it("Should have \"Hello, I'm Orashus, Rash for short\" message", () => {
    const { getByRole } = render(<HomePage />);

    const header = getByRole("heading", { level: 1 });

    expect(header).toBeInTheDocument();

    expect(header).toHaveTextContent("Hello, I'm Orashus. Rash for short");
  });

  it("Should have an Image component", () => {
    const { getByRole } = render(<HomePage />);

    const img = getByRole("img");

    expect(img).toBeInTheDocument();

    expect(img).toHaveAttribute("alt", "rash edmund");
  });
});

