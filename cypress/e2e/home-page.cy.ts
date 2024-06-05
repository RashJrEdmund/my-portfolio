describe("Home Page e2e", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should navigate to home page, and verify text content in home page", () => {
    cy.contains("Hello, I'm Orashus { }, Rash for short.");

    cy.contains(/typescript enthusiast/i);

    cy.contains(/I'm a detail oriented, skilled software developer with a perfect understanding of TypeScript and JavaScript, very basic knowledge of Java, and expertise in frameworks like NextJs, React, NestJs, and Express/i);

    cy.contains(/1.7\+ years coding experience./i);

    cy.contains(/Discover the best services I offer, designed to ensure the success of your project./i);

    cy.contains(/Skill Set/i);

    ["Attention to details", "Teachable", "Logical Approach", "Creative Ability"].forEach((skill) => {
      cy.contains(skill);
    });

    cy.contains(/Work Experience/i);

    cy.contains(/Personal Projects/i);

    cy.contains(/Certificates and achievements/i);

    cy.contains(/I literally code every single day./i);

    cy.contains(/And do my best to gain mastery over everything I do/);
  });

  it.only("NavBar | Portfolio link should be accessible", () => {
    cy.get("[data-testid=email-link]").click();

  });
});
