import { NextResponse } from "next/server";

interface SubscribeBody {
  name?: string;
  email?: string;
  message?: string;
  source?: string;
}

export async function POST(request: Request) {
  try {
    const body: SubscribeBody = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();
    const source = body.source || "unknown";

    if (!name) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }

    // Stub: log for now; wire to Mailchimp/ConvertKit later
    console.log("[subscribe]", { name, email, message, source, timestamp: new Date().toISOString() });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
