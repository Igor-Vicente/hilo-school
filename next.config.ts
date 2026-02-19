import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Define o tempo mínimo de cache para imagens otimizadas (em segundos)
    // 31536000 = 1 ano
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/(favicon.ico|manifest.webmanifest)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=3600",
            // 86400 seg = 24h
          },
        ],
      },
    ];
  },
};

export default nextConfig;
