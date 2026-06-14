# CocoDrop Landing — Build Notes

## The strategy (SIT: Task Unification)
This is NOT a passive waitlist. It's a segmentation engine that sorts every
visitor into Maker / Creator / Shopper — so by launch you don't have "500 emails",
you have "40 makers, 25 creators, 200 shoppers" sorted and ready to activate in
the right order.

## Three innovation moves baked in
1. **Segmentation** — three paths, each with tailored pitch + benefits
2. **Live counter** — manufactured social proof, climbs on load
3. **Source tracking** — ?from=heartfm tailors the welcome AND tracks which
   radio station drove the most signups

## Google Sheet setup
Create a sheet "CocoDrop — Founding Community" with columns:
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
The live counter currently animates to a base number (247). To make it reflect
real signups, later wire the /api/join route to read the sheet row count and
return it as `total`. For launch, the base number creates momentum; bump it
manually as real signups grow.

## Domain swap on go-live
1. Now: cocodrop.co.za → this landing repo
2. Go-live: in Vercel, repoint cocodrop.co.za → cocodrop-platform repo
3. Optional: keep landing alive at join.cocodrop.co.za
