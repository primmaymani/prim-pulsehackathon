import { VolunteerSubmission } from "@/lib/types";
import { ModerationStatusBadge } from "@/components/moderation-status-badge";
import { Card, CardContent } from "@/components/ui/card";

export function VolunteerMessageCard({ message }: { message: VolunteerSubmission }) {
  return (
    <Card>
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-medium">{message.author}</p>
            <p className="text-sm text-muted-foreground">Community volunteer submission</p>
          </div>
          <ModerationStatusBadge status={message.status} />
        </div>
        <p className="text-base leading-7 text-slate-700">{message.message}</p>
        <p className="text-sm text-muted-foreground">{message.reason}</p>
      </CardContent>
    </Card>
  );
}
