import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://www.cyberdezrealm.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.cyberdezrealm.com/#strategy",
      lastModified: new Date(),
    },
    {
      url: "https://www.cyberdezrealm.com/#contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.cyberdezrealm.com/#projects",
      lastModified: new Date(),
    },
  ];
}
