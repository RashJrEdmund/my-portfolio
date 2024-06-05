import { render } from "@testing-library/react";

import { SkillComponent } from "./skills";

describe("Landing page | Service section", () => {
  it('Should render the <SkillComponent skill={{ id: "1", label: "test-label", description: "test description" }} />  message', () => {
    const { getByRole } = render(
      <SkillComponent
        skill={{
          id: "1",
          label: "test-label",
          description: "test description",
        }}
        i={0}
      />
    );

    const header = getByRole("heading", { level: 4 });

    const orgLogo = getByRole("img");

    [header, orgLogo].forEach((tag) => {
      expect(tag).toBeInTheDocument();
    });

    expect(header).toHaveTextContent("test-label");

    expect(orgLogo).toHaveAttribute("src");
  });
});
