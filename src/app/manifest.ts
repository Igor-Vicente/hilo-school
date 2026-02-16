import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hilo Language School",
    short_name: "Hilo",
    description: "Aprenda inglês com confiança",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
