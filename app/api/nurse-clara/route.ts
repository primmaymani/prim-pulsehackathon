import { NextResponse } from "next/server";
import { getNurseClaraReply } from "@/lib/nurse-clara";

export async function POST(request: Request) {
  const body = (await request.json()) as { message?: string };
  const reply = getNurseClaraReply(body.message ?? "");

  return NextResponse.json({ reply });
}
