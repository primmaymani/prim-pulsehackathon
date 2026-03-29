import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { TrainingSessionPanel } from "@/components/training-session-panel";
import { WearableMetricsCard } from "@/components/wearable-metrics-card";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export default function SessionPage() {
  return (
    <AppShell>
      <PageHero
        title="Today’s home session"
        description="A calm, guided routine with an easy timer, repeatable instructions, and a wearable snapshot. This screen is designed to feel reassuring instead of overwhelming."
      />
      <div className="space-y-6">
        <TrainingSessionPanel />
        <WearableMetricsCard />
        <div className="flex justify-end">
          <Button size="lg" asChild>
            <Link href="/checkin/session-2">
              Finish and answer check-in
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
