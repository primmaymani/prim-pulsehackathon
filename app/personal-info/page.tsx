import { CalendarHeart, ClipboardList, HeartPulse, Mail, ShieldCheck, Watch, Phone } from "lucide-react";
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
            <p className="text-lg leading-8 text-slate-700"><strong>Care summary:</strong> home cardiac rehab support.</p>
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
                  <p className="text-2xl font-semibold"><strong>{patientContext.sessionsCompleted}</strong> of {patientContext.totalSessions} sessions completed</p>
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
                    {patientContext.redFlagTriggered ? "A care team flag is active." : "No care team alert."}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-[24px] bg-[#EEF7F4] p-4">
                <Watch className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Wearable connection</p>
                  <p className="text-muted-foreground">
                    {patientContext.wearableConnected
                      ? `${patientContext.wearableName} linked.`
                      : "No wearable linked."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-lg text-muted-foreground">
              <p><strong>Name:</strong> {patientProfile.name}</p>
              <p><strong>Age:</strong> {patientProfile.age}</p>
              <p><strong>Intensity:</strong> {patientProfile.intensity}</p>
              <p><strong>Duration:</strong> {patientProfile.duration}</p>
              <p><strong>Streak:</strong> {patientContext.streak} days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Support contacts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <div className="flex items-start gap-3 rounded-[24px] bg-background p-4">
                <Phone className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Emergency contact</p>
                  <p className="text-muted-foreground">{patientContext.emergencyContact}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-[24px] bg-background p-4">
                <Mail className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Care team contact</p>
                  <p className="text-muted-foreground">{patientContext.careTeamContact}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
