import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { MedicalRecordUploadCard } from "@/components/medical-record-upload-card";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { nurseClaraPrompts } from "@/data/mock-data";

export default function OnboardingUploadPage() {
  return (
    <AppShell>
      <PageHero
        title="Let’s read your rehab note together"
        description="Nurse Clara will turn your care note into a simple plan. Nothing is final until you review it."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <MedicalRecordUploadCard />
        <Card className="bg-[#FFF6E2]">
          <CardContent className="space-y-5 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white p-3 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Nurse Clara</p>
                <p className="text-sm text-muted-foreground">Warm onboarding guide</p>
              </div>
            </div>
            <p className="text-lg leading-8 text-slate-700">“{nurseClaraPrompts.onboarding}”</p>
            <div className="rounded-[24px] bg-white p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Reading your plan</p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-2/3 rounded-full bg-primary" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Simulated OCR and AI extraction for name, referral context, exercise pacing, and your weekly home plan.
              </p>
            </div>
            <Button size="lg" asChild className="w-full">
              <Link href="/onboarding/review">
                Continue to review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
