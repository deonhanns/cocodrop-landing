# CocoDrop Landing — Beta Recruitment

Recruitment page for the CocoDrop closed beta. 50 testers across three roles
(Maker, Creator, Shopper) will test the app and shape the final product.

## What it does
- **Segments signups** into Maker / Creator / Shopper paths
- **Live counter** showing X of 50 beta spots filled
- **Source tracking** via `?from=heartfm` etc — tailored welcome + tracks which radio station drove signups
- Captures everything to a Google Sheet

## Source links for campaigns
- `cocodrop.co.za?from=heartfm`
- `cocodrop.co.za?from=kfm`
- `cocodrop.co.za?from=capetalk`
- `cocodrop.co.za?from=youthday`
- `cocodrop.co.za?from=5fm`
- `cocodrop.co.za?from=metro`

## Quick start
```bash
npm install
npm run dev
```

## Env
```
GOOGLE_SHEET_WEBHOOK=your_apps_script_url
```

## Deploy
Push to GitHub, connect to Vercel, point cocodrop.co.za at it.
Post-beta, repoint the domain to the platform repo.

---
*CocoDrop · Beta Launch · 2026*
