const fs = require('fs');
const https = require('https');
const path = require('path');

// Create deck-railing directory
const deckRailingDir = path.join(__dirname, '..', 'public', 'products', 'deck-railing');

if (!fs.existsSync(deckRailingDir)) {
    fs.mkdirSync(deckRailingDir, { recursive: true });
    console.log('✓ Created deck-railing directory');
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

const deckRailingLogos = [
    { name: 'trex', url: 'https://logo.clearbit.com/trex.com' },
    { name: 'timbertech', url: 'https://logo.clearbit.com/timbertech.com' },
    { name: 'wolf', url: 'https://logo.clearbit.com/wolfhomeproducts.com' },
    { name: 'fiberon', url: 'https://logo.clearbit.com/fiberondecking.com' }
];

async function downloadDeckRailingLogos() {
    console.log('\n📥 Downloading Deck & Railing Logos...\n');
    
    for (const logo of deckRailingLogos) {
        const filepath = path.join(deckRailingDir, `${logo.name}.png`);
        try {
            await downloadImage(logo.url, filepath);
            console.log(`✓ Downloaded ${logo.name}`);
        } catch (error) {
            console.log(`✗ Failed to download ${logo.name}: ${error.message}`);
        }
    }
    
    console.log('\n✅ Download completed!\n');
}

downloadDeckRailingLogos();
