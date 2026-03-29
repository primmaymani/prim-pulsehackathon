import { sessionSummaries } from "@/data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CareTeamAlertTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">Session summaries and alerts</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {sessionSummaries.map((session) => (
          <div key={session.id} className="rounded-[24px] bg-secondary/35 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm text-muted-foreground">{session.date}</p>
                <p className="text-xl font-medium">{session.patientName}</p>
              </div>
              <Badge variant={session.status === "flagged" ? "danger" : "success"}>
                {session.status === "flagged" ? "Review now" : "Stable"}
              </Badge>
            </div>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{session.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {session.symptoms.map((symptom) => (
                <Badge key={symptom} variant={session.status === "flagged" ? "danger" : "secondary"}>
                  {symptom}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
