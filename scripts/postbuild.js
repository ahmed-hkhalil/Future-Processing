import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Copy src/assets/img to dist/assets/img for runtime images
const srcImg = path.join(rootDir, 'src/assets/img');
const distImg = path.join(rootDir, 'dist/assets/img');
if (fs.existsSync(srcImg)) {
  fs.mkdirSync(path.dirname(distImg), { recursive: true });
  fs.cpSync(srcImg, distImg, { recursive: true });
  console.log('✓ Copied static images to dist/assets/img');
}

// 2. Copy dist/index.html to dist/404.html for SPA routing on GitHub Pages
const distIndex = path.join(rootDir, 'dist/index.html');
const dist404 = path.join(rootDir, 'dist/404.html');
if (fs.existsSync(distIndex)) {
  fs.copyFileSync(distIndex, dist404);
  console.log('✓ Created dist/404.html for SPA client-side routing');
}
