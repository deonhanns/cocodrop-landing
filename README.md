# CocoDrop Landing 🪂

The public founding-member landing page for CocoDrop. Where radio listeners and social followers go to join as a Maker, Creator, or Shopper before launch.

## What it does
- **Segments signups** into Maker / Creator / Shopper paths
- **Live counter** showing how many have joined (social proof)
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
On go-live, repoint the domain to the platform repo.

---
*CocoDrop · Founding Community · 2026*
