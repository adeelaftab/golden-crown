const fs = require('fs');
const https = require('https');
const path = require('path');

// Create window-door directory
const windowDoorDir = path.join(__dirname, '..', 'public', 'products', 'window-door');

if (!fs.existsSync(windowDoorDir)) {
    fs.mkdirSync(windowDoorDir, { recursive: true });
    console.log('✓ Created window-door directory');
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

const windowDoorLogos = [
    { name: 'pella', url: 'https://logo.clearbit.com/pella.com' },
    { name: 'marvin', url: 'https://logo.clearbit.com/marvin.com' },
    { name: 'andersen', url: 'https://logo.clearbit.com/andersenwindows.com' },
    { name: 'simonton', url: 'https://logo.clearbit.com/simonton.com' },
    { name: 'plygem', url: 'https://logo.clearbit.com/plygem.com' },
    { name: 'mi', url: 'https://logo.clearbit.com/miwindows.com' },
    { name: 'provia', url: 'https://logo.clearbit.com/provia.com' },
    { name: 'harvey', url: 'https://logo.clearbit.com/harveywindows.com' },
    { name: 'thermatru', url: 'https://logo.clearbit.com/thermatru.com' },
    { name: 'reeb', url: 'https://logo.clearbit.com/reeb.com' },
    { name: 'jeldwen', url: 'https://logo.clearbit.com/jeld-wen.com' }
];

async function downloadWindowDoorLogos() {
    console.log('\n📥 Downloading Window & Door Logos...\n');
    
    for (const logo of windowDoorLogos) {
        const filepath = path.join(windowDoorDir, `${logo.name}.png`);
        try {
            await downloadImage(logo.url, filepath);
            console.log(`✓ Downloaded ${logo.name}`);
        } catch (error) {
            console.log(`✗ Failed to download ${logo.name}: ${error.message}`);
        }
    }
    
    console.log('\n✅ Download completed!\n');
}

downloadWindowDoorLogos();
