import { render } from "@testing-library/react";

import { Banner } from "./banner";

describe("Landing page | Banner section", () => {
  it("Should have a \"Hello, I'm Orashus { }, Rash for short.\" message", () => {
    const { getByRole } = render(<Banner />);

    const header = getByRole("heading", { level: 1 });

    expect(header).toBeInTheDocument();

    expect(header).toHaveTextContent("Hello, I'm Orashus { }, Rash for short.");
  });

  it("Should have a \"I interned at a fin-tech startup (Aftawallet) as a front-end developer for a month\" message", () => {
    const { getByTestId } = render(<Banner />);

    const afterWalletInternshipHeading = getByTestId("aftawallet-internship-heading");

    expect(afterWalletInternshipHeading).toBeInTheDocument();
  });

  it("Should be rendered and download resume link should have the right href attribute", () => {
    const { getByTestId } = render(<Banner />);

    const downloadResumeLink = getByTestId("download-resume");

    const emailLink = getByTestId("email-link");

    expect(downloadResumeLink).toHaveAttribute("href", "/rash.resume.pdf");

    expect(emailLink).toBeInTheDocument();
  });
});

