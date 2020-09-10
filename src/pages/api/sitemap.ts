import { NextApiRequest, NextApiResponse } from 'next';
import { sitemapBaseUrl } from 'config';
import { SitemapEntry } from 'models/interfaces';
import { getSitemapRoutes } from 'lib/sitemap';

const sitemap = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const aboutPage: SitemapEntry = {
    loc: 'about',
    lastmod: '2020-09-09T17:46:00Z',
  };
  const entries: SitemapEntry[] = [...(await getSitemapRoutes()), aboutPage];
  const sitemap: string = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
      >
        ${entries
          .map(
            ({ lastmod, loc }: SitemapEntry) => `
          <url>
            <loc>${sitemapBaseUrl}/${loc}</loc>
            <lastmod>${lastmod}</lastmod>
          </url>`,
          )
          .join('\n')}
      </urlset>
    `.trim();

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  return res.end(sitemap);
};

export default sitemap;
