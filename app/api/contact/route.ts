import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { title, body, email, token } = await req.json();

    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${encodeURIComponent(process.env.TURNSTILE_SECRET_KEY!)}&response=${encodeURIComponent(token)}`,
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) return NextResponse.json({ error: "Verification failed" }, { status: 400 });
    try {
        await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL!,
            to: [process.env.RESEND_TO_EMAIL!],
            subject: `Rumiani.ir: ${title}`,
            replyTo: email,
            text: `From: ${email}\n Message:${body}`,
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
