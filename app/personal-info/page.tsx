import { CalendarHeart, ClipboardList, HeartPulse, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { patientContext, patientProfile } from "@/data/mock-data";

export default function PersonalInfoPage() {
  return (
    <AppShell activeHref="/personal-info">
      <div className="space-y-5">
        <Card className="border-none bg-hero-glow">
          <CardContent className="space-y-3 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-primary/80">Personal info</p>
            <h1 className="font-serif text-4xl leading-tight text-slate-900">{patientContext.patientName}</h1>
            <p className="text-lg leading-8 text-slate-700">{patientProfile.diagnosisContext}</p>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <Card>
            <CardContent className="grid gap-4 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-secondary p-3 text-primary">
                  <ClipboardList className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Program progress</p>
                  <p className="text-2xl font-semibold">{patientContext.sessionsCompleted} of {patientContext.totalSessions} sessions completed</p>
                </div>
              </div>
              <div className="h-4 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${(patientContext.sessionsCompleted / patientContext.totalSessions) * 100}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Care details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <div className="flex items-start gap-3 rounded-[24px] bg-secondary/55 p-4">
                <HeartPulse className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Last activity</p>
                  <p className="text-muted-foreground">{patientContext.lastActivity}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-[24px] bg-[#EEF5F8] p-4">
                <CalendarHeart className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Care team goals</p>
                  <p className="text-muted-foreground">{patientContext.careTeamGoals}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-[24px] bg-[#FFF8E7] p-4">
                <ShieldCheck className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Current safety status</p>
                  <p className="text-muted-foreground">
                    {patientContext.redFlagTriggered ? "A care team flag is active." : "No care team alert is currently active."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profile summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-lg text-muted-foreground">
              <p>Name: {patientProfile.name}</p>
              <p>Age: {patientProfile.age}</p>
              <p>Suggested exercise intensity: {patientProfile.intensity}</p>
              <p>Suggested duration: {patientProfile.duration}</p>
              <p>Current streak: {patientContext.streak} days</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
