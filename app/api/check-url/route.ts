import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    const res = await fetch(url, { method: "HEAD" });
    return NextResponse.json({ ok: res.ok });
  } catch (error) {
    return NextResponse.json({ ok: false });
  }
}
