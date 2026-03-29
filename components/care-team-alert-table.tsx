import { sessionSummaries } from "@/data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CareTeamAlertTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Session summaries and alerts</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-muted-foreground">
            <tr>
              <th className="pb-3 pr-4 font-medium">Patient</th>
              <th className="pb-3 pr-4 font-medium">Date</th>
              <th className="pb-3 pr-4 font-medium">Summary</th>
              <th className="pb-3 pr-4 font-medium">Symptoms</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {sessionSummaries.map((session) => (
              <tr key={session.id} className="border-t border-border align-top">
                <td className="py-4 pr-4">{session.patientName}</td>
                <td className="py-4 pr-4">{session.date}</td>
                <td className="py-4 pr-4 text-muted-foreground">{session.summary}</td>
                <td className="py-4 pr-4">
                  <div className="flex flex-wrap gap-2">
                    {session.symptoms.map((symptom) => (
                      <Badge key={symptom} variant={session.status === "flagged" ? "danger" : "secondary"}>
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </td>
                <td className="py-4">
                  <Badge variant={session.status === "flagged" ? "danger" : "success"}>
                    {session.status === "flagged" ? "Review now" : "Stable"}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
