import { fireEvent, render, waitFor } from "@testing-library/react";
import { CopyButton } from "./copy-button";

const buttonProps = {
  value: "test-value",
  label: "test-label",
};

describe("Copy Action Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("Should be rendered correctly", () => {
    const { getByTestId } = render(<CopyButton {...buttonProps} />);

    const copyBtn = getByTestId("copy-button");

    expect(copyBtn).toBeInTheDocument();
  });

  // it("A toast should be triggered onClick of the button", () => {
  //   const { getByTestId } = render(<CopyButton {...buttonProps} />);

  //   const handleCopyMock = jest.spyOn(require("./copy-button"), "handleCopy");

  //   const copyBtn2 = getByTestId("copy-button");

  //   expect(copyBtn2).toBeInTheDocument();

  //   fireEvent.click(copyBtn2);

  //   waitFor(() => {
  //     expect(handleCopyMock).toHaveBeenCalled();
  //   }, { timeout: 100 });
  // });
});
