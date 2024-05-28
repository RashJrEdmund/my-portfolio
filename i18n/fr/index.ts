import { homePage } from "./home-page";
import { navBar } from "./nav-bar";

export default {
  ...navBar,

  ...homePage,
} as const;
