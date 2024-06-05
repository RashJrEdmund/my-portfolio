import { cn } from "./utils";

describe('tailwind helper function "cn"', () => {
  it("Should return the right tailwind classNames", () => {
    const variables = "p-4 px-2 p-6 mt-2 ml-2 mx-auto";

    expect(cn(variables)).toBe("p-6 mt-2 mx-auto");
  });
});
