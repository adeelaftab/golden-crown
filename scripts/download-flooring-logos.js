const fs = require('fs');
const https = require('https');
const path = require('path');

// Create flooring directory
const flooringDir = path.join(__dirname, '..', 'public', 'products', 'flooring');

if (!fs.existsSync(flooringDir)) {
    fs.mkdirSync(flooringDir, { recursive: true });
    console.log('✓ Created flooring directory');
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

const flooringLogos = [
    { name: 'armstrong', url: 'https://logo.clearbit.com/armstrongflooring.com' },
    { name: 'bruce', url: 'https://logo.clearbit.com/bruce.com' },
    { name: 'mohawk', url: 'https://logo.clearbit.com/mohawkflooring.com' },
    { name: 'mirage', url: 'https://logo.clearbit.com/miragefloors.com' },
    { name: 'karndean', url: 'https://logo.clearbit.com/karndean.com' },
    { name: 'shaw', url: 'https://logo.clearbit.com/shawfloors.com' }
];

async function downloadFlooringLogos() {
    console.log('\n📥 Downloading Flooring & Carpet Logos...\n');
    
    for (const logo of flooringLogos) {
        const filepath = path.join(flooringDir, `${logo.name}.png`);
        try {
            await downloadImage(logo.url, filepath);
            console.log(`✓ Downloaded ${logo.name}`);
        } catch (error) {
            console.log(`✗ Failed to download ${logo.name}: ${error.message}`);
        }
    }
    
    console.log('\n✅ Download completed!\n');
}

downloadFlooringLogos();
