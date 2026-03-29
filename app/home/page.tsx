import Link from "next/link";
import { ArrowRight, CalendarHeart, Clock3, Heart, Timer } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { patientContext, patientProfile, weeklySchedule } from "@/data/mock-data";
import { formatTime } from "@/lib/utils";

export default function HomePage() {
  const todayList = weeklySchedule;

  return (
    <AppShell activeHref="/home">
      <div className="space-y-5">
        <Card className="border-none bg-hero-glow">
          <CardContent className="space-y-3 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-primary/80">Home</p>
            <h1 className="font-serif text-4xl leading-tight text-slate-900">Welcome {patientContext.patientName}!</h1>
            <p className="text-lg leading-8 text-slate-700"><strong>Today’s goal:</strong> keep a steady routine.</p>
          </CardContent>
        </Card>

        <Card className="bg-[#FFF8E7]">
          <CardHeader>
            <CardTitle className="text-3xl">Today’s itinerary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayList.map((activity, index) => (
              <Link key={activity.id} href={`/session/${activity.id}`} className="block">
                <div className="rounded-[26px] bg-white p-5 shadow-sm transition hover:translate-y-[-1px]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-primary/80">Exercise {index + 1}</p>
                      <p className="mt-1 font-serif text-3xl leading-tight text-slate-900">{activity.title}</p>
                    </div>
                    <ArrowRight className="mt-2 h-6 w-6 text-primary" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3 text-base text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-5 w-5 text-primary" />
                      {formatTime(activity.time)}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Timer className="h-5 w-5 text-primary" />
                      {activity.durationMinutes} minutes
                    </span>
                  </div>
                  <p className="mt-3 text-lg leading-8 text-muted-foreground">{activity.focus}</p>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Program progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <CalendarHeart className="h-6 w-6" />
              <p className="text-xl font-medium">
                <strong>{patientContext.sessionsCompleted}/{patientContext.totalSessions}</strong>{" "}
                visits completed
              </p>
            </div>
            <div className="h-5 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${(patientContext.sessionsCompleted / patientContext.totalSessions) * 100}%` }}
              />
            </div>
            <div className="rounded-[24px] bg-secondary/50 p-5">
              <div className="inline-flex items-center gap-2 text-primary">
                <Heart className="h-5 w-5" />
                <strong>{patientContext.streak}-day streak</strong>
              </div>
              <p className="mt-2 text-lg leading-8 text-muted-foreground">
                Goal: {patientContext.careTeamGoals.toLowerCase()}.
              </p>
            </div>
            <Button size="lg" asChild className="h-14 w-full text-lg">
              <Link href="/session/session-1">
                <span>
                  Start{" "}
                  <strong>Focus Mode</strong>
                </span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
