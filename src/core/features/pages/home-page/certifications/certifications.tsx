import Image from "next/image";

const CertificateData = [
  {
    id: "1",
    title: "HackerRank JavaScript Developer (Basic)",
    url: "https://www.hackerrank.com/certificates/ab41a92a50fd",
    previewImg: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FHackerRank-cert-basic-1717359420485.png?alt=media&token=02a68a7f-d819-42e0-a88a-6e6e9ec99561",
    dateArchived: new Date(),
  },
  {
    id: "2",
    title: "HackerRank JavaScript Developer (Intermediate)",
    url: "https://www.hackerrank.com/certificates/ab41a92a50fd",
    previewImg: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FHackerRank-cert-intermediate-1717359441118.png?alt=media&token=f0d84986-ea75-4a08-b768-5974b0d13c4d",
    dateArchived: new Date(),
  }
];

function Certifications() {
  return (
    <div className="w-full max-w-app-dynamic-max-w h-fit flex items-center justify-center">
      <div className="w-full min-h-app-section-min-h flex flex-col items-center justify-center">
        <h2>
          Certificates and achievements
        </h2>

        <div className="w-full mx-auto flex items-center justify-center gap-4">
          {
            CertificateData.map((cert) => (
              <div key={cert.id} className="w-full max-w-[600px] bg-app-dark-700">
                <Image
                  src={cert.previewImg}
                  alt="certificate"
                  height={400}
                  width={400}
                  className="w-full"
                />

                <h3 className="font-semibold">
                  {cert.title}
                </h3>

                <div className="w-full flex flex-col gap-3">
                  <h4 className="">Gotten</h4>

                  <p>
                    {new Date(cert.dateArchived).toDateString()}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export { Certifications };
