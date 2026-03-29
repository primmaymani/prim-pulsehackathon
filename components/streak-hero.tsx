import Link from "next/link";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { patientProfile } from "@/data/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function StreakHero() {
  return (
    <Card className="overflow-hidden border-none bg-hero-glow">
      <CardContent className="grid gap-8 p-8 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-5">
          <Badge className="w-fit gap-2 rounded-full bg-white/80 px-4 py-2 text-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            {patientProfile.preferredName}, you are on a {patientProfile.streakDays}-day care streak
          </Badge>
          <div className="space-y-3">
            <h1 className="font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
              Gentle progress you can feel good about.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">{patientProfile.confidenceNote}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/session/session-2">
                Start today’s session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/encouragement">See encouragement</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-3">
          {patientProfile.accomplishments.map((item) => (
            <div key={item} className="rounded-[28px] bg-white/80 p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF4F1] text-primary">
                <Heart className="h-5 w-5" />
              </div>
              <p className="text-base leading-7 text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
