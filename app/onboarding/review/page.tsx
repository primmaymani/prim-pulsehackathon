import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ExtractedProfileSummary } from "@/components/extracted-profile-summary";
import { PageHero } from "@/components/page-hero";
import { RepeatInstructionButton } from "@/components/repeat-instruction-button";
import { Button } from "@/components/ui/button";

export default function OnboardingReviewPage() {
  return (
    <AppShell>
      <PageHero
        title="Please check that this looks right"
        description="You can edit any part of the extracted plan before your profile is created. Nurse Clara keeps the language simple on purpose."
        actions={<RepeatInstructionButton />}
      />
      <div className="space-y-6">
        <ExtractedProfileSummary />
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/onboarding/complete">
              Create profile
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline">
            Edit details
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
