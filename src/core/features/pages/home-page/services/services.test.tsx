import { render } from "@testing-library/react";

import { SkillComponent } from "./skills";

describe("Landing page | Service section", () => {
  const {
    getByRole,
  } = render(<SkillComponent skill={{ id: "1", label: "test-label", description: "test description" }} />);

  it("Should render the <SkillComponent skill={{ id: \"1\", label: \"test-label\", description: \"test description\" }} />  message", () => {
    const header = getByRole("heading", { level: 4 });

    expect(header).toBeInTheDocument();

    expect(header).toHaveTextContent("test-label");
  });
});

