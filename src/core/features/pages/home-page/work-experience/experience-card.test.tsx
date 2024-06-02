import { render } from "@testing-library/react";
import type { Experience } from "../../api/interface";
import { ExperienceCard } from "./experience-card";

const sampleExperience: Experience = {
  id: "1",
  organization: "AftaWallet",
  orgDescription:
    "A fin tech start up base in Kigali Rwanda, with a vision to make money transfer easy across a number of African countries",
  orgLink: "https://aftawallet.com/",
  orgLogo: "/org-logos/afta-wallet.jpeg",
  role: "Front End Developer",
  achievements: [
    "Consumed APIs, and managed an active ADMIN dash board",
    "Collaborated with a team of developers in building good user interfaces",
    "Worked and reported remotely",
  ],
  startDate: "2024-05-30T12:43:11.700Z",
  endDate: "2024-05-30T12:43:11.700Z",
};

describe("Experience Card", () => {
  it("Should render the right experience card", () => {
    const { getByRole, getByText, getByTestId } = render(<ExperienceCard experience={sampleExperience} />);

    sampleExperience.achievements.forEach((arch) => {
      expect(getByText(arch)).toBeInTheDocument();
    });

    const h2 = getByRole("heading", { level: 2 });

    expect(h2).toHaveAccessibleName(sampleExperience.organization);

    const logo = getByRole("img");

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("alt", sampleExperience.organization + " logo");

    const role = getByTestId("role");

    expect(role).toContainHTML(sampleExperience.role);
  });
});
