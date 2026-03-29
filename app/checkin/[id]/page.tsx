import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PostSessionCheckin } from "@/components/post-session-checkin";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CheckinPage() {
  return (
    <AppShell>
      <PageHero
        title="A short check-in before we celebrate"
        description="These questions help keep your care team informed. If something sounds concerning, PulseCircle can mark it for follow-up without offering medical advice."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <PostSessionCheckin />
        <Card className="bg-[#FFF8E7]">
          <CardContent className="space-y-5 p-6">
            <div className="rounded-[24px] bg-white p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Safe escalation example</p>
              <div className="mt-3 flex items-start gap-3">
                <AlertTriangle className="mt-1 h-5 w-5 text-rose-500" />
                <p className="text-sm leading-7 text-slate-700">
                  If the patient reports unexpected shortness of breath, dizziness, or chest discomfort, the app shows a calm handoff message and alerts the care team dashboard.
                </p>
              </div>
            </div>
            <PostSessionCheckin escalated />
            <Button size="lg" asChild className="w-full">
              <Link href="/encouragement">
                Continue to encouragement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
