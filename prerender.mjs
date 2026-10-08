import fs from "node:fs";
import { render } from "./dist-server/entry-server.js";

const templatePath = "dist/index.html";
const template = fs.readFileSync(templatePath, "utf-8");

const appHtml = render();

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Could not find <div id="root"></div> in dist/index.html');
}

const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
);

fs.writeFileSync(templatePath, html);

// The server bundle is only needed during the build; remove it from the published output.
fs.rmSync("dist-server", { recursive: true, force: true });

console.log("Pre-rendered dist/index.html (" + appHtml.length + " chars of HTML injected)");
