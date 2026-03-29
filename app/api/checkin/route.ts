import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const checkinsPath = path.join(process.cwd(), "data", "checkins.json");

type CheckinPayload = {
  sessionId: string;
  answers: Record<string, string>;
  escalated: boolean;
  submittedAt: string;
};

export async function GET() {
  const raw = await fs.readFile(checkinsPath, "utf8");
  return NextResponse.json(JSON.parse(raw));
}

export async function POST(request: Request) {
  const payload = (await request.json()) as CheckinPayload;

  if (!payload.sessionId || !payload.answers || Object.keys(payload.answers).length === 0) {
    return NextResponse.json({ error: "Missing required check-in fields." }, { status: 400 });
  }

  const raw = await fs.readFile(checkinsPath, "utf8");
  const existing = JSON.parse(raw) as CheckinPayload[];
  const updated = [payload, ...existing];

  await fs.writeFile(checkinsPath, JSON.stringify(updated, null, 2));

  return NextResponse.json({ ok: true, saved: payload });
}
