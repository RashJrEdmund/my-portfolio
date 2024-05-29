import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-start p-24 gap-8">
      <h1 className="mx-auto text-app-text-500">
        Hello, I&apos;m Orashus. Rash for short.
      </h1>

      <Image
        src="/rash-1.jpeg"
        alt="rash edmund"
        width={400}
        height={400}
        className="object-bottom object-cover rounded-[100px_100px_0_0] pb-12 h-[500px] min-w-[310px]"
      />
    </main>
  );
}
