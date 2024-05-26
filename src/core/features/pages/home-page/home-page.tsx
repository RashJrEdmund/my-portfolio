import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-8">
      <h1 className="mx-auto text-app-text-500">
        Rash Edmund
      </h1>

      <Image
        src="/logo.png"
        alt="rash edmund"
        width={400}
        height={400}
      />

      {/* <Image
        src="/rash-1.jpeg"
        alt="rash edmund"
        width={400}
        height={400}
      /> */}
    </main>
  );
}
