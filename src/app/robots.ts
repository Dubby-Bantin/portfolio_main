import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "*",
      },
    ],
    sitemap: "https://www.npssusa.com/sitemap.xml",
  };
}
