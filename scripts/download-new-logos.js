const fs = require('fs');
const https = require('https');
const path = require('path');

const cabinetryDir = path.join(__dirname, '..', 'public', 'products', 'cabinetry');

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

const newLogos = [
    { name: 'kraftmaid', url: 'https://logo.clearbit.com/kraftmaid.com' },
    { name: 'crestwood', url: 'https://logo.clearbit.com/crestwood-inc.com' }
];

async function downloadNewLogos() {
    console.log('\n📥 Downloading New Cabinetry Logos...\n');
    
    for (const logo of newLogos) {
        const filepath = path.join(cabinetryDir, `${logo.name}.png`);
        try {
            await downloadImage(logo.url, filepath);
            console.log(`✓ Downloaded ${logo.name}`);
        } catch (error) {
            console.log(`✗ Failed to download ${logo.name}: ${error.message}`);
        }
    }
    
    console.log('\n✅ Download completed!\n');
}

downloadNewLogos();
