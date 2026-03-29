import Link from "next/link";
import { ArrowRight, AlertTriangle, Heart } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PostSessionCheckin } from "@/components/post-session-checkin";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CheckinPage() {
  return (
    <AppShell>
      <div className="space-y-5">
        <Card className="border-none bg-hero-glow">
          <CardContent className="space-y-3 p-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <Heart className="h-5 w-5" />
              Session complete
            </div>
            <h1 className="font-serif text-4xl leading-tight text-slate-900">Just five quick check-in questions</h1>
            <p className="text-lg leading-8 text-slate-700">
              These help your care team stay informed. PulseCircle can mark concerns for review, but it does not give medical advice.
            </p>
          </CardContent>
        </Card>
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
