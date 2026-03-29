import { AppShell } from "@/components/app-shell";
import { PageHero } from "@/components/page-hero";
import { VolunteerMessageCard } from "@/components/volunteer-message-card";
import { volunteerMessages } from "@/data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VolunteerReviewPage() {
  return (
    <AppShell>
      <PageHero
        title="Volunteer moderation review"
        description="A demo moderation layer where AI-assisted checks look for unsafe tone, medical advice, or attempts to override the patient’s care plan."
      />
      <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <div className="space-y-4">
          {volunteerMessages.map((message) => (
            <VolunteerMessageCard key={message.id} message={message} />
          ))}
        </div>
        <Card className="bg-[#EEF5F8]">
          <CardHeader>
            <CardTitle>Moderation policy summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-base leading-7 text-slate-700">
            <p>Approves kind, general encouragement.</p>
            <p>Flags any message that sounds like treatment advice, exercise changes, pressure, shame, or unsafe instructions.</p>
            <p>Keeps a visible review state so volunteers know the process is thoughtful and respectful.</p>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
