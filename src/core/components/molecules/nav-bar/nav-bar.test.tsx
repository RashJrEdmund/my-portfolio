import { render } from "@testing-library/react";
import NavBar from "./nav-bar";

describe("NavBar", () => {
  it('Should have h1 text "Orashus"', () => {
    const { getByRole } = render(<NavBar />);

    const h1 = getByRole("heading", { level: 1 });

    console.log({ h1 });

    expect(h1).toBeInTheDocument();

    expect(h1).toHaveTextContent("Orashus");
  });

  it("Should be render with the <nav /> HTML tag and have the right navigators", () => {
    const { getByRole } = render(<NavBar />);

    const nav = getByRole("navigation");

    console.log({ nav });

    expect(nav).toBeInTheDocument();

    ["Orashus", "Portfolio", "Blog", "Contact"].forEach((n) => {
      expect(nav).toHaveTextContent(n);
    });
  });
});
