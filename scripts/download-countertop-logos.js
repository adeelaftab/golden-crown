const fs = require('fs');
const https = require('https');
const path = require('path');

// Create countertop directory
const countertopDir = path.join(__dirname, '..', 'public', 'products', 'countertop');

if (!fs.existsSync(countertopDir)) {
    fs.mkdirSync(countertopDir, { recursive: true });
    console.log('✓ Created countertop directory');
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

const countertopLogos = [
    { name: 'msi', url: 'https://logo.clearbit.com/msisurfaces.com' },
    { name: 'daltile', url: 'https://logo.clearbit.com/daltile.com' },
    { name: 'caesarstone', url: 'https://logo.clearbit.com/caesarstoneus.com' },
    { name: 'cosentino', url: 'https://logo.clearbit.com/cosentino.com' },
    { name: 'cambria', url: 'https://logo.clearbit.com/cambriausa.com' }
];

async function downloadCountertopLogos() {
    console.log('\n📥 Downloading Countertop Logos...\n');
    
    for (const logo of countertopLogos) {
        const filepath = path.join(countertopDir, `${logo.name}.png`);
        try {
            await downloadImage(logo.url, filepath);
            console.log(`✓ Downloaded ${logo.name}`);
        } catch (error) {
            console.log(`✗ Failed to download ${logo.name}: ${error.message}`);
        }
    }
    
    console.log('\n✅ Download completed!\n');
}

downloadCountertopLogos();
