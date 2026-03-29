import { ShieldPlus } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { nurseClaraPrompts } from "@/data/mock-data";
import { VoiceAssistantPanel } from "@/components/voice-assistant-panel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AssistantPage() {
  return (
    <AppShell activeHref="/assistant">
      <div className="space-y-5">
        <Card className="border-none bg-hero-glow">
          <CardContent className="space-y-3 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-primary/80">Nurse Clara</p>
            <h1 className="font-serif text-4xl leading-tight text-slate-900">Support anytime</h1>
            <p className="text-lg leading-8 text-slate-700">
              Nurse Clara can <strong>explain</strong>, <strong>repeat</strong>, and help contact the <strong>care team</strong>.
            </p>
          </CardContent>
        </Card>
        <VoiceAssistantPanel />
        <Card className="bg-[#FFF8E7]">
          <CardHeader>
            <CardTitle className="text-3xl">Helpful prompts</CardTitle>
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
        <Card className="bg-[#EEF5F8]">
          <CardContent className="space-y-3 p-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <ShieldPlus className="h-5 w-5" />
              Safety
            </div>
            <p className="text-base leading-7 text-slate-700">
              Nurse Clara does <strong>not</strong> change your care plan or give medical advice.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
