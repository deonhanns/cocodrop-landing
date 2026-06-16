import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const webhook = process.env.GOOGLE_SHEET_WEBHOOK;
    if (!webhook) return NextResponse.json({ count: 0 });
    const res = await fetch(webhook, { method: "GET", cache: "no-store" });
    if (!res.ok) return NextResponse.json({ count: 0 });
    const data = await res.json();
    const count = typeof data.count === "number" ? data.count : 0;
    return NextResponse.json({ count });
  } catch (e) {
    return NextResponse.json({ count: 0 });
  }
}
