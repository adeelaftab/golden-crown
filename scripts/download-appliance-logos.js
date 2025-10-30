const fs = require('fs');
const https = require('https');
const path = require('path');

// Create appliance directory
const applianceDir = path.join(__dirname, '..', 'public', 'products', 'appliance');

if (!fs.existsSync(applianceDir)) {
    fs.mkdirSync(applianceDir, { recursive: true });
    console.log('✓ Created appliance directory');
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

const applianceLogos = [
    { name: 'aj-madison', url: 'https://logo.clearbit.com/ajmadison.com' },
    { name: 'abw', url: 'https://logo.clearbit.com/abwappliances.com' }
];

async function downloadApplianceLogos() {
    console.log('\n📥 Downloading Appliance Logos...\n');
    
    for (const logo of applianceLogos) {
        const filepath = path.join(applianceDir, `${logo.name}.png`);
        try {
            await downloadImage(logo.url, filepath);
            console.log(`✓ Downloaded ${logo.name}`);
        } catch (error) {
            console.log(`✗ Failed to download ${logo.name}: ${error.message}`);
        }
    }
    
    console.log('\n✅ Download completed!\n');
}

downloadApplianceLogos();
