import Link from "next/link";
import { ArrowLeft, HeartPulse } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { FocusModePanel } from "@/components/focus-mode-panel";
import { WearableMetricsCard } from "@/components/wearable-metrics-card";
import { Button } from "@/components/ui/button";

export default function SessionPage() {
  return (
    <AppShell>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <Button variant="ghost" asChild className="h-12 rounded-full px-4 text-base">
            <Link href="/home">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back
            </Link>
          </Button>
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-base">
            <HeartPulse className="h-5 w-5 text-primary" />
            Gentle pace
          </div>
        </div>
        <FocusModePanel />
        <WearableMetricsCard />
      </div>
    </AppShell>
  );
}
