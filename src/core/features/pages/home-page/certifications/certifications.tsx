import { FollowLinkSvg } from "@/components/ui/svg";
import Image from "next/image";
import Link from "next/link";

const CertificateData = [
  {
    id: "1",
    title: "HackerRank JavaScript Developer (Basic)",
    url: "https://www.hackerrank.com/certificates/ab41a92a50fd",
    previewImg: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FHackerRank-cert-basic-1717359420485.png?alt=media&token=02a68a7f-d819-42e0-a88a-6e6e9ec99561",
    dateArchived: "6/17/2023",
  },
  {
    id: "2",
    title: "HackerRank JavaScript Developer (Intermediate)",
    url: "https://www.hackerrank.com/certificates/ab41a92a50fd",
    previewImg: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FHackerRank-cert-intermediate-1717359441118.png?alt=media&token=f0d84986-ea75-4a08-b768-5974b0d13c4d",
    dateArchived: "10/6/2023",
  }
];

function Certifications() {
  return (
    <div className="w-full max-w-app-dynamic-max-w h-fit flex items-center justify-center">
      <div className="w-full min-h-app-section-min-h flex flex-col items-center justify-center pt-8 pb-12">
        <h3 className="font-semibold text-[1.3rem] md:text-[2rem] w-fit mx-auto mb-11">
          Certificates and achievements
        </h3>

        <div className="w-full mx-auto flex flex-col md:flex-row xl:flex-wrap items-center justify-center gap-4 md:gap-8 gap-y-6 mt-8">
          {
            CertificateData.map((cert) => (
              <figure key={cert.id} className="w-full max-w-[600px] 2xl:min-w-[400px] bg-app-dark-700 p-4 py-7">
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

                    <p>
                      {new Date(cert.dateArchived).toDateString()}
                    </p>
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
            ))
          }
        </div>
      </div>
    </div>
  );
};

export { Certifications };
