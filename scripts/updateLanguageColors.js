import fs from "node:fs/promises";
import path from "node:path";

import YAML from "yaml";

const LANGUAGE_FILE_URL = "https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml";
const OUTPUT_FILE_PATH = path.resolve("public", "languageColors.json");

const response = await fetch(LANGUAGE_FILE_URL);
if (!response.ok) {
  throw new Error(`Failed to fetch language data: ${response.status} ${response.statusText}`);
}

const yamlText = await response.text();
const parsedData = YAML.parse(yamlText);
const languageColors = Object.fromEntries(Object.entries(parsedData).map(([name, lang]) => [name, { color: lang.color ?? null }]));

await fs.writeFile(OUTPUT_FILE_PATH, JSON.stringify(languageColors, null, 2));
// eslint-disable-next-line no-console
console.log(`Language colors updated and saved to ${OUTPUT_FILE_PATH}`);
