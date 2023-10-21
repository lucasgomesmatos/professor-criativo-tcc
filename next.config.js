/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.mundoprof.com.br",
        port: "",
      },
      {
        protocol: "https",
        hostname: "mundoprof.s3.sa-east-1.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "ptfprofessorcriativohomologacao.s3.sa-east-1.amazonaws.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
