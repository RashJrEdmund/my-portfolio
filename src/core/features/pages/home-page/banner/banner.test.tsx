import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Banner } from "./banner";
import * as sonnerModule from "sonner";
import { handleClick } from "./banner-cta";

const toastMock = sonnerModule.toast as jest.MockedFunction<
  typeof sonnerModule.toast
>;
const handleClickMock = handleClick as jest.MockedFunction<typeof handleClick>;

// Way 2:
// import * as BannerCta from "./banner-cta";
// const handleClickSpy = BannerCta.handleClick as jest.Mock;

describe("Landing page | Banner section", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should have a "Hello, I\'m Orashus { }, Rash for short." message', () => {
    const { getByRole } = render(<Banner />);
    // jest.spyOn(sonnerModule, "toast");
    const header = getByRole("heading", { level: 1 });

    expect(header).toBeInTheDocument();

    expect(header).toHaveTextContent("Hello, I'm Orashus { }, Rash for short.");
  });

  it('Should have a "I interned at a fin-tech startup (Aftawallet) as a front-end developer for a month" message', () => {
    const { getByTestId } = render(<Banner />);

    const afterWalletInternshipHeading = getByTestId(
      "aftawallet-internship-heading"
    );

    expect(afterWalletInternshipHeading).toBeInTheDocument();
  });

  it("Should be rendered and download resume link should have the right href attribute", () => {
    const { getByTestId } = render(<Banner />);

    const downloadResumeLink = getByTestId("download-resume");

    const emailLink = getByTestId("email-link");

    expect(downloadResumeLink).toHaveAttribute("href", "/rash.resume.pdf");

    expect(emailLink).toBeInTheDocument();
  });

  it('Should display toast when "Email Me" button is clicked', () => {
    const { getByTestId } = render(<Banner />);

    const emailButtonLink = getByTestId("email-link");

    expect(emailButtonLink).toBeInTheDocument();

    fireEvent.click(emailButtonLink);

    waitFor(
      () => {
        expect(handleClickMock).toHaveBeenCalled();

        expect(toastMock).toHaveBeenCalled();

        expect(screen.getByText("Copy Email")).toBeInTheDocument();

        fireEvent.click(screen.getByText("Copy Email"));

        waitFor(
          () => {
            expect(screen.getByText("Email Copied")).toBeInTheDocument();
          },
          { timeout: 100 }
        );
      },
      { timeout: 300 }
    );
  });
});
