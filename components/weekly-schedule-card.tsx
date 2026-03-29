import { Clock3, House, Hospital } from "lucide-react";
import { weeklySchedule } from "@/data/mock-data";
import { formatMinutes, formatTime } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function WeeklyScheduleCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>This week’s rhythm</CardTitle>
          <p className="text-sm text-muted-foreground">Two home sessions and one program visit, paced to the care note.</p>
        </div>
        <Button variant="outline">Adjust times</Button>
      </CardHeader>
      <CardContent className="grid gap-3">
        {weeklySchedule.map((session) => (
          <div key={session.id} className="flex flex-col gap-3 rounded-[24px] border border-border/70 bg-background p-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-[20px] bg-secondary p-4 text-center">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{session.day}</p>
                <p className="font-serif text-xl">{session.dateLabel}</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium">{session.title}</p>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-4 w-4" />
                    {formatTime(session.time)} · {formatMinutes(session.durationMinutes)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    {session.location === "Home" ? <House className="h-4 w-4" /> : <Hospital className="h-4 w-4" />}
                    {session.location}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{session.focus}</p>
              </div>
            </div>
            <Badge variant={session.status === "completed" ? "success" : "secondary"}>
              {session.status === "completed" ? "Completed" : session.intensity}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
