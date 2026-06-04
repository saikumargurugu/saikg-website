import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY!;
const MIN_SCORE = 0.5;

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message, recaptchaToken } = await req.json();

    // ── Basic field validation ──────────────────────────────────────────
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    if (name.length > 100 || email.length > 200 || message.length > 2000) {
      return NextResponse.json({ error: 'Field length exceeded.' }, { status: 400 });
    }

    // ── reCAPTCHA v3 verification ───────────────────────────────────────
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`,
    });

    const recaptchaData = await verifyRes.json();

    if (!recaptchaData.success || recaptchaData.score < MIN_SCORE) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 403 }
      );
    }

    // ── Write to Firestore ──────────────────────────────────────────────
    await addDoc(collection(db, 'messages'), {
      name:      name.trim(),
      email:     email.trim().toLowerCase(),
      subject:   subject?.trim() ?? '',
      message:   message.trim(),
      score:     recaptchaData.score,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
