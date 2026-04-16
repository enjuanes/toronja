/**
 * Fetches all municipalities from the AEMET API and caches them as a JSON file.
 * This call tends to saturate the AEMET API, so the result is cached in public/.
 * Run with: pnpm fetch-municipalities
 * Reads AEMET_API_KEY from .ENV
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// Read API key from .ENV
const envContent = readFileSync(resolve(ROOT, '.ENV'), 'utf-8');
const apiKeyMatch = envContent.match(/^AEMET_API_KEY=(.+)$/m);
if (!apiKeyMatch) {
  console.error('ERROR: AEMET_API_KEY not found in .ENV');
  process.exit(1);
}
const apiKey = apiKeyMatch[1].trim();

function slugify(text) {
  return text
    .normalize('NFD') // decompose accented chars (é → e + ́)
    .replace(/[\u0300-\u036f]/g, '') // remove diacritical marks
    .replace(/ç/gi, 'c') // ç → c
    .replace(/ñ/gi, 'n') // ñ → n (already handled by NFD but just in case)
    .toLowerCase()
    .replace(/['']/g, '') // remove apostrophes
    .replace(/[^a-z0-9]+/g, '-') // non-alphanumeric → hyphens
    .replace(/^-+|-+$/g, ''); // trim leading/trailing hyphens
}

async function main() {
  console.log('Fetching municipalities from AEMET API...');

  // Step 1: Get the redirect URL
  const metaRes = await fetch(
    `https://opendata.aemet.es/opendata/api/maestro/municipios?api_key=${encodeURIComponent(apiKey)}`
  );
  if (!metaRes.ok) {
    console.error(`AEMET meta request failed: ${metaRes.status} ${metaRes.statusText}`);
    process.exit(1);
  }
  const meta = await metaRes.json();

  // Step 2: Fetch the actual data (AEMET returns ISO-8859-15 encoded text)
  const dataRes = await fetch(meta.datos);
  if (!dataRes.ok) {
    console.error(`AEMET data request failed: ${dataRes.status} ${dataRes.statusText}`);
    process.exit(1);
  }
  const buffer = await dataRes.arrayBuffer();
  const text = new TextDecoder('iso-8859-15').decode(buffer);
  const municipalities = JSON.parse(text);

  // Step 3: Map to {id, name, slug}
  const result = municipalities.map((m) => ({
    id: m.id.replace(/^id/, ''),
    name: m.nombre,
    slug: slugify(m.nombre),
  }));

  // Step 4: Write to public/
  const outPath = resolve(ROOT, 'public', 'json', 'aemet-municipalities.json');
  writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf-8');
  console.log(
    `Done! ${result.length} municipalities written to json/public/aemet-municipalities.json`
  );
}

main();
