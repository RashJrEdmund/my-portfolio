import { render, fireEvent, waitFor } from "@testing-library/react";
import { SpaceShip } from "./space-ship";

describe("Space - Ship", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should render and Image successfully", () => {
    const { getByTestId } = render(<SpaceShip />);

    const ship = getByTestId("space-ship");

    expect(ship).toBeInTheDocument();
  });

  it("Should have the right attributes", () => {
    const { getByTestId } = render(<SpaceShip />);

    const ship = getByTestId("space-ship");

    expect(ship).toBeInTheDocument();

    expect(ship).toHaveAttribute(
      "alt",
      "space craft. sky's not even the limit, if we work together"
    );

    expect(ship).toHaveAccessibleDescription();

    expect(ship).toHaveAccessibleDescription("Click to start engine");

    fireEvent.click(ship);

    waitFor(
      () => {
        expect(ship).toHaveAccessibleDescription("Click to stop engine");
      },
      { timeout: 50 }
    );
  });
});
