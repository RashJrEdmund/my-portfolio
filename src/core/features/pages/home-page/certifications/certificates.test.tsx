import { render } from "@testing-library/react";
import { Certifications } from "./certifications";

describe("Home Page | Certificates And Achievements", () => {
  it("Should render the text \"Certificates and achievements\"", () => {
    const { getByText} = render(<Certifications />);

    const h3 = getByText("Certificates and achievements");

    expect(h3).toBeInTheDocument();
  });
});
