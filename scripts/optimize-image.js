import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Image optimization script for project thumbnails
 * Usage: node scripts/optimize-image.js <input-path> <output-name>
 * Example: node scripts/optimize-image.js ~/my-project-screenshot.png my-project
 */

async function optimizeImage(inputPath, outputName) {
  const outputDir = path.join(__dirname, '../public/images');
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`Processing ${inputPath}...`);
    console.log(`Original: ${metadata.width}x${metadata.height}, ${Math.round(metadata.size / 1024)}KB`);

    // Generate optimized versions
    const sizes = [
      { width: 500, height: 300, suffix: '' },      // Main thumbnail
      { width: 800, height: 480, suffix: '@2x' },   // High DPI version
      { width: 300, height: 180, suffix: '-small' } // Small version for mobile
    ];

    for (const size of sizes) {
      // WebP version (best compression)
      await image
        .resize(size.width, size.height, { 
          fit: 'cover', 
          position: 'center' 
        })
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, `${outputName}${size.suffix}.webp`));

      // JPEG fallback
      await image
        .resize(size.width, size.height, { 
          fit: 'cover', 
          position: 'center' 
        })
        .jpeg({ quality: 85, progressive: true })
        .toFile(path.join(outputDir, `${outputName}${size.suffix}.jpg`));

      console.log(`✓ Generated ${outputName}${size.suffix}.webp and .jpg`);
    }

    // Generate low-quality placeholder for blur effect
    await image
      .resize(20, 12, { fit: 'cover' })
      .jpeg({ quality: 20 })
      .toBuffer()
      .then(buffer => {
        const base64 = `data:image/jpeg;base64,${buffer.toString('base64')}`;
        console.log(`\n📝 Copy this blur placeholder for your project:\nblurDataURL: "${base64}"\n`);
      });

    console.log(`🎉 Image optimization complete!`);
    console.log(`📁 Files saved to: public/images/`);
    console.log(`🔗 Use in your project: "/images/${outputName}.jpg"`);

  } catch (error) {
    console.error('Error processing image:', error.message);
    process.exit(1);
  }
}

// CLI usage
const args = process.argv.slice(2);
if (args.length !== 2) {
  console.log('Usage: node scripts/optimize-image.js <input-path> <output-name>');
  console.log('Example: node scripts/optimize-image.js ~/screenshot.png my-project');
  process.exit(1);
}

optimizeImage(args[0], args[1]); 