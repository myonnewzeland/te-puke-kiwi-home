import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = './src/assets';

const files = [
    'hero-kiwifruit.jpg',
    'seasonal-work.jpg',
    'cabins.jpg',
    'caravans.jpg',
    'pods.jpg'
];

async function run() {
    for (const file of files) {
        const input = path.join(assetsDir, file);
        if (!fs.existsSync(input)) {
            console.warn(`File not found: ${input}`);
            continue;
        }
        const webpOutput = path.join(assetsDir, file.replace('.jpg', '.webp'));
        console.log(`Processing ${input}...`);
        try {
            await sharp(input)
                .resize({ width: 1920, withoutEnlargement: true })
                .webp({ quality: 65, effort: 6 })
                .toFile(webpOutput);
            console.log(`Saved ${webpOutput}`);
        } catch (e) {
            console.error(`Error processing ${input}:`, e);
        }
    }
}

run();
