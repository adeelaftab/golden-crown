const fs = require('fs');
const https = require('https');
const path = require('path');

// Create fixture directory
const fixtureDir = path.join(__dirname, '..', 'public', 'products', 'fixture');

if (!fs.existsSync(fixtureDir)) {
    fs.mkdirSync(fixtureDir, { recursive: true });
    console.log('✓ Created fixture directory');
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

const fixtureLogos = [
    { name: 'delta', url: 'https://logo.clearbit.com/deltafaucet.com' },
    { name: 'moen', url: 'https://logo.clearbit.com/moen.com' },
    { name: 'kohler', url: 'https://logo.clearbit.com/kohler.com' },
    { name: 'american-standard', url: 'https://logo.clearbit.com/americanstandard-us.com' },
    { name: 'toto', url: 'https://logo.clearbit.com/totousa.com' },
    { name: 'brizo', url: 'https://logo.clearbit.com/brizo.com' },
    { name: 'kraus', url: 'https://logo.clearbit.com/kraususa.com' }
];

async function downloadFixtureLogos() {
    console.log('\n📥 Downloading Fixture Logos...\n');
    
    for (const logo of fixtureLogos) {
        const filepath = path.join(fixtureDir, `${logo.name}.png`);
        try {
            await downloadImage(logo.url, filepath);
            console.log(`✓ Downloaded ${logo.name}`);
        } catch (error) {
            console.log(`✗ Failed to download ${logo.name}: ${error.message}`);
        }
    }
    
    console.log('\n✅ Download completed!\n');
}

downloadFixtureLogos();
