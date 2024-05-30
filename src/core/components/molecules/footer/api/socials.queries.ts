import { waitAndResolve } from "@/lib/utils";
import { type SocialHandle } from "./types";

const SocialAccounts: SocialHandle[] = [
  {
    id: "1",
    name: "GitHub",
    username: "rashJrEdmund",
    href: "https://github.com/rashJrEdmund",
  },
  {
    id: "2",
    name: "Twitter (X)",
    username: "orashus",
    href: "https://twitter.com/orashus",
  },
  {
    id: "3",
    name: "LinkedIn",
    username: "orashus",
    href: "https://www.linkedin.com/in/orashus/",
  },
  {
    id: "4",
    name: "HackerRank",
    username: "orashusedmund",
    href: "https://www.hackerrank.com/profile/orashusedmund",
  },
  {
    id: "5",
    name: "StackOverFlow",
    username: "orashus",
    href: "https://stackoverflow.com/users/21746512/orashus",
  }
];

const getSocials = () => {
  return waitAndResolve(SocialAccounts, 400);
};

export {
  getSocials,
};
