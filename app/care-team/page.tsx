import { AlertCircle, ClipboardList, Users } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { CareTeamAlertTable } from "@/components/care-team-alert-table";
import { PageHero } from "@/components/page-hero";
import { patientProfile } from "@/data/mock-data";
import { Card, CardContent } from "@/components/ui/card";

export default function CareTeamPage() {
  return (
    <AppShell activeHref="/care-team">
      <PageHero
        title="Care team dashboard"
        description="A lightweight view of patient progress, check-in responses, recent sessions, and symptom-based alerts that need follow-up."
      />
      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="space-y-2 p-6">
              <Users className="h-6 w-6 text-primary" />
              <p className="font-serif text-3xl">12</p>
              <p className="text-muted-foreground">Patients in current pilot list</p>
            </CardContent>
          </Card>
          <Card className="bg-[#FFF8E7]">
            <CardContent className="space-y-2 p-6">
              <ClipboardList className="h-6 w-6 text-primary" />
              <p className="font-serif text-3xl">8</p>
              <p className="text-muted-foreground">Session summaries reviewed today</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50">
            <CardContent className="space-y-2 p-6">
              <AlertCircle className="h-6 w-6 text-rose-500" />
              <p className="font-serif text-3xl">1</p>
              <p className="text-muted-foreground">Patient with symptom alert requiring follow-up</p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardContent className="grid gap-4 p-6 md:grid-cols-3">
            <div className="rounded-[24px] bg-secondary/50 p-5">
              <p className="text-sm text-muted-foreground">Patient list</p>
              <p className="mt-2 text-xl font-medium">{patientProfile.name}</p>
              <p className="text-sm text-muted-foreground">{patientProfile.diagnosisContext}</p>
            </div>
            <div className="rounded-[24px] bg-[#EEF5F8] p-5">
              <p className="text-sm text-muted-foreground">Latest check-in signal</p>
              <p className="mt-2 text-xl font-medium">Confidence 4/5</p>
              <p className="text-sm text-muted-foreground">Mild expected breathlessness, no chest discomfort reported in latest normal session.</p>
            </div>
            <div className="rounded-[24px] bg-[#FFF4F1] p-5">
              <p className="text-sm text-muted-foreground">Escalation path</p>
              <p className="mt-2 text-xl font-medium">Care coordinator notified</p>
              <p className="text-sm text-muted-foreground">Flagged session held for review. No automated medical recommendations are shown to the patient.</p>
            </div>
          </CardContent>
        </Card>
        <CareTeamAlertTable />
      </div>
    </AppShell>
  );
}
