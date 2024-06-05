import { render } from "@testing-library/react";
import { Coding } from "./coding";

describe("Landing page | Coding Section", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should Render Image", () => {
    const { getByRole } = render(<Coding />);

    const img = getByRole("img");

    expect(img).toBeInTheDocument();

    expect(img).toHaveAttribute("alt", "my git map");
  });

  it('Should Render "I literally code every single day"', () => {
    const { getByTestId } = render(<Coding />);

    const p = getByTestId("i-code-text");

    expect(p).toBeInTheDocument();
  });
});
