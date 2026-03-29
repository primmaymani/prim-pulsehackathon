import { Mic, Repeat2, ShieldPlus, Volume2 } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHero } from "@/components/page-hero";
import { nurseClaraPrompts } from "@/data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AssistantPage() {
  return (
    <AppShell activeHref="/assistant">
      <PageHero
        title="Nurse Clara"
        description="A persistent assistant who explains, reassures, repeats instructions, and helps hand off concerning symptoms to the care team."
      />
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <Card className="bg-[#FFF8E7]">
          <CardHeader>
            <CardTitle>Conversation and voice mode shell</CardTitle>
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
              <CardTitle>Assistant controls</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Button size="lg" className="justify-start gap-2">
                <Mic className="h-5 w-5" />
                Start voice mode
              </Button>
              <Button size="lg" variant="outline" className="justify-start gap-2">
                <Repeat2 className="h-5 w-5" />
                Repeat last instruction
              </Button>
              <Button size="lg" variant="secondary" className="justify-start gap-2">
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
