import { Skeleton } from "@/components/ui/skeleton";
import { getCertificates } from "../api/queries";
import Link from "next/link";
import { FollowLinkSvg } from "@/components/ui/svg";
import Image from "next/image";

function CertificateShimmer() {
  return (
    <>
      {Array.from({ length: 2 }, (_, i) => i).map((i) => (
        <Skeleton
          key={i}
          className="w-full h-fit max-w-[600px] 2xl:min-w-[400px] bg-app-dark-700 p-4 py-7 flex flex-col gap-4"
        >
          <Skeleton className="w-full h-[250px] md:h-[320px] bg-app-shimmer-200 rounded-none" />

          <Skeleton className="w-full h-[90px] md:h-[100px] rounded-none" />
        </Skeleton>
      ))}
    </>
  );
}

async function CertificateContainer() {
  const Certificates = await getCertificates();

  return (
    <>
      {Certificates.map((cert) => (
        <figure
          key={cert.id}
          className="w-full max-w-[600px] 2xl:min-w-[400px] bg-app-dark-700 p-4 py-7"
        >
          <Image
            src={cert.previewImg}
            alt="certificate"
            height={400}
            width={400}
            className="w-full"
          />

          <figcaption className="font-semibold text-[1.3rem] mt-3">
            {cert.title}
          </figcaption>

          <div className="w-full flex items-end justify-between gap-3 mt-3">
            <div className="w-full flex flex-col items-start">
              <h4 className="font-light">Date Achieved</h4>

              <p>{new Date(cert.dateArchived).toDateString()}</p>
            </div>

            <Link
              href={cert.url}
              target="_blank"
              className="text-app-blue-500 text-nowrap"
            >
              vew cert
              <FollowLinkSvg className="text-red-500 ml-2" />
            </Link>
          </div>
        </figure>
      ))}
    </>
  );
}

export { CertificateShimmer, CertificateContainer };
