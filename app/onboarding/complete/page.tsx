import Link from "next/link";
import { CheckCircle2, HeartHandshake } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHero } from "@/components/page-hero";
import { patientProfile } from "@/data/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function OnboardingCompletePage() {
  return (
    <AppShell>
      <PageHero
        title={`Welcome, ${patientProfile.preferredName}`}
        description="Your profile is ready. Nurse Clara can now guide your home sessions, help with short check-ins, and share progress with your support circle."
      />
      <Card className="bg-[#EEF7F4]">
        <CardContent className="grid gap-4 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-primary" />
              <p className="font-serif text-3xl">Profile created</p>
            </div>
            <p className="text-lg leading-8 text-slate-700">
              Your plan is set to {patientProfile.duration} of {patientProfile.intensity.toLowerCase()} activity, with two home-based sessions each week.
            </p>
            <p className="text-muted-foreground">
              Nurse Clara can explain your plan again anytime and will never change your instructions on her own.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button size="lg" asChild>
              <Link href="/home">Go to home page</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/assistant">
                <HeartHandshake className="mr-2 h-5 w-5" />
                Meet Nurse Clara
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </AppShell>
  );
}
