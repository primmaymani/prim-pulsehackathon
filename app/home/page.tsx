import Link from "next/link";
import { BellRing, Clock3, HeartHandshake } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { StreakHero } from "@/components/streak-hero";
import { WeeklyScheduleCard } from "@/components/weekly-schedule-card";
import { EncouragementFeed } from "@/components/encouragement-feed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { patientProfile, weeklySchedule } from "@/data/mock-data";
import { formatTime } from "@/lib/utils";

export default function HomePage() {
  const today = weeklySchedule[1];

  return (
    <AppShell activeHref="/home">
      <div className="space-y-8">
        <StreakHero />
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <Card className="bg-[#FFF9EC]">
              <CardHeader>
                <CardTitle>Today’s training plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-[24px] bg-white p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Next session</p>
                      <p className="font-serif text-3xl">{today.title}</p>
                    </div>
                    <div className="rounded-[20px] bg-secondary px-4 py-3 text-sm">
                      <div className="inline-flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-primary" />
                        {formatTime(today.time)}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {today.focus}. Home-based and paced to your rehab note.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" asChild className="flex-1">
                    <Link href={`/session/${today.id}`}>Start today’s session</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    Adjust preferred time
                  </Button>
                </div>
              </CardContent>
            </Card>
            <WeeklyScheduleCard />
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Support circle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-[24px] bg-secondary/55 p-5">
                  <p className="font-serif text-4xl">{patientProfile.supportCircleCount}</p>
                  <p className="text-muted-foreground">people ready to encourage you after each session</p>
                </div>
                <div className="rounded-[24px] bg-[#EEF5F8] p-5">
                  <div className="inline-flex items-center gap-2 text-primary">
                    <BellRing className="h-5 w-5" />
                    Care-friendly reminders on
                  </div>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Short prompts for session time, check-in time, and “Nurse Clara can repeat that” moments.
                  </p>
                </div>
                <Button variant="secondary" size="lg" asChild className="w-full">
                  <Link href="/assistant">
                    <HeartHandshake className="mr-2 h-5 w-5" />
                    Open Nurse Clara
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <EncouragementFeed />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
