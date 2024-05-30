import Link from "next/link";
import SideList from "./side-list";
import { Text } from "@/components/ui/text";
import { HeaderLogo } from "@/components/ui/text-logo";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 flex items-start justify-center bg-app-dark-600">
      <div className="flex-1 w-full max-w-app-dynamic-max-w mx-auto py-4 flex items-center justify-between">
        <HeaderLogo />

        <div className="w-fit flex items-center justify-center gap-4">
          <SideList />

          <Text
            as={Link as unknown as keyof JSX.IntrinsicElements}
            href="#contact"
            className="px-4 py-1 sm:px-6 sm:py-2"
          >
            Contact
          </Text>
        </div>
      </div>
    </nav>
  );
}
