import Link from "next/link";
import SideList from "./side-list";
import Image from "next/image";

export default async function NavBar() {

  return (
    <nav className="fixed top-0 left-0 w-full z-10 flex items-start justify-center bg-app-dark-600">
      <div className="w-full max-w-app-dynamic-max-w mx-auto py-2 flex items-center justify-between">
        <h1 className="font-semibold sm:text-[1.5rem] w-fit">
          <Link
            title="Rash for short"
            href="/"
            className="w-fit hover:text-app-blue-500 duration-300"
          >
            Orashus

            <Image
              src="/logo.png"
              alt="rash edmund"
              width={40}
              height={40}
              className="rounded-full hidden sm:inline"
            />
          </Link>
        </h1>

        <div className="w-fit flex items-center justify-center gap-4">
          <SideList />

          <Link
            href="#contact"
            className="w-fit px-6 py-2 outline outline-1 outline-app-blue-500 font-semibold duration-300 hover:bg-app-blue-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
