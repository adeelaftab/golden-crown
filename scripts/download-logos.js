const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

// Create directories
const partnersDir = path.join(__dirname, '..', 'public', 'partners');
const cabinetryDir = path.join(__dirname, '..', 'public', 'products', 'cabinetry');

if (!fs.existsSync(partnersDir)) {
    fs.mkdirSync(partnersDir, { recursive: true });
    console.log('✓ Created partners directory');
}

if (!fs.existsSync(cabinetryDir)) {
    fs.mkdirSync(cabinetryDir, { recursive: true });
    console.log('✓ Created cabinetry directory');
}

// Download function
function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(filepath);
        
        protocol.get(url, (response) => {
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

// Logo URLs - these are example URLs, actual URLs may vary
const logos = {
    partners: [
        { name: 'build', url: 'https://logo.clearbit.com/build.com' },
        { name: 'carter-lumber', url: 'https://logo.clearbit.com/carterlumber.com' },
        { name: 'lansing', url: 'https://logo.clearbit.com/lansingbp.com' },
        { name: 'tw-perry', url: 'https://logo.clearbit.com/twperry.com' },
        { name: 'sislers', url: 'https://logo.clearbit.com/sislersstone.com' },
        { name: 'abc-supply', url: 'https://logo.clearbit.com/abcsupply.com' },
        { name: 'general-shale', url: 'https://logo.clearbit.com/generalshalebrickmanassas.com' },
        { name: 'aj-madison', url: 'https://logo.clearbit.com/ajmadison.com' },
        { name: 'somerville', url: 'https://logo.clearbit.com/tsconline.com' },
        { name: 'sherwin-williams', url: 'https://logo.clearbit.com/sherwin-williams.com' }
    ],
    cabinetry: [
        { name: 'kemper', url: 'https://logo.clearbit.com/kemper.com' },
        { name: 'decora', url: 'https://logo.clearbit.com/decoracabinets.com' },
        { name: 'fabuwood', url: 'https://logo.clearbit.com/fabuwood.com' },
        { name: 'forevermark', url: 'https://logo.clearbit.com/forevermarkcabinetry.com' },
        { name: 'mantra', url: 'https://logo.clearbit.com/mantracabinets.com' },
        { name: 'ultracraft', url: 'https://logo.clearbit.com/ultracraft.com' },
        { name: 'urban-effects', url: 'https://logo.clearbit.com/urbaneffects.com' },
        { name: 'showplace', url: 'https://logo.clearbit.com/showplacewood.com' },
        { name: 'silestone', url: 'https://logo.clearbit.com/silestone.com' },
        { name: 'kohler', url: 'https://logo.clearbit.com/kohler.com' }
    ]
};

async function downloadAllLogos() {
    console.log('\n📥 Downloading Partner Logos...\n');
    
    for (const logo of logos.partners) {
        const filepath = path.join(partnersDir, `${logo.name}.png`);
        try {
            await downloadImage(logo.url, filepath);
            console.log(`✓ Downloaded ${logo.name}`);
        } catch (error) {
            console.log(`✗ Failed to download ${logo.name}: ${error.message}`);
        }
    }
    
    console.log('\n📥 Downloading Cabinetry Logos...\n');
    
    for (const logo of logos.cabinetry) {
        const filepath = path.join(cabinetryDir, `${logo.name}.png`);
        try {
            await downloadImage(logo.url, filepath);
            console.log(`✓ Downloaded ${logo.name}`);
        } catch (error) {
            console.log(`✗ Failed to download ${logo.name}: ${error.message}`);
        }
    }
    
    console.log('\n✅ Logo download process completed!\n');
    console.log('📝 Note: Some logos may need to be manually downloaded or cropped from your provided image.\n');
}

downloadAllLogos();
