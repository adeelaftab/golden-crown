const fs = require('fs');
const https = require('https');
const path = require('path');

// Create tile directory
const tileDir = path.join(__dirname, '..', 'public', 'products', 'tile');

if (!fs.existsSync(tileDir)) {
    fs.mkdirSync(tileDir, { recursive: true });
    console.log('✓ Created tile directory');
}

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(filepath);
                });
            } else {
                fs.unlink(filepath, () => {});
                reject(new Error(`Failed to download: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            reject(err);
        });
    });
}

const tileLogos = [
    { name: 'msi', url: 'https://logo.clearbit.com/msisurfaces.com' },
    { name: 'emser', url: 'https://logo.clearbit.com/emser.com' },
    { name: 'daltile', url: 'https://logo.clearbit.com/daltile.com' },
    { name: 'decovita', url: 'https://logo.clearbit.com/decovitausa.com' },
    { name: 'marazzi', url: 'https://logo.clearbit.com/marazziusa.com' },
    { name: 'conestoga', url: 'https://logo.clearbit.com/conestogatile.com' }
];

async function downloadTileLogos() {
    console.log('\n📥 Downloading Tile Logos...\n');
    
    for (const logo of tileLogos) {
        const filepath = path.join(tileDir, `${logo.name}.png`);
        try {
            await downloadImage(logo.url, filepath);
            console.log(`✓ Downloaded ${logo.name}`);
        } catch (error) {
            console.log(`✗ Failed to download ${logo.name}: ${error.message}`);
        }
    }
    
    console.log('\n✅ Download completed!\n');
}

downloadTileLogos();
