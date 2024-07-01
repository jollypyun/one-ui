/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  //   async headers() {
  //       return [
  //         {
  //           source: "/:path*",
  //           headers: [
  //             {
  //               key: "Access-Control-Allow-Origin",
  //               value: "http://localhost:3000/:path*", // Set your origin
  //             },
  //             {
  //               key: "Access-Control-Allow-Methods",
  //               value: "GET, POST, PUT, DELETE, OPTIONS",
  //             },
  //             {
  //               key: "Access-Control-Allow-Headers",
  //               value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //             }
  //           ],
  //         },
  //       ];
  //     },
      // async rewrites() {
      //   return [
      //     {
      //       source: "/:path*",
      //       destination: "http://localhost:9010",
      //     }
      //   ]
      // }
};

export default nextConfig;
