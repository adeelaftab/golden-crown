# Logo Download Guide

## Option 1: Run the Download Script (Recommended)

1. Open PowerShell in the project root directory
2. Run: `node scripts/download-logos.js`
   OR
   Run: `.\scripts\download-logos.ps1`

This will attempt to automatically download logos using the Clearbit API.

---

## Option 2: Manual Download Links

### Partners Logos (Save in `public/partners/`)

1. **Build.com** → `build.png`
   - Visit: https://www.build.com
   - Right-click logo → Save image as

2. **Carter Lumber** → `carter-lumber.png`
   - Visit: https://www.carterlumber.com
   - Download logo from their website

3. **Lansing Building Products** → `lansing.png`
   - Visit: https://lansingbp.com
   - Download logo

4. **TW Perry** → `tw-perry.png`
   - Visit: https://www.twperry.com
   - Download logo

5. **Sislers Stone** → `sislers.png`
   - Visit: https://sislersstone.com
   - Download logo

6. **ABC Supply** → `abc-supply.png`
   - Visit: https://www.abcsupply.com
   - Download logo

7. **General Shale Brick** → `general-shale.png`
   - Visit: https://generalshalebrickmanassas.com
   - Download logo

8. **AJ Madison** → `aj-madison.png`
   - Visit: https://www.ajmadison.com
   - Download logo

9. **Thos. Somerville Co.** → `somerville.png`
   - Visit: https://www.tsconline.com
   - Download logo

10. **Sherwin-Williams** → `sherwin-williams.png`
    - Visit: https://www.sherwin-williams.com
    - Download logo

---

### Cabinetry Product Logos (Save in `public/products/cabinetry/`)

**EASIEST METHOD:** Crop from the image you already uploaded!

From your composite image, crop each logo individually:

1. **kemper.png** - Top left logo (Kemper)
2. **decora.png** - Top second logo (Decora)
3. **fabuwood.png** - Top third logo (Fabuwood)
4. **forevermark.png** - Top right logo with tree (Forevermark)
5. **mantra.png** - Middle left (MANTRA)
6. **ultracraft.png** - Middle second (ultracraft)
7. **urban-effects.png** - Middle third (URBAN EFFECTS CABINETRY)
8. **showplace.png** - Middle right (SHOWPLACE CABINETRY)
9. **silestone.png** - Bottom left (silestone by COSENTINO)
10. **kohler.png** - Bottom right (THE BOLD LOOK OF KOHLER)

---

## Option 3: Use Logo APIs

You can also try these automatic logo services:

### Clearbit Logo API (Free)
```
https://logo.clearbit.com/{domain}
```

Example:
- Build.com: https://logo.clearbit.com/build.com
- Kohler: https://logo.clearbit.com/kohler.com

---

## Recommended Image Specifications

- **Format:** PNG (with transparent background preferred)
- **Size:** 400x200px or similar (consistent across all logos)
- **Resolution:** 72-150 DPI for web
- **Background:** Transparent or white

---

## Quick Test

After adding logos, refresh your browser and navigate to:
`http://localhost:3000/products-partners`

The logos should display automatically!
