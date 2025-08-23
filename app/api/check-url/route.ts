import { NextRequest, NextResponse } from "next/server";

// Simple in-memory cache
const cache = new Map<string, { ok: boolean; ts: number }>();
const CACHE_DURATION = 5 * 60 * 1000;

export async function POST(req: NextRequest) {
    try {
        const { url } = await req.json();

        if (!url) {
            return NextResponse.json({ ok: false, error: "URL not provided" }, { status: 400 });
        }

        // Return cached result if recent
        const cached = cache.get(url);
        if (cached && Date.now() - cached.ts < CACHE_DURATION) {
            return NextResponse.json({ ok: cached.ok });
        }
        const res = await fetch(url, { method: "HEAD" }).catch(() => null);
        const ok = res?.ok ?? false;
        cache.set(url, { ok, ts: Date.now() });

        return NextResponse.json({ ok });
    } catch {
        return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
    }
}
