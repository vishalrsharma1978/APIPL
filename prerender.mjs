import fs from "node:fs";
import { render, renderLocation } from "./dist-server/entry-server.js";
import {
  LOCATIONS,
  locationSlug,
  locationPath,
} from "./src/locations.js";

const DOMAIN = "https://aashipowertech.com";
const templatePath = "dist/index.html";
const template = fs.readFileSync(templatePath, "utf-8");

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Could not find <div id="root"></div> in dist/index.html');
}

const enc = (s) => s.replace(/&/g, "&amp;");

// ---- Home page ----
const homeHtml = template.replace(
  '<div id="root"></div>',
  `<div id="root">${render()}</div>`,
);
fs.writeFileSync(templatePath, homeHtml);

// ---- Location head rewriting ----
function applyLocationHead(page, location) {
  const { city, state } = location;
  const url = `${DOMAIN}${locationPath(location)}`;
  const title = enc(
    `SGCI & Railway Sleeper Insert Manufacturer in ${city} | APIPL India`,
  );
  const description = enc(
    `APIPL is an RDSO-approved SGCI & railway sleeper insert manufacturer serving ${city}, ${state}. RT 6901 SG iron insert — 500 N/mm² tensile, 190 BHN hardness, 15,000/day capacity. Request a quotation.`,
  );

  page = page.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  page = page.replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="description" content="${description}" />`,
  );
  page = page.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />`,
  );
  page = page.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${url}" />`,
  );
  page = page.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${title}" />`,
  );
  page = page.replace(
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta property="og:description" content="${description}" />`,
  );
  page = page.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${title}" />`,
  );
  page = page.replace(
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="twitter:description" content="${description}" />`,
  );

  // Location-specific structured data (Service with areaServed).
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Railway Sleeper Insert Manufacturing & Supply",
    provider: {
      "@type": "Organization",
      name: "Aashi Powertech India Private Limited",
      url: DOMAIN + "/",
    },
    areaServed: { "@type": "City", name: `${city}, ${state}, India` },
    description: `RDSO-approved SGCI / SG iron RT 6901 railway sleeper inserts manufactured and supplied in ${city}, ${state} by APIPL.`,
    url,
  };
  const ldScript = `    <script type="application/ld+json">\n      ${JSON.stringify(ld)}\n    </script>\n  </head>`;
  page = page.replace("</head>", ldScript);

  return page;
}

// ---- Generate a page per location ----
for (const location of LOCATIONS) {
  const appHtml = renderLocation(location);
  let page = applyLocationHead(template, location);
  page = page.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>\n    <script>window.__APIPL_LOCATION__ = ${JSON.stringify(
      location,
    )};</script>`,
  );
  const dir = `dist/${locationSlug(location)}`;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(`${dir}/index.html`, page);
}

// ---- Dynamic sitemap ----
const today = new Date().toISOString().slice(0, 10);
const staticUrls = [
  { loc: `${DOMAIN}/`, priority: "1.0", changefreq: "weekly" },
  { loc: `${DOMAIN}/#product`, priority: "0.9", changefreq: "monthly" },
  { loc: `${DOMAIN}/#specifications`, priority: "0.8", changefreq: "monthly" },
  { loc: `${DOMAIN}/#capabilities`, priority: "0.7", changefreq: "monthly" },
  { loc: `${DOMAIN}/#faq`, priority: "0.6", changefreq: "monthly" },
  { loc: `${DOMAIN}/#contact`, priority: "0.7", changefreq: "monthly" },
];
const locUrls = LOCATIONS.map((l) => ({
  loc: `${DOMAIN}${locationPath(l)}`,
  priority: "0.6",
  changefreq: "monthly",
}));

const urlXml = [...staticUrls, ...locUrls]
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlXml}\n</urlset>\n`;
fs.writeFileSync("dist/sitemap.xml", sitemap);

// The server bundle is only needed during the build; remove it from the published output.
fs.rmSync("dist-server", { recursive: true, force: true });

console.log(
  `Pre-rendered home + ${LOCATIONS.length} location pages. Sitemap: ${
    staticUrls.length + locUrls.length
  } URLs.`,
);
