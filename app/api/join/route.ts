// app/api/join/route.ts
// Receives an early-adopter signup and appends to the Google Sheet.

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { role, name, contact, extra, source, joinedAt } = body;

    if (!role || !name || !contact) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const webhook = process.env.GOOGLE_SHEET_WEBHOOK;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          joinedAt,
          name,
          role,
          contact,
          extra: extra || "",
          source: source || "direct",
        }),
      });
    } else {
      console.log("NEW SIGNUP:", JSON.stringify(body, null, 2));
    }

    // Optional: return an updated total to bump the live counter.
    // For now we return undefined; the counter uses its base number.
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Join error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
