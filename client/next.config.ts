import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [new URL('https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw76f76351/products/NIDC0774-141/NIDC0774-141-1.JPG')],
  },
};

export default nextConfig;
