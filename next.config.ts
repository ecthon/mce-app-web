import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["http://localhost:5173", '192.168.1.6', 'local-origin.dev', '*.local-origin.dev', '192.168.1.*:3000', '192.168.1.5'],
};

export default nextConfig;
