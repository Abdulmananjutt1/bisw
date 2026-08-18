import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [
  { name: 'icon.png', size: 32 },
  { name: 'apple-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

async function generateRoundedIcon() {
  const logoPath = join(__dirname, '../src/assets/logo.jpeg');
  const outputDir = join(__dirname, '../src/app');

  for (const { name, size } of sizes) {
    // Create a circular mask
    const circleSize = size;
    const radius = Math.floor(size / 2);

    // Create rounded square SVG mask (for apple icon use rounded rect, for others use circle)
    const isAppleIcon = name.includes('apple');
    const cornerRadius = isAppleIcon ? Math.floor(size * 0.225) : radius; // Apple uses ~22.5% corner radius
    
    const mask = Buffer.from(
      isAppleIcon
        ? `<svg width="${circleSize}" height="${circleSize}">
             <rect x="0" y="0" width="${circleSize}" height="${circleSize}" rx="${cornerRadius}" ry="${cornerRadius}" fill="white"/>
           </svg>`
        : `<svg width="${circleSize}" height="${circleSize}">
             <circle cx="${radius}" cy="${radius}" r="${radius}" fill="white"/>
           </svg>`
    );

    // Process the image
    await sharp(logoPath)
      .resize(size, size, {
        fit: 'cover',
        position: 'center',
      })
      .composite([
        {
          input: mask,
          blend: 'dest-in',
        },
      ])
      .png()
      .toFile(join(outputDir, name));

    console.log(`✅ Generated ${name} (${size}x${size})`);
  }

  // Also copy to public for direct access
  await sharp(logoPath)
    .resize(512, 512, {
      fit: 'cover',
      position: 'center',
    })
    .png()
    .toFile(join(__dirname, '../public/logo.png'));

  console.log('✅ All rounded icons generated successfully!');
}

generateRoundedIcon().catch(console.error);
