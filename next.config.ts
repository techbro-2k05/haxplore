import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};

module.exports = {
  distDir: 'build', 
};
export default nextConfig;
