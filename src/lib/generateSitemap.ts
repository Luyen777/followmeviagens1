import { maldivesResorts } from "@/data/maldivesResorts";

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

export function generateSitemap(): string {
  const baseUrl = "https://followmeviagens.com";
  const currentDate = new Date().toISOString().split("T")[0];
  
  const urls: SitemapUrl[] = [];

  // Homepage
  urls.push({
    loc: baseUrl,
    lastmod: currentDate,
    changefreq: "weekly",
    priority: 1.0
  });

  // Static pages
  const staticPages = [
    { path: "/blog", priority: 0.8, changefreq: "weekly" as const },
    { path: "/ilhas-maldivas", priority: 0.9, changefreq: "weekly" as const },
    { path: "/india", priority: 0.8, changefreq: "monthly" as const },
    { path: "/india/triangulo-dourado", priority: 0.8, changefreq: "monthly" as const },
    { path: "/africa-do-sul", priority: 0.8, changefreq: "monthly" as const },
    { path: "/africa-do-sul/safari-cape-town", priority: 0.8, changefreq: "monthly" as const },
    { path: "/africa-do-sul/garden-route", priority: 0.8, changefreq: "monthly" as const },
    { path: "/dubai", priority: 0.7, changefreq: "monthly" as const },
    { path: "/tailandia", priority: 0.7, changefreq: "monthly" as const },
    { path: "/seychelles", priority: 0.7, changefreq: "monthly" as const },
    { path: "/egito", priority: 0.7, changefreq: "monthly" as const },
    { path: "/vietna", priority: 0.7, changefreq: "monthly" as const },
    { path: "/turquia", priority: 0.7, changefreq: "monthly" as const },
    { path: "/grecia", priority: 0.7, changefreq: "monthly" as const },
    { path: "/bali", priority: 0.7, changefreq: "monthly" as const },
    { path: "/taiti", priority: 0.7, changefreq: "monthly" as const },
    { path: "/australia", priority: 0.7, changefreq: "monthly" as const },
    { path: "/nova-zelandia", priority: 0.7, changefreq: "monthly" as const },
    { path: "/ilhas-mauricio", priority: 0.7, changefreq: "monthly" as const },
    { path: "/fiji", priority: 0.7, changefreq: "monthly" as const },
    { path: "/camboja", priority: 0.7, changefreq: "monthly" as const }
  ];

  staticPages.forEach(page => {
    urls.push({
      loc: `${baseUrl}${page.path}`,
      lastmod: currentDate,
      changefreq: page.changefreq,
      priority: page.priority
    });
  });

  // All Maldives resorts from maldivesResorts object
  Object.keys(maldivesResorts).forEach(slug => {
    urls.push({
      loc: `${baseUrl}/ilhas-maldivas/${slug}`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.9
    });
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
}
