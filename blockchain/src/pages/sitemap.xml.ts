﻿import fs from "fs";
import { GetServerSideProps } from "next";

const Sitemap = () => {};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const staticPages = fs
    .readdirSync("./src/pages")
    .filter((staticPage) => {
      return ![
        "index.tsx",
        "_app.tsx",
        "_document.tsx",
        "Admin",
        "api",
        "NoMobileScreenSupport.tsx",
        "sitemap.xml.ts",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${baseUrl}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
        </url>
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
