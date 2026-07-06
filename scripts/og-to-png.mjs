// One-off: rasterise public/og-image.svg to a 1200x630 PNG for reliable
// social previews (LinkedIn/WhatsApp/Facebook do not render SVG OG images).
// Primary path: sharp. Fallback: @resvg/resvg-js if sharp cannot rasterise.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svgPath = join(root, 'public', 'og-image.svg');
const pngPath = join(root, 'public', 'og-image.png');
const WIDTH = 1200;
const HEIGHT = 630;

const svg = await readFile(svgPath);

async function withSharp() {
  const sharp = (await import('sharp')).default;
  return sharp(svg)
    .resize(WIDTH, HEIGHT, { fit: 'fill' })
    .png()
    .toBuffer();
}

async function withResvg() {
  const { Resvg } = await import('@resvg/resvg-js');
  const resvg = new Resvg(svg.toString('utf8'), {
    fitTo: { mode: 'width', value: WIDTH },
  });
  return resvg.render().asPng();
}

let png;
try {
  png = await withSharp();
  console.log('Rasterised with sharp.');
} catch (err) {
  console.warn('sharp failed, falling back to @resvg/resvg-js:', err.message);
  png = await withResvg();
  console.log('Rasterised with @resvg/resvg-js.');
}

await writeFile(pngPath, png);
console.log(`Wrote ${pngPath} (${png.length} bytes).`);
