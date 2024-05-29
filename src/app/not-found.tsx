import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center flex flex-col items-center justify-center gap-4 min-h-[min(90vw,_1000px)]">
      <Image
        src="/rash-1.jpeg"
        alt="rash edmund"
        width={300}
        height={300}
        className="object-bottom object-cover rounded-[100px_100px_0_0] h-[320px] min-w-[300px]"
      />

      <p>Page Not Found</p>

      <Link href="/" className="relative group inline-block text-nowrap outline outline-1 outline-app-blue-500 text-app-text-500 px-6 py-3">
        <span
          className="absolute top-0 left-0 z-[-1] h-full w-0 group-hover:w-full duration-300 bg-app-blue-500"
        />
        back to portfolio
      </Link>
    </main>
  );
};
