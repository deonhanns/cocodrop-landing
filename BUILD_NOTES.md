# CocoDrop Landing — Build Notes

## The strategy (Beta Launch — 50 Testers)
This is a closed beta recruitment page. It recruits exactly 50 testers across
three roles (Maker / Creator / Shopper) who will test the CocoDrop app, record
their sessions via CocoDrop Lens, and provide feedback that shapes the final
product before public launch.

## Three innovation moves baked in
1. **Segmentation** — three paths, each with tailored pitch + benefits
2. **Live counter** — shows X of 50 beta spots filled (real scarcity)
3. **Source tracking** — ?from=heartfm tailors the welcome AND tracks which
   radio station drove the most signups

## Google Sheet setup
Create a sheet "CocoDrop — Beta Testers" with columns:
Joined At | Name | Role | Contact | Extra | Source

Apps Script (Extensions → Apps Script):
```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const d = JSON.parse(e.postData.contents);
  sheet.appendRow([d.joinedAt, d.name, d.role, d.contact, d.extra, d.source]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```
Deploy as Web App → Execute as Me → Anyone access → copy URL into
GOOGLE_SHEET_WEBHOOK.

## Counter note
The counter animates to a base of 50 (total beta spots). When a signup comes
in, the API can return an updated count. Once 50 is reached, the page should
show "Beta full — thanks!" and stop accepting submissions.

## Tester distribution (recommended)
- 20 Shopper testers (split across first-impression, buy flow, live drop)
- 15 Creator testers (host flow)
- 15 Maker testers (listing flow)

## Domain plan
1. Now: cocodrop.co.za → this landing repo
2. Post-beta: repoint cocodrop.co.za → cocodrop-platform repo
3. Optional: keep landing alive at join.cocodrop.co.za
