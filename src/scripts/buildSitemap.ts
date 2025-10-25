import fs from 'fs';
import path from 'path';
import { generateSitemap } from '../lib/generateSitemap';

try {
  const sitemap = generateSitemap();
  const outputPath = path.join(__dirname, '../../public/sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemap, 'utf-8');
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
