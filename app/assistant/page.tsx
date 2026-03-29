import { Mic, Repeat2, ShieldPlus, Volume2 } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { nurseClaraPrompts } from "@/data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AssistantPage() {
  return (
    <AppShell activeHref="/assistant">
      <div className="space-y-5">
        <Card className="border-none bg-hero-glow">
          <CardContent className="space-y-3 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-primary/80">Nurse Clara</p>
            <h1 className="font-serif text-4xl leading-tight text-slate-900">Warm, gentle support anytime</h1>
            <p className="text-lg leading-8 text-slate-700">
              Nurse Clara can explain, repeat, summarize, and help notify the care team if something sounds concerning.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#FFF8E7]">
          <CardHeader>
            <CardTitle className="text-3xl">Conversation and voice mode</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(nurseClaraPrompts).map(([key, value]) => (
              <div key={key} className="rounded-[24px] bg-white p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{key}</p>
                <p className="mt-2 text-lg leading-8 text-slate-700">“{value}”</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Assistant controls</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Button size="lg" className="h-14 justify-start gap-2 text-lg">
                <Mic className="h-5 w-5" />
                Start voice mode
              </Button>
              <Button size="lg" variant="outline" className="h-14 justify-start gap-2 text-lg">
                <Repeat2 className="h-5 w-5" />
                Repeat last instruction
              </Button>
              <Button size="lg" variant="secondary" className="h-14 justify-start gap-2 text-lg">
                <Volume2 className="h-5 w-5" />
                Read today’s plan aloud
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-[#EEF5F8]">
            <CardContent className="space-y-3 p-6">
              <div className="inline-flex items-center gap-2 text-primary">
                <ShieldPlus className="h-5 w-5" />
                Safety guardrails
              </div>
              <p className="text-base leading-7 text-slate-700">
                Nurse Clara never changes the patient’s care plan, never gives diagnosis, and never presents independent medical judgment. The assistant may explain, summarize, encourage, and escalate.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
