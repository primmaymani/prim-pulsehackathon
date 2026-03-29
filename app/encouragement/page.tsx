import Link from "next/link";
import { Heart, Users } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { EncouragementFeed } from "@/components/encouragement-feed";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EncouragementPage() {
  return (
    <AppShell>
      <PageHero
        title="You did today’s part"
        description="After each completed session, PulseCircle shares progress with the support circle so the patient feels encouraged, not alone."
      />
      <div className="space-y-6">
        <Card className="bg-[#EEF7F4]">
          <CardContent className="flex flex-col gap-4 p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-primary">
                <Heart className="h-5 w-5" />
                Session complete
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                Nurse Clara has shared a simple progress update with approved supporters. No medical interpretation is included.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/supporters">Open supporter view</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/community">
                  <Users className="mr-2 h-5 w-5" />
                  Visit community
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <EncouragementFeed />
      </div>
    </AppShell>
  );
}
