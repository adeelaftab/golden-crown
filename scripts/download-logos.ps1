# PowerShell script to download company logos

# Create directories
New-Item -ItemType Directory -Force -Path "public\partners"
New-Item -ItemType Directory -Force -Path "public\products\cabinetry"

Write-Host "Downloading Partner Logos..." -ForegroundColor Green

# Partners logos - using direct logo URLs or favicons
$partners = @(
    @{name="build"; url="https://www.build.com/assets/images/build-logo.svg"},
    @{name="carter-lumber"; url="https://www.carterlumber.com/images/logo.png"},
    @{name="lansing"; url="https://lansingbp.com/wp-content/uploads/2019/06/LBP_Logo.png"},
    @{name="tw-perry"; url="https://www.twperry.com/images/logo.png"},
    @{name="sislers"; url="https://sislersstone.com/wp-content/uploads/2019/11/sislers-logo.png"},
    @{name="abc-supply"; url="https://www.abcsupply.com/media/images/abc-logo.png"},
    @{name="general-shale"; url="https://generalshalebrickmanassas.com/wp-content/uploads/2020/01/general-shale-logo.png"},
    @{name="aj-madison"; url="https://www.ajmadison.com/images/ajmadison-logo.png"},
    @{name="somerville"; url="https://www.tsconline.com/images/logo.png"},
    @{name="sherwin-williams"; url="https://www.sherwin-williams.com/etc/designs/sw/en/images/global/logo.svg"}
)

foreach ($partner in $partners) {
    $filename = "public\partners\$($partner.name).png"
    try {
        Write-Host "Downloading $($partner.name)..." -ForegroundColor Yellow
        Invoke-WebRequest -Uri $partner.url -OutFile $filename -ErrorAction Stop
        Write-Host "✓ Downloaded $($partner.name)" -ForegroundColor Green
    } catch {
        Write-Host "✗ Failed to download $($partner.name): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`nDownloading Cabinetry Product Logos..." -ForegroundColor Green

# Cabinetry logos
$cabinetry = @(
    @{name="kemper"; url="https://www.kemper.com/wp-content/themes/kemper/images/logo.png"},
    @{name="decora"; url="https://www.decoracabinets.com/assets/images/decora-logo.png"},
    @{name="fabuwood"; url="https://www.fabuwood.com/wp-content/uploads/2019/01/fabuwood-logo.png"},
    @{name="forevermark"; url="https://www.forevermarkcabinetry.com/images/logo.png"},
    @{name="mantra"; url="https://www.mantracabinets.com/images/logo.png"},
    @{name="ultracraft"; url="https://www.ultracraft.com/images/logo.png"},
    @{name="urban-effects"; url="https://www.urbaneffects.com/images/logo.png"},
    @{name="showplace"; url="https://www.showplacewood.com/images/logo.png"},
    @{name="silestone"; url="https://www.silestone.com/wp-content/uploads/2019/01/silestone-logo.png"},
    @{name="kohler"; url="https://www.kohler.com/etc/designs/kohler/images/logo.svg"}
)

foreach ($cabinet in $cabinetry) {
    $filename = "public\products\cabinetry\$($cabinet.name).png"
    try {
        Write-Host "Downloading $($cabinet.name)..." -ForegroundColor Yellow
        Invoke-WebRequest -Uri $cabinet.url -OutFile $filename -ErrorAction Stop
        Write-Host "✓ Downloaded $($cabinet.name)" -ForegroundColor Green
    } catch {
        Write-Host "✗ Failed to download $($cabinet.name): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`n✓ Logo download process completed!" -ForegroundColor Green
Write-Host "`nNote: Some logos may have failed to download. You can:" -ForegroundColor Cyan
Write-Host "1. Manually download from company websites" -ForegroundColor Cyan
Write-Host "2. Use the image you provided and crop individual logos" -ForegroundColor Cyan
Write-Host "3. Use placeholder images temporarily" -ForegroundColor Cyan
