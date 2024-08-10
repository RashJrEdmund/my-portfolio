import { render } from "@testing-library/react";

import { ToolComponent } from "./tool-list";

describe("Landing page | Service section", () => {
  it('Should render the <ToolComponent skill={{ id: "1", label: "test-label", description: "test description" }} />  message', () => {
    const { getByRole } = render(
      <ToolComponent
        tool={{
          id: "1",
          img_url: "/lang-logos/rust-logo.jpeg",
          name: "Language",
        }}
        i={0}
      />
    );

    const header = getByRole("heading", { level: 4 });

    const langLogo = getByRole("img");

    [header, langLogo].forEach((tag) => {
      expect(tag).toBeInTheDocument();
    });

    expect(header).toHaveTextContent("Language");

    expect(langLogo).toHaveAttribute("src");
  });
});
